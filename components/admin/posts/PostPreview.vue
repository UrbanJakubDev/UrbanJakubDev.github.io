<template>
  <div class="post-preview-container">
    <NuxtLink :to="{ name: 'portfolio-slug', params: { slug: post.id }}">
    <div class="post-header">
      <img src="" alt="">
    </div>
    <div class="post-body">
      <h3 to="/">{{ post.title }}</h3>
      <p>{{ post.content}}</p>
      <Tags :tags="post.tags" />

    </div>
  </NuxtLink>
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
  background-color: dimgrey;
}

.tags{
  display: flex;
  flex-direction: row;
}


</style>
