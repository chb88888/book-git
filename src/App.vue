<template>
  <div id="app">
    <router-view />
    <div class="header"> 
      <Tab />
    </div>
  </div>
</template>
<script>
import Tab from "./components/Tab";

export default {
  components: {
    Tab
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body,
#root,
#app {
  width: 100%;
  height: 100%;
}

</style>
