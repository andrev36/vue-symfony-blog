<template>
  <div class="main-page">
    <div class="main-page-grid">
      <navbar-blog />
      <main class="main-section">
        <h1>{{ msg }}</h1>
      </main>
      <aside class="left-sidebar">Table of contents</aside>
      <article class="article">
        <section>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nihil
            similique iste. Corrupti debitis possimus minus, vel atque, et,
            cumque voluptatibus officia nostrum in optio ea magni amet
            voluptatem quisquam. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsa nihil similique iste. Corrupti debitis
            possimus minus, vel atque, et, cumque voluptatibus officia nostrum
            in optio ea magni amet voluptatem quisquam. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ipsa nihil similique iste.
            Corrupti debitis possimus minus, vel atque, et, cumque voluptatibus
            officia nostrum in optio ea magni amet voluptatem quisquam. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nihil
            similique iste. Corrupti debitis possimus minus, vel atque, et,
            cumque voluptatibus officia nostrum in optio ea magni amet
            voluptatem quisquam. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsa nihil similique iste. Corrupti debitis
            possimus minus, vel atque, et, cumque voluptatibus officia nostrum
            in optio ea magni amet voluptatem quisquam. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ipsa nihil similique iste.
            Corrupti debitis possimus minus, vel atque, et, cumque voluptatibus
            officia nostrum in optio ea magni amet voluptatem quisquam. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nihil
            similique iste. Corrupti debitis possimus minus, vel atque, et,
            cumque voluptatibus officia nostrum in optio ea magni amet
            voluptatem quisquam. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsa nihil similique iste. Corrupti debitis
            possimus minus, vel atque, et, cumque voluptatibus officia nostrum
            in optio ea magni amet voluptatem quisquam. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ipsa nihil similique iste.
            Corrupti debitis possimus minus, vel atque, et, cumque voluptatibus
            officia nostrum in optio ea magni amet voluptatem quisquam.
          </span>
        </section>
      </article>
      <aside class="right-sidebar">Post Author</aside>
      <footer-blog />
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
      msg: 'Blog title',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-page-grid {
  display: grid;
  grid-template-columns: 9.375rem auto 9.375rem;
}

.main-section {
  grid-column: 1/4;
}

@media all and (max-width: 700px) {
  aside,
  article {
    grid-column: 1 / 4;
  }
}

aside,
article,
.main-section,
.footer {
  background: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-section {
  height: 60vh;
  padding: 0.5rem;
}

aside,
article {
  height: 60vh;
  padding: 5rem;
}
</style>
