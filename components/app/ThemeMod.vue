<template>
  <div
    id="nav-theme"
    class="material-icons small icon-theme"
    @click="changeTheme()"
  >
    {{ themeIcon }}
  </div>
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
    /** This is a description of the foo function. */
    changeTheme() {
      this.isLightTheme = !this.isLightTheme
      this.themeIcon = this.isLightTheme ? 'light_mode' : 'dark_mode'
      document.body.classList.toggle('light')
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-theme {
  cursor: pointer;
  width: 56px;
  height: 56px;
  text-align: center;
}
</style>
