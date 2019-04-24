<template>
  <div class="filter-date">
    {{ dataFormat }}
  </div>
</template>
<script>
import utils from '../utils/utils.js'
export default {
  name: 'FilterDate',
  props: {
    text: {
      time: Number,
      defalut: 0
    },
    format: {
      type: String,
      defalut: 'yyyy-MM-dd'
    }
  },
  computed: {
    dataFormat () {
      return utils.formatDate(this.time, this.format)
    }
  }
}
</script>