<template>
  <div class='content__container'>
    <div class='card-list'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <PostsTab :postList='postList'
              v-on:deletePost='deletePost'
              v-on:editPost='editPost'
    />

    <NuxtLink :to="{ name: 'admin-post-create' }" class='btn'>Create TipTap</NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  middleware: 'auth',
  layout: 'admin',
  data() {
    return {
      title: 'Postts',
      postList: []
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  mounted() {
    this.getAllPosts()
  },
  methods: {
    getAllPosts() {
      this.$axios.$get('/posts')
        .then((data) => {
          this.postList = data
        })
        .catch(console.error())
    },
    editPost(id) {
      this.$router.push({ name: 'admin-post-create', params: { id: id }} )
    },
    deletePost(id) {
      this.$axios.$delete(`posts/${id}`).then(
        (response) => {
          this.getAllPosts()
        }
      ).catch((e) => {
        $nuxt.error({ statusCode: '403' })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.card-list {
  display: flex;
}

figure {
  width: 90%;
}
</style>
