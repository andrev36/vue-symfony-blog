import MainPage from '@/pages/MainPage';
import SingleBlogPost from '@/pages/SingleBlogPost';
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
      name: 'SingleBlogPost',
      component: SingleBlogPost,
    },
  ],
});
