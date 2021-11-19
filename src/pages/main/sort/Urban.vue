<template>
  <div class="row">
    <shangping title="婚宠" prices="￥43.20" prices_1="728.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url1"
          :preview-src-list="srcList1"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="最后是你" prices="￥56.00" prices_1="76.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url2"
          :preview-src-list="srcList2"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="现货" prices="￥36.50" prices_1="69.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url3"
          :preview-src-list="srcList3"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="那个不为人知的故事" prices="￥77.00" prices_1="149.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url4"
          :preview-src-list="srcList4"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="吃路漫漫" prices="￥49.00" prices_1="60.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url5"
          :preview-src-list="srcList5"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="盛世心动" prices="￥59.20" prices_1="89.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url6"
          :preview-src-list="srcList6"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="爱如夏花" prices="￥34.00" prices_1="48.00">
      <div class="demo-image__preview">
        <el-image
          style="width: 258px; height: 200px"
          :src="url7"
          :preview-src-list="srcList7"
        >
        </el-image>
      </div>
    </shangping>
    <shangping title="浮色" prices="￥28.90" prices_1="38.80">
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
      url1: "http://img3m1.ddimg.cn/67/21/28968061-1_b_3.jpg",
      url2: "http://img3m2.ddimg.cn/68/6/1898133602-1_b_1.jpg",
      url3: "http://img3m8.ddimg.cn/44/23/11023341758-1_b_1.jpg",
      url4: "http://img3m6.ddimg.cn/66/8/1892222706-1_b_1.jpg",
      url5: "http://img3m1.ddimg.cn/21/2/28496181-1_b_3.jpg",
      url6: "http://img3m5.ddimg.cn/34/0/29268295-1_b_2.jpg",
      url7: "http://img3m4.ddimg.cn/90/0/11026145484-1_b_1.jpg",
      url8: "http://img3m4.ddimg.cn/21/26/11026166304-1_b_1.jpg",
      srcList1: ["http://img3m1.ddimg.cn/67/21/28968061-1_b_3.jpg"],
      srcList2: ["http://img3m2.ddimg.cn/68/6/1898133602-1_b_1.jpg"],
      srcList3: ["http://img3m8.ddimg.cn/44/23/11023341758-1_b_1.jpg"],
      srcList4: ["http://img3m6.ddimg.cn/66/8/1892222706-1_b_1.jpg"],
      srcList5: ["http://img3m1.ddimg.cn/21/2/28496181-1_b_3.jpg"],
      srcList6: ["http://img3m5.ddimg.cn/34/0/29268295-1_b_2.jpg"],
      srcList7: ["http://img3m4.ddimg.cn/90/0/11026145484-1_b_1.jpg"],
      srcList8: ["http://img3m4.ddimg.cn/21/26/11026166304-1_b_1.jpg"],
    };
  },
};
</script>

<style></style>
