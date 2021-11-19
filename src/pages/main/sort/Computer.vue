<template>
  <div class="row">
    <shangping title="网页设计与网站建设" prices="￥44.20" prices_1="59.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url1"
          :preview-src-list="srcList1"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="css权威指南" prices="￥88.00" prices_1="198.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url2"
          :preview-src-list="srcList2"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="JavaScript程序设计" prices="￥86.50" prices_1="159.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url3"
          :preview-src-list="srcList3"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="jQuery前端开发" prices="￥39.00" prices_1="78.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url4"
          :preview-src-list="srcList4"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="bootstrap实战" prices="￥39.00" prices_1="78.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url5"
          :preview-src-list="srcList5"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="vue.js 3.0" prices="￥49.20" prices_1="99.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url6"
          :preview-src-list="srcList6"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="高性能MySQL" prices="￥74.00" prices_1="148.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url7"
          :preview-src-list="srcList7"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="Java从入门到精通" prices="￥34.90" prices_1="69.80">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url8"
          :preview-src-list="srcList8"
        >
        </el-image>
      </div>
    </shangping>
  </div>
</template>

<script>
import shangping from "./shangping.vue";
export default {
  name: "Computer",
  components: { shangping },
  data() {
    return {
      url1: "http://img3m2.ddimg.cn/47/13/25195052-1_b_1.jpg",
      url2: "http://img3m3.ddimg.cn/61/34/27380293-1_b_6.jpg",
      url3: "http://img3m7.ddimg.cn/64/26/29120617-1_b_10.jpg",
      url4: "http://img3m2.ddimg.cn/97/16/29294692-1_b_2.jpg",
      url5: "http://img3m9.ddimg.cn/50/6/28481459-1_b_3.jpg",
      url6: "http://img3m5.ddimg.cn/50/1/29238215-1_b_9.jpg",
      url7: "http://img3m2.ddimg.cn/95/21/29227172-1_b_9.jpg",
      url8: "http://img3m1.ddimg.cn/29/32/26912981-1_b_6.jpg",
      srcList1: ["http://img3m2.ddimg.cn/47/13/25195052-1_b_1.jpg"],
      srcList2: ["http://img3m3.ddimg.cn/61/34/27380293-1_b_6.jpg"],
      srcList3: ["http://img3m7.ddimg.cn/64/26/29120617-1_b_10.jpg"],
      srcList4: ["http://img3m2.ddimg.cn/97/16/29294692-1_b_2.jpg"],
      srcList5: ["http://img3m9.ddimg.cn/50/6/28481459-1_b_3.jpg"],
      srcList6: ["http://img3m5.ddimg.cn/50/1/29238215-1_b_9.jpg"],
      srcList7: ["http://img3m2.ddimg.cn/95/21/29227172-1_b_9.jpg"],
      srcList8: ["http://img3m1.ddimg.cn/29/32/26912981-1_b_6.jpg"],
    };
  },
};
</script>

<style></style>
