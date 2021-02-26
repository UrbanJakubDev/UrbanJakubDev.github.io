<template>
  <div class="admin_layout page_container">
    <header class="page_header">
      <Logo />
      <ThemeMod />
      </header>
      <div class="base_page">
          <AdminNavigation />
          <Nuxt class="page_content" />
      </div>
    <footer><Footer /></footer>
    </div>
</template>

<script>
import style from '../assets/styles/style.scss'
export default {}
</script>

<style lang="scss" scoped>

.logo{
  font-size: 1rem;
}
.page_header {
  //background-color: var(--color-header-bg);
  position: sticky;
  top: 0;
  margin: 0 auto;
  margin-bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.base_page {
  max-width: 1700px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

.admin__navigation{
  width: 30%;
}

.page_content {
  width: 100%;
  background-color: blueviolet;
}

footer {
  position: sticky;
  bottom: 0;
  text-align: center;
  background-color: var(--color-header-bg);
}
</style>
