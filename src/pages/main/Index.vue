<template>
  <div>
    <div class="container">
      <el-carousel :interval="5000" arrow="always" height="460px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <el-row>
            <el-col :span="24"
              ><img
                ref="imgHeight"
                :src="item.idView"
                class="banner_img"
                style="width: 100%"
            /></el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>

      <div>
        <ul class="nav nav-tabs" id="myTabs">
          <li>
            <router-link active-class="active" :to="{ name: 'computer' }"
              >计算机</router-link
            >
          </li>
          <li>
            <router-link active-class="active" :to="{ name: 'history' }"
              >历史人文</router-link
            >
          </li>
          <li>
            <router-link active-class="active" :to="{ name: 'science' }"
              >军事科技</router-link
            >
          </li>
          <li>
            <router-link active-class="active" :to="{ name: 'urban' }"
              >都市言情</router-link
            >
          </li>
          <li>
            <router-link active-class="active" :to="{ name: 'novel' }"
              >文学小说</router-link
            >
          </li>
        </ul>
        <router-view></router-view>

        <nav class="center">
          <ul class="pagination pagination-lg">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">首页</span>
              </a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">末页</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      // 图片需要引入, 否则无法显示
      imgList: [
        { id: 5, idView: require("../../assets/images/banner1.jpg") },

        { id: 2, idView: require("../../assets/images/banner4.jpg") },
        { id: 3, idView: require("../../assets/images/banner3.jpg") },
        { id: 4, idView: require("../../assets/images/banner2.jpg") },
        { id: 1, idView: require("../../assets/images/banner5.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
.row {
  margin-top: 20px;
}
.center {
  text-align: center;
}
.pagination {
  background: #cccccc;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
