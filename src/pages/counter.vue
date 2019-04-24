<template>
  <div class="counter-warp">
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
import card from '@/components/card'

export default {
  config: {
    navigationBarTitleText: 'Vuex示例'
  },
  components: {
    card
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
    ])
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
