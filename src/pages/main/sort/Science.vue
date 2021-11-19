<template>
  <div class="row">
    <shangping title="科技之巅" prices="￥23.20" prices_1="128.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url1"
          :preview-src-list="srcList1"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="未来科技通史" prices="￥56.00" prices_1="76.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url2"
          :preview-src-list="srcList2"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="科技前沿" prices="￥36.50" prices_1="69.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url3"
          :preview-src-list="srcList3"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="硬科技" prices="￥77.00" prices_1="149.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url4"
          :preview-src-list="srcList4"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="中国军事科普" prices="￥149.00" prices_1="260.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url5"
          :preview-src-list="srcList5"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="儿童军事" prices="￥79.20" prices_1="89.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url6"
          :preview-src-list="srcList6"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="军事百科" prices="￥334.00" prices_1="448.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url7"
          :preview-src-list="srcList7"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="dk军事" prices="￥158.90" prices_1="168.80">
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
      url1: "http://img3m7.ddimg.cn/53/30/27886967-1_b_18.jpg",
      url2: "http://img3m6.ddimg.cn/80/22/27946196-1_b_3.jpg",
      url3: "http://img3m5.ddimg.cn/96/31/29167575-1_b_3.jpg",
      url4: "http://img3m0.ddimg.cn/9/22/29307870-1_b_5.jpg",
      url5: "http://img3m1.ddimg.cn/54/30/29241981-1_b_19.jpg",
      url6: "http://img3m2.ddimg.cn/45/12/29279592-1_b_13.jpg",
      url7: "http://img3m8.ddimg.cn/55/7/25088338-1_b_5.jpg",
      url8: "http://img3m1.ddimg.cn/46/22/29117431-1_b_9.jpg",
      srcList1: ["http://img3m7.ddimg.cn/53/30/27886967-1_b_18.jpg"],
      srcList2: ["http://img3m6.ddimg.cn/80/22/27946196-1_b_3.jpg"],
      srcList3: ["http://img3m5.ddimg.cn/96/31/29167575-1_b_3.jpg"],
      srcList4: ["http://img3m0.ddimg.cn/9/22/29307870-1_b_5.jpg"],
      srcList5: ["http://img3m1.ddimg.cn/54/30/29241981-1_b_19.jpg"],
      srcList6: ["http://img3m2.ddimg.cn/45/12/29279592-1_b_13.jpg"],
      srcList7: ["http://img3m8.ddimg.cn/55/7/25088338-1_b_5.jpg"],
      srcList8: ["http://img3m1.ddimg.cn/46/22/29117431-1_b_9.jpg"],
    };
  },
};
</script>

<style></style>
