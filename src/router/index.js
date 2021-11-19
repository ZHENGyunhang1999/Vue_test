//引入VueRouter
import VueRouter from "vue-router";
import Index from "../pages/main/Index";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Order from "../pages/main/Order";
import BookInfo from "../pages/main/BookInfo";
import Cart from "../pages/main/Cart";
import FriendLink from "../pages/main/FriendLink";
import OrderInfo from "../pages/main/OrderInfo";
import UserInfo from "../pages/main/UserInfo";
import Computer from "../pages/main/sort/Computer";
import History from "../pages/main/sort/History";
import Novel from "../pages/main/sort/Novel";
import Science from "../pages/main/sort/Science";
import Urban from "../pages/main/sort/Urban";
//创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          name: "index",
          path: "index",
          component: Index,

          children: [
            {
              name: "computer",
              path: "computer",
              component: Computer,
            },
            {
              name: "history",
              path: "history",
              component: History,
            },
            {
              name: "novel",
              path: "novel",
              component: Novel,
            },
            {
              name: "science",
              path: "science",
              component: Science,
            },
            {
              name: "urban",
              path: "urban",
              component: Urban,
            },
          ],
          redirect: "/index/computer",
        },
        {
          name: "order",
          path: "/order",
          component: Order,
        },
        {
          name: "bookInfo",
          path: "/bookInfo",
          component: BookInfo,
        },
        {
          name: "cart",
          path: "/cart",
          component: Cart,
        },
        {
          name: "frindlink",
          path: "/frindlink",
          component: FriendLink,
        },
        {
          name: "ogin",
          path: "/login",
          component: Login,
        },
        {
          name: "orderInfo",
          path: "/orderInfo",
          component: OrderInfo,
        },
        {
          name: "userinfo",
          path: "/userinfo",
          component: UserInfo,
        },
      ],
      redirect: "/index",
    },

    {
      name: "login",
      path: "login",
      component: Login,
    },
  ],
});
