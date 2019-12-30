<template>
  <div>
    <ul>
      <li v-for="(item,index) in ListData " :key="index" class="item">
        <img @click="bindDetail(item)" :src="imgUrl + item.coverUrl" alt />
        <p>{{item.authorName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ListData: [],
      imgUrl: "https://static.zongheng.com/upload/s_image"
    };
  },
  created() {
    this.getBookData();
  },
  methods: {
    getBookData() {
      axios.get("/data.json").then(res => {
        console.log(res.data.ranklist2, "res");
        this.ListData = res.data.ranklist3;
      });
    },
    bindDetail(item) {
      this.$router.push({
        name: "detail",
        query: {
          id: item.bookId
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  border-bottom: 1px solid;
}
p {
  line-height: 150px;
  font-weight: bolder;
  font-family: "华文彩云";
  font-size: 35px;
}
</style>