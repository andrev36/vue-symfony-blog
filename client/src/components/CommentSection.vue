<template>
  <main class="section-comment">
    <div v-if="post">
      {{ post.comment }}
    </div>
  </main>
</template>

<script>
export default {
  name: 'comment-section',
  data() {
    return {
      post: {},
    };
  },
  created() {
    this.fetchBlogPostData2();
  },
  methods: {
    async fetchBlogPostData2() {
      try {
        const data2 = await fetch('https://127.0.0.1:8000/api/post/5');
        const body = await data2.json();
        // eslint-disable-next-line no-console
        console.log('body:', body);
        this.post = await body;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('err: ', err);
      }
    },
  },
};
</script>

<style>
.section-comment {
  padding: 0.5rem;
  margin-top: 7rem;
  grid-column: 1/4;

  background: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
