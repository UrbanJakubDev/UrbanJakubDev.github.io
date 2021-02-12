<template>
  <div class="content__container">
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="'portfolio/' + article.slug">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      //.only(['title', 'slug', 'description'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
