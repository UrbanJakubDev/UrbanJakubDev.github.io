<template>
  <div>
    <span
      >Created <NuxtLink to="/">This</NuxtLink> with 🖤 and
      <a class="vue-link" href="https://v3.vuejs.org/"><i class="fab fa-vuejs"></i></a> &
      <a class="vue-link" href="https://v3.vuejs.org/">Nuxt.js</a></span
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.fa-vuejs{
  color: #41B883;
}

footer {
  position: sticky;
  bottom: 0;
  text-align: center;
  background-color: var(--color-header-bg);
}
</style>
