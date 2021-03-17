<template>
  <div class="post-preview-container">
    <NuxtLink :to="{ name: 'portfolio-slug', params: { slug: post.id }}">
    <div class="post-header">
      <img src="" alt="">
    </div>
    <div class="post-body">
      <h3 to="/">{{ post.title }}</h3>
      <article v-html="post.content"></article>
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
  display: flex;


  a{
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
  }

}

.tags{
  display: flex;
  flex-direction: row;
}


</style>
