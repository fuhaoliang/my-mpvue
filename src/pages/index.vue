<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div style="width: 100%">
       <van-slider
  value="50"
  bar-height="4px"
  active-color="#f44"
/>
    </div>
    <van-tag>标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter" class="counter">去往Vuex示例页面</a>
    <div @click="goTo()">去counter</div>
    <!-- <common/> -->
  </div>
</template>



<script>
import card from '@/components/card'
import common from '@/components/common'
// const moment = require('http://momentjs.cn/downloads/moment.min.js')
// console.info('monment', moment)
import Http from '@/utils/http'
export default {
  mpType: 'page',

  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card,
    common
  },
  mounted () {
    this.request()
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  },
  methods: {
    bindViewTap () {
      const url = '/packageA/logs'
      this.$router.push(url)
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // eslint-disable-next-line
      console.log('clickHandle:', msg, ev)
    },
    goTo () {
      this.$router.push({ path: '/pages/counter', query: { id: 5 } })
    },
    onChange (event) {
      wx.showToast({
        icon: 'none',
        title: `当前值：${event.detail}`
      })
    },
    async request () {
      const a = await Http.mobileApi.getMaintenanceInfo()
      console.info('a', a)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang='less'>
@import '../assets/css/common.less';
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}


.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  // color: blue;
  color: @blue1;
  border: 1px solid blue;
}
</style>
