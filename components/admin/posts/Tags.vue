<template>
  <div class="tags">
    <ul v-for="tag in tags" :key="tag.id">
      <li>{{tag.value}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      tags: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="sass" scoped>

</style>
