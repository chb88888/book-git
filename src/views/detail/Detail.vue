<template>
  <div>这里是详情页面</div>
</template>

<script>
export default {
  created() {
      console.log(this.$route.query,"详情页面")
    //   console.log(getDetailFn(),'哈哈哈')
  },
  methods: {
    getDetailFn() {
        this.$route.query.
    }
  }
};
</script>

<style>
</style>