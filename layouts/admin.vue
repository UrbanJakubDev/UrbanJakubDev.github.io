<template>
  <div class='admin_layout page_container'>
    <header class='page_header'>
      <Logo />
      <ThemeMod />
    </header>
    <div class='page_body'>
      <AdminNavigation />
      <Nuxt class='page_content' />
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>

.logo {
  font-size: 1rem;
}

.page_container{
  width: 90%
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

.page_body {
  margin: 2rem auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

.admin__navigation {
  width: 30%;
}

.page_content {
  margin: 2rem auto;
  width: 100%;
}

/* Larger than tablet */
@media (min-width: 750px) {
.page_body{
  display: flex;
  flex-direction: row;
}

  .admin__navigation__container{
    width: 25%;
  }

  .content__container{
    padding: 0 1rem 0 2rem;
  }
}
</style>
