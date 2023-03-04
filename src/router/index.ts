import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      // cuma template
      // elemen home, rekening, catatan, dan hutang tambah lagi di bawah
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home/HomeView.vue"),
    },
    {
      path: "/rekening",
      name: "rekening",
      component: () => import("../views/rekening/RekeningView.vue"),
    },
    {
      path: "/rekening/tambah-rekening",
      name: "tambah-rekening",
      component: () => import("../views/rekening/RekeningView.vue"),
    },
    {
      path: "/rekening/:id/detail-rekening",
      name: "detail-rekening",
      component: () => import("../views/rekening/RekeningView.vue"),
    },
    {
      path: "/rekening/:id/edit-rekening",
      name: "edit-rekening",
      component: () => import("../views/rekening/RekeningView.vue"),
    },
    {
      path: "/catatan",
      name: "catatan",
      component: () => import("../views/catatan/CatatanView.vue"),
    },
    {
      path: "/hutang",
      name: "hutang",
      component: () => import("../views/hutang/HutangView.vue"),
    },
    {
      path: "/catatan/tambah-catatan",
      name: "tambah-catatan",
      component: () => import("../views/catatan/TambahCatatanView.vue"),
    },
    {
      path: "/hutang/tambah-hutang",
      name: "tambah-hutang",
      component: () => import("../views/hutang/TambahHutangView.vue"),
    },
  ],
});

export default router;
