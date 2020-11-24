<template>
  <div class="create-post-page">
    <navbar-blog class="navbar">Navbar</navbar-blog>
    <main class="container-create-post-form">
      <form v-on:submit.prevent="handleCreatePost">
        <h1>Create post</h1>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            v-model="title"
            type="title"
            placeholder="Title"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <input
            v-model="content"
            type="text"
            placeholder="Content"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="slug">Slug</label>
          <input
            v-model="slug"
            type="text"
            placeholder="Slug"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="comment">Comment</label>
          <input
            v-model="comment"
            type="text"
            placeholder="Comment"
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary" >
          Submit
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar/TheNavbar';
// import getStaticPath from '../utils/getStaticPath.utils';

// const { staticPath, protocol } = getStaticPath();

export default {
  name: 'create-post',
  components: {
    'navbar-blog': TheNavbar,
  },
  data() {
    return {
      title: '',
      content: '',
      slug: '',
      comment: '',
    };
  },
  methods: {
    async handleCreatePost() {
      try {
        await fetch('https://127.0.0.1:8000/api/post/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            title: this.title,
            content: this.content,
            slug: this.slug,
            comment: this.comment,
          },
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('err: ', err);
      }
    },
  },
};
</script>

<style scoped>
.container-create-post-form {
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  width: 50vw;
}
</style>
