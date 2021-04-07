<template>
  <div class="post-preview-container box-shadow'">
    <NuxtLink :to="{ name: 'portfolio-slug', params: { slug: post.id }}">
      <div class='post-header'>
        <img alt=''
             class='acrticle-preview-image'
             v-bind:src='post.previewImage'>
      </div>
      <div class='post-body'>
        <h2>{{ post.title }}</h2>
        <article class='article-preview' v-html='preview(post.content)'></article>
        <span class='article-more'>More...</span>
        <Tags :tags='post.tags' />

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
    }
  },
  methods: {
    preview(content) {
      let first_par_start = content.indexOf('<p>')
      let first_par_end = content.indexOf('</p>')
      return content.substring(first_par_start, first_par_end)
    }
  }
}
</script>

<style lang='scss' scoped>
.post-preview-container {

  margin: 3rem auto;
  display: flex;

  .post-header {
    margin-top: 2rem;
    background-color: var(--color-card-preview-bg);

    .acrticle-preview-image {
      height: 200px !important;
      width: auto;
    }
  }

  .post-body{
    margin-top: 1rem;
  }

  a {
    background-color: var(--color-card-bg);
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    box-shadow: 3px 3px 15px var(--color-card-shadow);
  }

}

.article_more {
  width: 100%;
  padding-top: 2.5rem;
}

.tags {
  display: flex;
  flex-direction: row;
}

.article-preview, .article-more{
  display: none;
}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {
  .article-preview,
, .article-more{
    display: block;
  }
}


</style>
