<script>
import Vue from 'vue';

const TheNavbar = Vue.component('navbar-blog', {
  template: '<header class="navbar">Navbar</header>',
});

export default TheNavbar;
</script>

<style>
.navbar {
  height: 3rem;
  padding: 0.5rem;
  background: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1/4;
}
</style>
