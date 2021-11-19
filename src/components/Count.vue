<template>
  <div>
    <div class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="sr-only">这什么东西</span>
          </button>
          <a class="navbar-brand">郑云航</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link active-class="active" :to="{ name: 'index' }"
                >首页</router-link
              >
            </li>
            <li>
              <router-link active-class="active" :to="{ name: 'order' }"
                >我的订单</router-link
              >
            </li>
            <li>
              <router-link active-class="active" :to="{ name: 'userinfo' }"
                >个人中心</router-link
              >
            </li>
            <!-- <li>
                <router-link active-class="active" :to="{ name: 'frindlink' }"
                  >友情链接</router-link
                >
              </li> -->
          </ul>
          <ul class="nav navbar-nav navbar-right hidden-sm">
            <li><router-link :to="{ name: 'login' }">登录</router-link></li>
            <li>
              <router-link :to="{ name: 'cart' }"
                ><span>购物车</span></router-link
              >
            </li>
          </ul>
        </div>

        <!--/.nav-collapse -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Count",
};
</script>

<style scoped></style>
