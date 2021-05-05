<template>
  <div class="post-preview-container box-shadow'">
    <NuxtLink
      class="post-preview-wrapper"
      :to="{ name: 'portfolio-slug', params: { slug: post.id } }"
    >
      <div class="post-header">
        <img
          alt=""
          class="acrticle-preview-image"
          v-bind:src="post.previewImage"
          v-if="post.previewImage"
        />
      </div>
      <div class="post-body">
        <h2>{{ post.title }}</h2>
        <article
          class="article-preview"
          v-html="preview(post.content)"
        ></article>
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
      default: {},
    },
  },
  methods: {
    preview(content) {
      let first_par_start = content.indexOf('<p>')
      let first_par_end = content.indexOf('</p>')
      return content.substring(first_par_start, first_par_end)
    },
  },
}
</script>

<style lang='scss' scoped>
h2 {
  font-size: 2.6rem;
}
.post-preview-container {
  width: 85%;
  margin: 3rem auto;
  display: flex;
  font-size: 1.4rem;
}
.post-preview-wrapper {
  display: flex;
  flex-direction: column;
}
.post-header {
  max-height: 25rem;
  margin-top: 2rem;
  background-color: var(--color-card-preview-bg);
  text-align: center;

  img {
    height: 100%;
    width: auto;
  }
}
.post-body {
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

.tags {
  display: flex;
  flex-direction: row;
}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {
  .article-preview,
  ,
  .article-more {
    display: block;
  }
}
</style>
