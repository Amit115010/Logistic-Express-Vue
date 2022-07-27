import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/servicesView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/blogView.vue"),
    },
    {
      path: "/blog-details",
      name: "blog-details",
      component: () => import("../views/blog-detailsView.vue"),
    },
    {
      path: "/elements",
      name: "elements",
      component: () => import("../views/ElementsView.vue"),
    },
    
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("../views/ContactView.vue"),
    },
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
