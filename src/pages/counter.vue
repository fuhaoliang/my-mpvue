<template>
  <div class="counter-warp">
      <a href="/pages/home" class="counter">去往home示例页面</a>
      <mpvue-gesture-lock :containerWidth="600" :cycleRadius="70" @end="onEnd" :password="password"></mpvue-gesture-lock>
     <div class="result">{{data}}</div>
    <div class="result">正确密码是：12369</div>
    <card :text="'ffffff'"></card>
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index" class="home">去往首页</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import mpvueGestureLock from '@/components/mpvueGestureLock/index'
import card from '@/components/card'

export default {
  config: {
    navigationBarTitleText: 'Vuex示例',
    disableScroll: true
  },
  data () {
    return {
      data: [],
      password: [1, 2, 3, 6, 9]
    }
  },
  components: {
    card,
    mpvueGestureLock
  },
  computed: {
    ...mapState([
      'count'
    ])
  },
  mounted () {
    const { id } = this.$route.query
    this.$store.state.count = id - 0
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    onEnd (data) {
      this.data = data
    }
  }
}
</script>

<style lang="less">
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
