import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import NotFoundView from "@/views/auth/notFoundView.vue";
import NavBtnView from "@/views/TestView/NavBtnView.vue";
import ProductView from "@/views/ProductView.vue";
import ListsView from "@/views/Lists/ListsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: HomeView,
    //middleware
    beforeEnter: (to, from, next) => {
      console.log(from, to);
      if (
        from.path == "/login" ||
        from.name == "register" ||
        from.name == "404"
      ) {
        next();
      } else {
        next("login");
      }
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    beforeEnter: (from, to, next) => {
      if (localStorage.getItem("auth") == "true") {
        next()
      } else {
        next({ name: 'login' })
      }
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/LoginView.vue"),
  },
  {
    path: "/register",
    alias: "/userRegister",
    name: "register",
    component: () => import("@/views/auth/RegisterView.vue"),
  },
  {
    path: "/nav-btn",
    name: "navBtn",
    component: NavBtnView,
  },
  {
    path: "/products/:id/:title",
    name: "product",
    component: ProductView,
    props: true,
    beforeEnter: (from, to, next) => {
      if (to.name == "products") {
        next();
      } else {
        next("products");
      }
    },
  },
  {
    // redirect url
    path: "/userLogin",
    redirect: "login",
  },
  {
    path: "/lists",
    alias: "/allLists",
    name: "lists",
    component: ListsView,
  },
  {
    // 404 page
    path: "/:catchAll(.*)",
    name: "404",
    // path: "/:pathMatch(.*)*",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
