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
      this.$auth.setToken(false)
      this.$axios.setHeader('Authorization', false)
      await this.$auth.logout()
    },
  },
}
</script>

<style lang="scss" scoped>
.admin__navigation__container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  border-right: 1px solid grey;
}

h4 {
  font-size: 1.6rem;
  margin: 0;
}

.nav__links {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;

  &::before {
    content: '< ';
    font-size: 1.3em;
    font-weight: 500;
    color: var(--color-text-secondary);
  }
  &:hover {
    &::after {
      content: ' />';
      font-size: 1.3em;
      font-weight: 500;
      color: var(--color-text-secondary);
    }
  }
}
</style>
