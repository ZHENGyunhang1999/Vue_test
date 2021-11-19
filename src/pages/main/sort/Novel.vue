<template>
  <div class="row">
    <shangping title="罪与罚" prices="￥23.20" prices_1="128.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url1"
          :preview-src-list="srcList1"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="莫泊桑短篇小说" prices="￥16.00" prices_1="36.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url2"
          :preview-src-list="srcList2"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="小说月报" prices="￥26.50" prices_1="69.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url3"
          :preview-src-list="srcList3"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="汪曾祺小说" prices="￥57.00" prices_1="49.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url4"
          :preview-src-list="srcList4"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="边城" prices="￥49.00" prices_1="60.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url5"
          :preview-src-list="srcList5"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="毛姆短片" prices="￥49.20" prices_1="79.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url6"
          :preview-src-list="srcList6"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="鲁迅小说全集" prices="￥34.00" prices_1="148.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url7"
          :preview-src-list="srcList7"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="国际大奖小说" prices="￥58.90" prices_1="68.80">
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
      url1: "http://img3m2.ddimg.cn/74/3/23806802-1_b_10.jpg",
      url2: "http://img3m8.ddimg.cn/92/33/25121738-1_b_7.jpg",
      url3: "http://img3m7.ddimg.cn/95/8/29194007-1_b_3.jpg",
      url4: "http://img3m3.ddimg.cn/84/5/25229343-1_b_23.jpg",
      url5: "http://img3m9.ddimg.cn/3/1/26922459-1_b_17.jpg",
      url6: "http://img3m1.ddimg.cn/25/7/25284031-1_b_7.jpg",
      url7: "http://img3m1.ddimg.cn/84/0/28491591-1_b_15.jpg",
      url8: "http://img3m7.ddimg.cn/85/26/28975207-1_b_7.jpg",
      srcList1: ["http://img3m2.ddimg.cn/74/3/23806802-1_b_10.jpg"],
      srcList2: ["http://img3m8.ddimg.cn/92/33/25121738-1_b_7.jpg"],
      srcList3: ["http://img3m7.ddimg.cn/95/8/29194007-1_b_3.jpg"],
      srcList4: ["http://img3m3.ddimg.cn/84/5/25229343-1_b_23.jpg"],
      srcList5: ["http://img3m9.ddimg.cn/3/1/26922459-1_b_17.jpg"],
      srcList6: ["http://img3m1.ddimg.cn/25/7/25284031-1_b_7.jpg"],
      srcList7: ["http://img3m1.ddimg.cn/84/0/28491591-1_b_15.jpg"],
      srcList8: ["http://img3m7.ddimg.cn/85/26/28975207-1_b_7.jpg"],
    };
  },
};
</script>

<style></style>
