<template>
  <div class="shangping">
    <div class="col-sm-4 col-md-3">
      <div class="thumbnail">
        <slot>图片失效了 我就是个插槽</slot>
        <div class="caption center">
          <h3>{{ title }}</h3>
          <p>
            <span style="color: red">{{ prices }}</span
            ><s style="color: #969696; font-size: 10px; margin-left: 5px"
              >定价{{ prices_1 }}</s
            >
          </p>
          <p>
            <router-link
              class="btn btn-primary btn-block"
              role="button"
              :to="{ name: 'bookInfo' }"
              >查看详情</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  name: "shangping",
  props: ["title", "prices", "prices_1"],
  //  data(){
  //    return{
  //      prices:'100元'
  //    }
  //  }
};
</script>

<style></style>
