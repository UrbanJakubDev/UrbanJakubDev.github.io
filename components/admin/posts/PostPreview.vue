<template>
  <div class="post-preview-container">
    <div class="post-header">
      Obrazek
    </div>
    <div class="post-body">
      <h4>{{ post.title }}</h4>
      <p>{{ post.description}}</p>
      <Tags :tags="post.tags" />
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
