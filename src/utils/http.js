import services from './services'
import utils from './utils'
import store from '../store'
// import { Message } from 'element-ui'
const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()

fly.config.timeout = 5000
fly.config.withCredentials = false
fly.interceptors.request.use(
  request => {
    request.headers['X-Tag'] = 'flyio'
    console.log(request.body)
    return request
  },
  error => {
    console.info('error')
    Promise.reject(error)
  }
)

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // 发生网络错误后会走到这里
    return Promise.resolve(error)
  }
)

const tipMsg = {
  '401': '请重新登录',
  '403': '未授权'
}

const Http = {}

for (const i in services) {
  const service = services[i]
  const serviceHost = service['host']
  Http[i] = {}
  for (const ind in service) {
    if (ind === 'host') {
      continue
    }
    const api = service[ind]
    Http[i][ind] = async function (params, options = {}, headers = {}, isNeedStatus = false) {
      let apiUrl = api.url
      const newParams = {}
      options = Object.assign({
        title: '加载中',
        mask: false,
        loading: false,
        show: true,
        error: true,
        mock: false,
        proxy: false
      },
      options)
      if (params) {
        utils.each(params, function (ind, param) {
          if (apiUrl.indexOf('{' + ind + '}') > -1) {
            apiUrl = apiUrl.replace('{' + ind + '}', param)
          } else {
            newParams[ind] = param
          }
        })
      }
      let data = newParams
      // || params instanceof FormData
      if (Array.isArray(params)) {
        data = params
      }
      const config = {
        headers: {}
      }
      if (headers.permission) {
        console.info('权限判断')
      } else {
        config.headers = headers
      }
      if (options.loading) {
        store.commit('set_loading', true)
      }
      if (options.show) {
        wx.showLoading({ title: options.title, mask: options.mask })
        store.commit('set_loadingShow', true)
      }
      const host = ((api.mock || options.mock) && process.env.NODE_ENV === 'development') || options.proxy ? '' : serviceHost
      console.info('host----->', host)
      let response = {}
      if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
        response = await fly[api.method](host + apiUrl, data, config)
      } else {
        config.params = newParams
        response = await fly[api.method](host + apiUrl, config)
      }
      const errorObj = {
        status: {
          code: -1,
          message: 'Error: Network Error'
        }
      }
      console.info('response', response)
      console.info('response.response', response.response)
      if (response.response) {
        errorObj.status.code = response.response.status
        errorObj.status.message = response.response.status + ' ' + (response.response.statusText ? response.response.statusText : tipMsg[response.response.status])
        if (errorObj.status.code === 401) {
          console.log('goto login')
        }
        if (response.response.data && response.response.data.error_code) {
          errorObj.status.message = response.response.data.msg
        }
        response = response.response
      }
      if (response.status === 200 || response.status === 201) {
        console.info('sucess---http')
      } else {
        response.data = errorObj
        if (options.error) {
          // Message.error(errorObj.status.message)
          console.info('object', errorObj.status.message)
        }
      }
      if (!isNeedStatus) {
        response = response.data
      }
      if (options.loading) {
        store.commit('set_loading', false)
      }
      if (options.show) {
        wx.hideLoading({ title: options.title, mask: options.mask })
        store.commit('set_loadingShow', false)
      }
      console.info('response', response)
      return response
    }
  }
}

export default Http
