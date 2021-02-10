<template>
  <div class="navigation__container">
    <Logo />
    <div class="navbar" v-bind:class="{ show: isActive }">
      <div class="nav__links">
        <NuxtLink to="/about">About Me</NuxtLink>
        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        <NuxtLink to="/cv">CV</NuxtLink>
      </div>
      <ThemeMod />
    </div>
    <span class="material-icons medium dropdown-icon" @click="showPopupMenu()">
      {{ menuIcon }}
    </span>
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
  methods: {
    showPopupMenu() {
      this.isActive = !this.isActive
      this.menuIcon = !this.isActive ? 'menu' : 'menu_open'
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
