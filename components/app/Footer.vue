<template>
  <div class="footer-wrapper">
    <span>
      <small
        >!!!Tato aplikace je stále <b>"In Construction"</b> a slouží i jako můj
        playground...</small
      >
    </span>
    <span>
      Created <NuxtLink to="/">This</NuxtLink> with 🖤 and
      <a class="vue-link" href="https://v3.vuejs.org/"
        ><i class="fab fa-vuejs"></i
      ></a>
      & <a class="vue-link" href="https://v3.vuejs.org/">Nuxt.js</a>
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.fa-vuejs {
  color: #41b883;
}

footer {
  position: sticky;
  bottom: 0;
  text-align: center;
  background-color: var(--color-header-bg);
}

.footer-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
