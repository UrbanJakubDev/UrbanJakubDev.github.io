<template>
  <div class="admin__navigation__container">
    <h4>Admin Menu</h4>
    <div class="nav__links">
      <NuxtLink to="/admin/dashboard">Dashboard</NuxtLink>
      <NuxtLink to="/admin/posts">Posts</NuxtLink>
      <a @click="logout">Logout</a>
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
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
}
</script>

<style lang="scss" scoped>
.admin__navigation__container {
  display: flex;
  flex-direction: column;

}

h4{
  margin: 0;
}

.nav__links {
  display: flex;
  flex-direction: column;
}

a{
  text-decoration: none;

  &::before{
    content: '> ';
    font-size: 1.3em;
    font-weight: bold;
    color: var(--color-text-secondary);
  }
}


</style>
