import CreatePostForm from '@/pages/CreatePostForm';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';
import RegisterPage from '@/pages/RegisterPage';
import SingleBlogPostPage from '@/pages/SingleBlogPostPage';
import Vue from 'vue';
import VueRouter from 'vue-router';

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
      path: '/blog-post/:id',
      component: SingleBlogPostPage,
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/register',
      component: RegisterPage,
    },
    {
      path: '/create-post',
      component: CreatePostForm,
    },
    { path: '*', component: NotFoundPage },
  ],
});
