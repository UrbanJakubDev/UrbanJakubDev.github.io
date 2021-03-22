<template>
  <div class="logo"><NuxtLink to="/">Jakub Urban</NuxtLink></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.logo {
  animation: 1s appear;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.7rem;
  a {
    text-decoration: none;
  }
}

.logo::before,
.logo::after {
  color: var(--color-text-secondary);
}

.logo::before {
  content: '< ';
}

.logo::after {
  content: ' />';
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

/* Larger than tablet */
@media (min-width: 750px) {
  .logo {
    font-size: 2.2rem;
  }
}
</style>
