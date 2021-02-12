<template>
  <div class="default_layout page_container">
    <div class="base_page">
      <header class="page_header">
        <Navigation />
      </header>
      <div class="page_body">
        <Nuxt />
      </div>
      <footer><Footer /></footer>
    </div>

  </div>
</template>

<script>
import style from '../assets/styles/style.scss'
export default {}
</script>

<style lang="scss" scoped>
.base_page {
  margin: 0 auto;
  max-width: 1700px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page_header {
  //background-color: var(--color-header-bg);
  position: sticky;
  top: 0;
  margin: 0 auto;
  margin-bottom: 0;
  padding-top: 3rem;
  width: 90%;
  z-index: 100;
}

.page_body {
  margin: 0 auto;
  width: 90%;
}

footer {
  position: sticky;
  bottom: 0;
  text-align: center;
  background-color: var(--color-header-bg);
}
</style>
