<template>
  <header
    class="navbar navbar-expand-lg navbar-light
  bg-light"
  >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav justify-content-center">
        <li class="navbar-brand">
          <router-link to="/">
            Logo
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog-post/5"
            >Single Blog post</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"
          to="/create-post">Create post</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navbar-blog',
};
</script>

<style scoped>
.navbar,
.navbar-collapse {
  height: 3rem;
  padding: 0.5rem;
}
</style>
