import MainPage from '@/pages/MainPage';
import SingleBlogPostPage from '@/pages/SingleBlogPostPage';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
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
  ],
});
