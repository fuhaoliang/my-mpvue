<template>
  <div>
    <van-popup show="true">
      <van-loading color="#fff" size="150rpx" custom-class="loading-box" type="spinner"/>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: 'Loading'
}
</script>
<style lang="less">
.van-popup{
  border-radius: 6rpx;
  background-color: rgba(0,0,0,0);
  overflow: hidden;
}
.loading-box{
  border-radius: 6rpx;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>


