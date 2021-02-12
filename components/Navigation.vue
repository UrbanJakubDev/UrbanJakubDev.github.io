<template>
  <div class="navigation__container">
    <div class="nav__bar">
      <Logo />
      <ThemeMod class="nav-bar-theme-icon" />
    </div>
    <div class="nav__links">
      <NuxtLink to="/about">O mě</NuxtLink>
      <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink to="/cv">CV</NuxtLink>
      <ThemeMod class="nav-links-theme-icon" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
/* Small Screen 320px and more */

.nav__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}

.nav-links-theme-icon {
  display: none;
}

a {
  transition: all .15s ease-in-out;
  text-align: center;
  border-bottom: 2px solid var(--color-text-secondary);
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 33%;
  font-size: 1.1em;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    box-shadow: inset 0 -3.25em 0 0 var(--color-text-secondary);
  }
}

/* Larger than tablet */
@media (min-width: 750px) {
  .navigation__container {
    display: flex;
    justify-content: space-between;
  }
  .nav__links {
    width: 300px;
    display: flex;
  }

  a {
    margin-right: 2rem;
    width: 100%;
    border: none;

    &:hover {
      background-color: transparent;
      border-bottom: 2px solid var(--color-text-secondary);
    }
  }

  .nav-bar-theme-icon {
    display: none;
  }

  .nav-links-theme-icon {
    display: block;
  }
}
</style>
