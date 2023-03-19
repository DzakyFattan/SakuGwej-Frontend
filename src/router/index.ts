import { createRouter, createWebHistory } from "vue-router";

const guard = (to: any, from: any, next: any) => {
  const isAuthenticated = localStorage.getItem("token");
  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
};

const checkAuth = (to: any, from: any, next: any) => {
  const isAuthenticated = localStorage.getItem("token");
  if (isAuthenticated) {
    next("/home");
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'login' } },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      beforeEnter: checkAuth,
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
      beforeEnter: checkAuth,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/rekening",
      name: "rekening",
      component: () => import("../views/RekeningView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/rekening/tambah-rekening",
      name: "tambah-rekening",
      component: () => import("../views/rekening/TambahRekeningView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/rekening/:id/detail-rekening",
      name: "detail-rekening",
      component: () => import("../views/rekening/DetailRekeningView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/rekening/:id/edit-rekening",
      name: "edit-rekening",
      component: () => import("../views/rekening/EditRekeningView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/catatan",
      name: "catatan",
      component: () => import("../views/CatatanView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/hutang",
      name: "hutang",
      component: () => import("../views/HutangView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/catatan/tambah-catatan",
      name: "tambah-catatan",
      component: () => import("../views/catatan/TambahCatatanView.vue"),
      beforeEnter: guard,
    },
    {
      path: "/hutang/tambah-hutang",
      name: "tambah-hutang",
      component: () => import("../views/hutang/TambahHutangView.vue"),
      beforeEnter: guard,
    },
  ],
});

export default router;
