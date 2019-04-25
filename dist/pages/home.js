require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([6],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(17);







// import { Message } from 'element-ui'
var Fly = __webpack_require__(131);
var fly = new Fly();

fly.config.timeout = 5000;
fly.config.withCredentials = false;
fly.interceptors.request.use(function (request) {
  request.headers['X-Tag'] = 'flyio';
  console.log(request.body);
  return request;
}, function (error) {
  console.info('error');
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.reject(error);
});

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // 发生网络错误后会走到这里
  return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.resolve(error);
});

var tipMsg = {
  '401': '请重新登录',
  '403': '未授权'
};

var Http = {};

var _loop = function _loop(i) {
  var service = __WEBPACK_IMPORTED_MODULE_4__services__["a" /* default */][i];
  var serviceHost = service['host'];
  Http[i] = {};

  var _loop2 = function _loop2(ind) {
    if (ind === 'host') {
      return 'continue';
    }
    var api = service[ind];
    Http[i][ind] = function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(params) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var isNeedStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var apiUrl, newParams, data, config, host, response, errorObj;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                apiUrl = api.url;
                newParams = {};

                options = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({
                  title: '加载中',
                  mask: false,
                  loading: false,
                  show: true,
                  error: true,
                  mock: false,
                  proxy: false
                }, options);
                if (params) {
                  __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* default */].each(params, function (ind, param) {
                    if (apiUrl.indexOf('{' + ind + '}') > -1) {
                      apiUrl = apiUrl.replace('{' + ind + '}', param);
                    } else {
                      newParams[ind] = param;
                    }
                  });
                }
                data = newParams;
                // || params instanceof FormData

                if (Array.isArray(params)) {
                  data = params;
                }
                config = {
                  headers: {}
                };

                if (headers.permission) {
                  console.info('权限判断');
                } else {
                  config.headers = headers;
                }
                if (options.loading) {
                  __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].commit('set_loading', true);
                }
                if (options.show) {
                  wx.showLoading({ title: options.title, mask: options.mask });
                  __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].commit('set_loadingShow', true);
                }
                host = (api.mock || options.mock) && "development" === 'development' || options.proxy ? '' : serviceHost;

                console.info('host----->', host);
                response = {};

                if (!(api.method === 'put' || api.method === 'post' || api.method === 'patch')) {
                  _context.next = 19;
                  break;
                }

                _context.next = 16;
                return fly[api.method](host + apiUrl, data, config);

              case 16:
                response = _context.sent;
                _context.next = 23;
                break;

              case 19:
                config.params = newParams;
                _context.next = 22;
                return fly[api.method](host + apiUrl, config);

              case 22:
                response = _context.sent;

              case 23:
                errorObj = {
                  status: {
                    code: -1,
                    message: 'Error: Network Error'
                  }
                };

                console.info('response', response);
                console.info('response.response', response.response);
                if (response.response) {
                  errorObj.status.code = response.response.status;
                  errorObj.status.message = response.response.status + ' ' + (response.response.statusText ? response.response.statusText : tipMsg[response.response.status]);
                  if (errorObj.status.code === 401) {
                    console.log('goto login');
                  }
                  if (response.response.data && response.response.data.error_code) {
                    errorObj.status.message = response.response.data.msg;
                  }
                  response = response.response;
                }
                if (response.status === 200 || response.status === 201) {
                  console.info('sucess---http');
                } else {
                  response.data = errorObj;
                  if (options.error) {
                    // Message.error(errorObj.status.message)
                    console.info('object', errorObj.status.message);
                  }
                }
                if (!isNeedStatus) {
                  response = response.data;
                }
                if (options.loading) {
                  __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].commit('set_loading', false);
                }
                if (options.show) {
                  wx.hideLoading({ title: options.title, mask: options.mask });
                  __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].commit('set_loadingShow', false);
                }
                console.info('response', response);
                return _context.abrupt('return', response);

              case 33:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  };

  for (var ind in service) {
    var _ret2 = _loop2(ind);

    if (_ret2 === 'continue') continue;
  }
};

for (var i in __WEBPACK_IMPORTED_MODULE_4__services__["a" /* default */]) {
  _loop(i);
}

/* harmony default export */ __webpack_exports__["a"] = (Http);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_app__ = __webpack_require__(109);

console.info('fruit-apple', __WEBPACK_IMPORTED_MODULE_0__config_app__["a" /* default */]);
var mobileApi = {
  host: __WEBPACK_IMPORTED_MODULE_0__config_app__["a" /* default */].baseUrl,
  getMaintenanceInfo: {
    method: 'get',
    url: '/hsmweb/api/app/GetMaintenanceInfo1'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  mobileApi: mobileApi
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  env: 'uat',
  baseUrl: 'https://uat-mobileapi.homestyler.com'
});


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_0_1_3_mpvue_config_loader_index_js_home_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5aab7bd8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_0_1_3_mpvue_config_loader_index_js_home_vue__ = __webpack_require__(167);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(11)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_0_1_3_mpvue_config_loader_index_js_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5aab7bd8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_0_1_3_mpvue_config_loader_index_js_home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5aab7bd8", Component.options)
  } else {
    hotAPI.reload("data-v-5aab7bd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_card__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(35);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import { showToast } from '@/utils/toast'

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'Hello World',
      userInfo: {}
    };
  },


  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["c" /* mapState */])(['loading'])),
  components: {
    card: __WEBPACK_IMPORTED_MODULE_3__components_card__["a" /* default */]
  },

  mounted: function mounted() {
    this.request();
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],

      success: function success(res) {
        console.log(res.tapIndex);
      },
      fail: function fail(res) {
        console.log(res.errMsg);
      }
    });
  },


  methods: {
    handlerClick: function handlerClick() {
      // showToast()
      wx.showLoading({
        title: '加载中'
      });
    },
    bindViewTap: function bindViewTap() {
      var url = '/packageA/logs';
      this.$router.push(url);
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      // eslint-disable-next-line
      console.log('clickHandle:', msg, ev);
    },
    goTo: function goTo() {
      this.$router.push({
        path: '/pages/counter',
        query: {
          id: 5
        }
      });
    },
    onChange: function onChange(event) {
      wx.showToast({
        icon: 'none',
        title: '\u5F53\u524D\u503C\uFF1A' + event.detail
      });
    },
    request: function request() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var a;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__utils_http__["a" /* default */].mobileApi.getMaintenanceInfo();

              case 2:
                a = _context.sent;

                console.info('a', a);
                console.info('loading', _this2.loading);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('div', {
    staticClass: "userinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.bindViewTap
    }
  }, [(_vm.userInfo.avatarUrl) ? _c('img', {
    staticClass: "userinfo-avatar",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "userinfo-nickname"
  }, [_c('card', {
    attrs: {
      "text": _vm.userInfo.nickName,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('van-slider', {
    attrs: {
      "value": "50",
      "bar-height": "4px",
      "active-color": "#f44",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('van-tag', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_vm._v("标签")]), _vm._v(" "), _c('van-tag', {
    attrs: {
      "type": "danger",
      "mpcomid": '3'
    }
  }, [_vm._v(_vm._s(_vm.loading))]), _vm._v(" "), _c('van-tag', {
    attrs: {
      "type": "primary",
      "mpcomid": '4'
    }
  }, [_vm._v("标签")]), _vm._v(" "), _c('van-tag', {
    attrs: {
      "type": "success",
      "mpcomid": '5'
    }
  }, [_vm._v("标签")]), _vm._v(" "), _c('div', {
    staticClass: "usermotto"
  }, [_c('div', {
    staticClass: "user-motto"
  }, [_c('card', {
    attrs: {
      "text": _vm.motto,
      "mpcomid": '6'
    }
  })], 1)]), _vm._v(" "), _c('form', {
    staticClass: "form-container"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.motto),
      expression: "motto"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "v-model",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.motto)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.motto = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.motto),
      expression: "motto",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "v-model.lazy",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.motto)
    },
    on: {
      "change": function($event) {
        _vm.motto = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/counter"
    }
  }, [_vm._v("去往Vuex示例页面")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.goTo()
      }
    }
  }, [_vm._v("去counter")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.handlerClick()
      }
    }
  }, [_vm._v("showToast")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5aab7bd8", esExports)
  }
}

/***/ })

},[168]);