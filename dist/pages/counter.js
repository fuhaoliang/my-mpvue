require("../common/manifest.js")
require("../common/vendor.js")
global.webpackJsonp([2],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_0_1_3_mpvue_config_loader_index_js_counter_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1407b713_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_0_1_3_mpvue_config_loader_index_js_counter_vue__ = __webpack_require__(146);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_0_1_3_mpvue_config_loader_index_js_counter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1407b713_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_0_1_3_mpvue_config_loader_index_js_counter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/counter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] counter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1407b713", Component.options)
  } else {
    hotAPI.reload("data-v-1407b713", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mpvueGestureLock_index__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_card__ = __webpack_require__(42);

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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      data: [],
      password: [1, 2, 3, 6, 9]
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_3__components_card__["a" /* default */],
    mpvueGestureLock: __WEBPACK_IMPORTED_MODULE_2__components_mpvueGestureLock_index__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])(['count'])),

  mounted: function mounted() {
    var id = this.$route.query.id;

    this.$store.state.count = id - 0;
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapMutations */])(['increment', 'decrement']), {
    onEnd: function onEnd(data) {
      this.data = data;
    }
  })
});

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1ad8ba62_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(145);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(11)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ad8ba62"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_1ad8ba62_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/mpvueGestureLock/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ad8ba62", Component.options)
  } else {
    hotAPI.reload("data-v-1ad8ba62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gestureLock__ = __webpack_require__(139);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  props: ['containerWidth', 'cycleRadius', 'password'], // 容器宽度 和 圆的半径 单位是 rpx
  data: function data() {
    return {
      isTouch: false,
      gestureLock: {}, // 锁对象
      circleArray: [], // 圆对象数组
      lineArray: [], // 已激活锁之间的线段
      activeLine: {}, // 最后一个激活的锁与当前位置之间的线段
      error: false
    };
  },

  methods: {
    onTouchStart: function onTouchStart(e) {
      this.isTouch = true;
      this.gestureLock.onTouchStart(e);
      this.refesh();
    },
    onTouchMove: function onTouchMove(e) {
      this.gestureLock.onTouchMove(e);
      this.refesh();
    },
    onTouchEnd: function onTouchEnd(e) {
      var _this = this;

      this.isTouch = false;
      var checkPoints = this.gestureLock.onTouchEnd(e);
      if (checkPoints.join('') === this.password.join('')) {
        console.log('密码正确');
        this.refesh();
        this.$emit('end', checkPoints);
      } else {
        console.log('密码错误');
        this.error = true;
        setTimeout(function () {
          _this.refesh();
          _this.$emit('end', checkPoints);
        }, 800);
      }
    },
    refesh: function refesh() {
      this.error = false;
      this.circleArray = this.gestureLock.getCycleArray();
      this.lineArray = this.gestureLock.getLineArray();
      this.activeLine = this.gestureLock.getActiveLine();
    }
  },
  mounted: function mounted() {
    this.gestureLock = new __WEBPACK_IMPORTED_MODULE_0__gestureLock__["a" /* default */](this.containerWidth, this.cycleRadius);
    this.refesh();
  }
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var GestureLock = function () {
  function GestureLock(containerWidth, cycleRadius) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, GestureLock);

    this.containerWidth = containerWidth; // 容器宽度
    this.cycleRadius = cycleRadius; // 圆的半径

    this.circleArray = []; // 全部圆的对象数组
    this.checkPoints = []; // 选中的圆的对象数组
    this.lineArray = []; // 已激活锁之间的线段数组
    this.lastCheckPoint = 0; // 最后一个激活的锁
    this.offsetX = 0; // 容器的 X 偏移
    this.offsetY = 0; // 容器的 Y 偏移
    this.activeLine = {}; // 最后一个激活的锁与当前位置之间的线段

    this.windowWidth = wx.getSystemInfoSync().windowWidth; // 窗口大小(用于rpx 和 px 转换)

    this.initCircleArray();
  }

  // 初始化 画布上的 9个圆


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(GestureLock, [{
    key: 'initCircleArray',
    value: function initCircleArray() {
      var cycleMargin = (this.containerWidth - 6 * this.cycleRadius) / 6;
      var count = 0;
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          count++;
          this.circleArray.push({
            count: count,
            x: this.rpxTopx((cycleMargin + this.cycleRadius) * (j * 2 + 1)),
            y: this.rpxTopx((cycleMargin + this.cycleRadius) * (i * 2 + 1)),
            radius: this.rpxTopx(this.cycleRadius),
            check: false,
            style: {
              left: (cycleMargin + this.cycleRadius) * (j * 2 + 1) - this.cycleRadius + 'rpx',
              top: (cycleMargin + this.cycleRadius) * (i * 2 + 1) - this.cycleRadius + 'rpx',
              width: this.cycleRadius * 2 + 'rpx'
            }
          });
        }
      }
    }
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      this.setOffset(e);
      this.checkTouch({ x: e.pageX - this.offsetX, y: e.pageY - this.offsetY });
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      this.moveDraw(e);
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      var checkPoints = this.checkPoints;
      this.reset();
      return checkPoints;
    }

    // 初始化 偏移量

  }, {
    key: 'setOffset',
    value: function setOffset(e) {
      this.offsetX = e.currentTarget.offsetLeft;
      this.offsetY = e.currentTarget.offsetTop;
    }

    // 检测当时 触摸位置是否位于 锁上

  }, {
    key: 'checkTouch',
    value: function checkTouch(_ref) {
      var x = _ref.x,
          y = _ref.y;

      for (var i = 0; i < this.circleArray.length; i++) {
        var point = this.circleArray[i];
        if (this.isPointInCycle(x, y, point.x, point.y, point.radius)) {
          if (!point.check) {
            this.checkPoints.push(point.count);
            if (this.lastCheckPoint !== 0) {
              // 已激活锁之间的线段
              var line = this.drawLine(this.lastCheckPoint, point);
              this.lineArray.push(line);
            }
            this.lastCheckPoint = point;
          }
          point.check = true;
          return;
        }
      }
    }

    // 画线 - 返回 样式 对象

  }, {
    key: 'drawLine',
    value: function drawLine(start, end) {
      var width = this.getPointDis(start.x, start.y, end.x, end.y);
      var rotate = this.getAngle(start, end);

      return {
        activeLeft: start.x + 'px',
        activeTop: start.y + 'px',
        activeWidth: width + 'px',
        activeRotate: rotate + 'deg'
      };
    }

    // 获取 画线的 角度

  }, {
    key: 'getAngle',
    value: function getAngle(start, end) {
      var x = end.x - start.x;
      var y = end.y - start.y;
      if (x >= 0) {
        return 360 * Math.atan(y / x) / (2 * Math.PI);
      } else {
        return 180 + 360 * Math.atan(y / x) / (2 * Math.PI);
      }
    }

    // 判断 当前点是否位于 锁内

  }, {
    key: 'isPointInCycle',
    value: function isPointInCycle(x, y, circleX, circleY, radius) {
      return this.getPointDis(x, y, circleX, circleY) < radius;
    }

    // 获取两点之间距离

  }, {
    key: 'getPointDis',
    value: function getPointDis(ax, ay, bx, by) {
      return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
    }

    // 移动 绘制

  }, {
    key: 'moveDraw',
    value: function moveDraw(e) {
      // 画经过的圆
      var x = e.pageX - this.offsetX;
      var y = e.pageY - this.offsetY;
      this.checkTouch({ x: x, y: y });

      // 画 最后一个激活的锁与当前位置之间的线段
      this.activeLine = this.drawLine(this.lastCheckPoint, { x: x, y: y });
    }

    // 使 画布 恢复初始状态

  }, {
    key: 'reset',
    value: function reset() {
      this.circleArray.forEach(function (item) {
        item.check = false;
      });
      this.checkPoints = [];
      this.lineArray = [];
      this.activeLine = {};
      this.lastCheckPoint = 0;
    }

    // 获取 最后一个激活的锁与当前位置之间的线段

  }, {
    key: 'getActiveLine',
    value: function getActiveLine() {
      return this.activeLine;
    }

    // 获取 圆对象数组

  }, {
    key: 'getCycleArray',
    value: function getCycleArray() {
      return this.circleArray;
    }

    // 获取 已激活锁之间的线段

  }, {
    key: 'getLineArray',
    value: function getLineArray() {
      return this.lineArray;
    }

    // 将 RPX 转换成 PX

  }, {
    key: 'rpxTopx',
    value: function rpxTopx(rpx) {
      return rpx / 750 * this.windowWidth;
    }
  }]);

  return GestureLock;
}();

/* harmony default export */ __webpack_exports__["a"] = (GestureLock);

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gesture-lock",
    class: {
      error: _vm.error
    },
    style: ({
      width: _vm.containerWidth + 'rpx',
      height: _vm.containerWidth + 'rpx'
    }),
    attrs: {
      "eventid": '0'
    },
    on: {
      "touchstart": _vm.onTouchStart,
      "touchmove": _vm.onTouchMove,
      "touchend": _vm.onTouchEnd
    }
  }, [_vm._l((_vm.circleArray), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: "cycle",
      class: {
        check: item.check
      },
      style: ({
        left: item.style.left,
        top: item.style.top,
        width: item.style.width,
        height: item.style.width
      })
    })
  }), _vm._v(" "), _vm._l((_vm.lineArray), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: "line",
      style: ({
        left: item.activeLeft,
        top: item.activeTop,
        width: item.activeWidth,
        transform: 'rotate(' + item.activeRotate + ')'
      })
    })
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isTouch),
      expression: "isTouch"
    }],
    staticClass: "line",
    style: ({
      left: _vm.activeLine.activeLeft,
      top: _vm.activeLine.activeTop,
      width: _vm.activeLine.activeWidth,
      transform: 'rotate(' + _vm.activeLine.activeRotate + ')'
    })
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1ad8ba62", esExports)
  }
}

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter-warp"
  }, [_c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/home"
    }
  }, [_vm._v("去往home示例页面")]), _vm._v(" "), _c('mpvue-gesture-lock', {
    attrs: {
      "containerWidth": 600,
      "cycleRadius": 70,
      "password": _vm.password,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "end": _vm.onEnd
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "result"
  }, [_vm._v(_vm._s(_vm.data))]), _vm._v(" "), _c('div', {
    staticClass: "result"
  }, [_vm._v("正确密码是：12369")]), _vm._v(" "), _c('card', {
    attrs: {
      "text": 'ffffff',
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('p', [_vm._v("Vuex counter：" + _vm._s(_vm.count))]), _vm._v(" "), _c('p', [_c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("-")])], 1), _vm._v(" "), _c('a', {
    staticClass: "home",
    attrs: {
      "href": "/pages/index"
    }
  }, [_vm._v("去往首页")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1407b713", esExports)
  }
}

/***/ })

},[152]);