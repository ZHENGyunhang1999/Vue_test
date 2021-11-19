<template>
  <div class="row thumbnail">
    <div class="col-sm-4">
      <img
        style="width: 100%; height: 500px; display: block"
        src="http://img3m2.ddimg.cn/47/13/25195052-1_b_1.jpg"
        data-holder-rendered="true"
      />
      <div class="caption center">
        <h3>{{ title }}</h3>
        <p>作者</p>
        <p>{{ price }}</p>
        <p>
          <a class="btn btn-primary btn-block" role="button" href="#"
            >立即购买</a
          >
          <a class="btn btn-default btn-block" role="button" href="#"
            >加入购物车</a
          >
        </p>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="caption">
        <h3>图书介绍</h3>
        <p>
          世界500强信息部门主管+网站架构师15年经验干货分享，涵盖网站的规划、架构、设计、代码编写、测试、发布、维护、推广及优化等过程，配800分钟同步教学视频以及精品设计资源
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BookInfo",
  computed: {
    ...mapState(["title", "price"]),
  },
};
</script>

<style scoped>
.row {
  margin-left: 20px;
  margin-right: 20px;
}
.center {
  text-align: center;
}
</style>
