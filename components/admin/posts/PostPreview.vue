<template>
  <div class="post-preview-container">
    <div class="post-header">
      <img src="" alt="">
    </div>
    <div class="post-body">
      <h4>{{ post.title }}</h4>
      <p>{{ post.content}}</p>
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
.post-preview-container{
  margin: 3rem auto;
  border-bottom: 2px dotted gray;
  display: flex;
}

.tags{
  display: flex;
  flex-direction: row;
}


</style>
