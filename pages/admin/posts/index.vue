<template>
  <div class='content__container'>
    <div class='card-list'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <PostsTab :postList='postList' />

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
      axios
        .get('http://localhost:5000/api/posts')
        .then((response) => {
          console.log(response)
          this.postList = response.data
        })
        .catch(console.error())
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
