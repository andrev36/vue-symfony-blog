import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFoundPage from '@/pages/NotFoundPage';
import MainPage from '@/pages/MainPage';
import SingleBlogPostPage from '@/pages/SingleBlogPostPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/blog-post',
      name: 'SingleBlogPostPage',
      component: SingleBlogPostPage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
    },
    { path: '*', component: NotFoundPage },
  ],
});
