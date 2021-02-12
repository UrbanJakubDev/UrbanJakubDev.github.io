<template>
  <div class="admin__navigation__container">
    <h3>Admin Menu</h3>
    <div class="admin__navbar">
      <div class="nav__links">
        <NuxtLink to="/about">About Me</NuxtLink>
        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        <NuxtLink to="/cv">CV</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      menuIcon: 'menu',
    }
  },
}
</script>

<style lang="scss" scoped>

.admin__navigation__container{
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  background-color: crimson;
}

.admin__navbar{

}

.nav__links{
display: flex;
  flex-direction: column;

}

</style>
