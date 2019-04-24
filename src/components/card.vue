<template>
  <div>
    <p class="card">
      {{text}}
    </p>
     <p class="card">
      {{text}}
    </p>
     <p class="card">
      {{text}}
    </p>
     <p class="card">
      {{text}}
    </p>
     <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="less">
@red1: green;
.card {
  padding: 10px;
}
</style>
