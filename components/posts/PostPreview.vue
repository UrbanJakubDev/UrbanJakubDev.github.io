<template>
  <div class="post-preview-container">
    <NuxtLink :to="{ name: 'portfolio-slug', params: { slug: post.id }}">
      <div class="post-header">
        <img class="acrticle-preview-image" src="https://res.cloudinary.com/dqdmwnui6/image/upload/v1615463713/agkjhakg_nr3ibl.png" alt="">
      </div>
      <div class="post-body">
        <h3>{{ post.title }}</h3>
        <article v-html="preview(post.content)"></article>
        <span class="article_more">More...</span>
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
    }
  },
  methods: {
    preview(content) {
      let first_par_start = content.indexOf("<p>");
      let first_par_end = content.indexOf("</p>");
      return content.substring(first_par_start, first_par_end);
    }
  }
};
</script>

<style lang="scss" scoped>
.post-preview-container {

  margin: 3rem auto;
  display: flex;


  .post-header {
    margin-top: 1rem;
    background-color: var(--color-card-preview-bg);

    .acrticle-preview-image {
      height: 200px !important;
      width: auto;
    }
  }


  a {
    background-color: var(--color-card-bg);
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
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


</style>
