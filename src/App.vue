<script>
export default {
  globalConfig: {
    usingComponents: {
      'van-tag': 'vant-weapp/dist/tag/index',
      'van-slider': 'vant-weapp/dist/slider/index',
      'van-popup': 'vant-weapp/dist/popup/index',
      'van-loading': 'vant-weapp/dist/loading/index'
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="less">
// @import './assets/css/common.less';

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
  // color: @blue1;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
