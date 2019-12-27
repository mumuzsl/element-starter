import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**
 * 在这里写入路由器内容
 * 
 * example:
 * {
 *    path: '...',
 *    component: ...,
 * }
 *
 */
const constantRoutes = [

];

const createRouter = () =>
  new Router({
    routes: constantRoutes
  });

const router = createRouter();

export default router;
