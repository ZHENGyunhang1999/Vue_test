<template>
  <div class="row">
    <shangping title="中国服饰通史" prices="￥99.20" prices_1="128.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url1"
          :preview-src-list="srcList1"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="历史人文地理" prices="￥68.00" prices_1="136.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url2"
          :preview-src-list="srcList2"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="北京历史人文" prices="￥96.50" prices_1="99.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url3"
          :preview-src-list="srcList3"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="成华历史地理人文" prices="￥37.00" prices_1="39.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url4"
          :preview-src-list="srcList4"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="中国历史地理人文" prices="￥349.00" prices_1="360.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url5"
          :preview-src-list="srcList5"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="古代人的日常生活" prices="￥49.20" prices_1="99.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url6"
          :preview-src-list="srcList6"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="中国历史常识" prices="￥74.00" prices_1="148.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url7"
          :preview-src-list="srcList7"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="人文与社会从则" prices="￥58.90" prices_1="168.80">
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
  name: "History",
  components: { shangping },
  data() {
    return {
      url1: "http://img3m6.ddimg.cn/70/9/29216356-1_b_3.jpg",
      url2: "http://img3m2.ddimg.cn/11/27/25583492-1_b_2.jpg",
      url3: "http://img3m8.ddimg.cn/14/18/690117728-1_b_1.jpg",
      url4: "http://img3m8.ddimg.cn/35/34/675273788-1_b_1.jpg",
      url5: "http://img3m9.ddimg.cn/50/6/28481459-1_b_3.jpg",
      url6: "http://img3m2.ddimg.cn/14/2/28509242-1_b_14.jpg",
      url7: "http://img3m7.ddimg.cn/33/34/28494807-1_b_17.jpg",
      url8: "http://img3m7.ddimg.cn/22/27/28536277-1_b_3.jpg",
      srcList1: ["http://img3m6.ddimg.cn/70/9/29216356-1_b_3.jpg"],
      srcList2: ["http://img3m2.ddimg.cn/11/27/25583492-1_b_2.jpg"],
      srcList3: ["http://img3m8.ddimg.cn/14/18/690117728-1_b_1.jpg"],
      srcList4: ["http://img3m8.ddimg.cn/35/34/675273788-1_b_1.jpg"],
      srcList5: ["http://img3m9.ddimg.cn/50/6/28481459-1_b_3.jpg"],
      srcList6: ["http://img3m2.ddimg.cn/14/2/28509242-1_b_14.jpg"],
      srcList7: ["http://img3m7.ddimg.cn/33/34/28494807-1_b_17.jpg"],
      srcList8: ["http://img3m7.ddimg.cn/22/27/28536277-1_b_3.jpg"],
    };
  },
};
</script>

<style></style>
