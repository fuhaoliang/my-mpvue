import app from '../../config/app'
console.info('fruit-apple', app)
const mobileApi = {
  host: app.baseUrl,
  getMaintenanceInfo: {
    method: 'get',
    url: '/hsmweb/api/app/GetMaintenanceInfo1'
  }
}

export default {
  mobileApi
}
