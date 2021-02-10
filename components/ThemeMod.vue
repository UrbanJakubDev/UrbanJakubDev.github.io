<template>
  <span id="nav-theme" class="material-icons medium icon-theme" @click="changeTheme()">
    {{ themeIcon }}
  </span>
</template>

<script>
export default {
  data() {
    return {
      themeIcon: 'light_mode',
      isLightTheme: true,
    }
  },
  methods: {
    changeTheme() {
      this.isLightTheme = !this.isLightTheme
      this.themeIcon = this.isLightTheme ? 'light_mode' : 'dark_mode'
      document.body.classList.toggle('light')
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-theme{
  cursor: pointer;
}
</style>
