import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth',
    name: 'AuthLayout',
    component: ()=> import('@/views/layouts/Authentication'),
    children:[
      {
        path: "register",
        name: "register",
        component: () => import("@/components/auth/Register"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/components/auth/Login"),
      }
    ]
  },
  {
    path: "/",
    component: () => import("@/views/layouts/Application"),
    children: [
      {
        path: "crops",
        name: "crops",
        component: () => import("@/components/app/crops/Index"),
      },
      {
        path: "prices",
        name: "prices",
        component: () => import("@/components/app/prices/Index"),
      },
      {
        path: "produce",
        name: "produce",
        component: () => import("@/components/app/produce/Index"),
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
