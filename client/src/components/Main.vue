<template>
  <div class="main">
    <div class="grid">
      <header class="main-navbar">Header</header>
      <aside class="left-sidebar">Table of contents</aside>
      <article class="article">
        <h1>{{ msg }}</h1>
      </article>
      <aside class="right-sidebar">Post Author</aside>
      <footer class="footer">Footer</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      msg: 'Hello World! (from Vue)',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.grid {
  display: grid;
  grid-template-columns: 9.375rem auto 9.375rem;
  grid-gap: 1rem;
}

.footer,
.main-navbar {
  grid-column: 1/4;
}

@media all and (max-width: 700px) {
  aside,
  article {
    grid-column: 1 / 4;
  }
}

.main-navbar,
aside,
article,
.footer {
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-navbar {
 height: 25vh;
}

.footer {
 height: 45vh;
}
aside,
article {
 height: 60vh;
}
</style>
