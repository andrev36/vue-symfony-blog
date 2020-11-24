<template>
  <div class="single-blog-post-page">
    <navbar-blog class="navbar">Navbar</navbar-blog>
    <main class="container-login-form">
      <form>
        <h1>Register</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </main>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar/TheNavbar';

export default {
  name: 'register-page',
  components: {
    'navbar-blog': TheNavbar,
  },
};
</script>

<style scoped>
.container-login-form {
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  width: 50vw;
}
</style>
