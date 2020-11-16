<template>
  <div class="main-page">
    <div class="grid">
      <header class="navbar">Navbar</header>
      <div class="search-bar">
        <h1>Searchbar</h1>
      </div>
      <main class="blog-grid">
        <div class="blog-grid__item">1</div>
        <div class="blog-grid__item">2</div>
        <div class="blog-grid__item">3</div>
        <div class="blog-grid__item">5</div>
        <div class="blog-grid__item">6</div>
      </main>
      <footer class="footer">Footer</footer>
    </div>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter/TheFooter';
import TheNavbar from '../components/TheNavbar/TheNavbar';

export default {
  name: 'MainPage',
  components: {
    TheFooter,
    TheNavbar,
  },
  data() {
    return {
      searchTerm: 'Search term',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 9.375rem auto 9.375rem;
}

.footer,
.search-bar,
.navbar {
  grid-column: 1/4;
}

.navbar,
.search-bar,
.footer,
.search-bar {
  background: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search-bar {
  height: 15vh;
  padding: 0.5rem;
  width: 100%;
  margin-top: 2rem;
}

.blog-grid {
  display: flex;
  height: 60vh;
  padding: 5rem;
  width: 100%;
}

.blog-grid__item {
  min-width: 12rem;
  max-height: 15rem;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
