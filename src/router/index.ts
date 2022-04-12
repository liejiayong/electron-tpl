import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const whitelsRouter: string[] = ['/login', '/register', '/404', '/401'];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(function (to, from, next) {
  const token = '666';
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      // const permission = 'admin';
      // next({ ...to, replace: true });
      next();
    }
  } else {
    if (whitelsRouter.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
router.afterEach(function (to, from, failure) {
  console.log('router.beforeEach', to, from, failure);
});

export default router;
