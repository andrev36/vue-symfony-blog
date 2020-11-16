<script>
import Vue from 'vue';

const TheFooter = Vue.component('footer-blog', {
  template: `
<footer class="footer">Footer</footer>
`,
});

export default TheFooter;
</script>

<style>
.footer {
  height: 45vh;
  padding: 0.5rem;
  grid-column: 1/4;
}
</style>
