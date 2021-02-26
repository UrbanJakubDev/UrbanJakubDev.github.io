<template>
  <div class="default_layout page_container">
      <header class="page_header">
        <Navigation />
      </header>
      <div class="page_body">
        <Nuxt />
      </div>
      <footer><Footer /></footer>
    </div>
</template>

<script>
import style from '../assets/styles/style.scss'
export default {}
</script>

<style lang="scss" scoped>


.page_header {
  //background-color: var(--color-header-bg);
  position: sticky;
  top: 0;
  margin: 0 auto;
  margin-bottom: 0;
  padding-top: 3rem;
  z-index: 100;
}

.page_body {
  margin: 0 auto;
}

footer {
  position: sticky;
  bottom: 0;
  text-align: center;
  background-color: var(--color-header-bg);
}
</style>
