<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/home/page">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/home/classify">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/home/among">排行</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/home/bookrack">书架</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
</style>