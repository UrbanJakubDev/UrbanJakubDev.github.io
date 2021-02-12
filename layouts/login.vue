<template>
  <div class="login_layout page_container">
    <div class="base_page">
      <ThemeMod class="icon-theme" />
      <Nuxt />
      <NuxtLink to="/">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script>
import style from '../assets/styles/style.scss'
export default {}
</script>

<style lang="scss" scoped>
.page_container {
  margin: 0 auto;
  max-width: 1700px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.base_page {
  display: flex;
  flex-direction: column;

  align-items: center;
}

a {
  margin-top: 2rem;
}

.icon-theme{
  margin: 0 auto;
  text-align: right;
  width: 25rem;
}
</style>
