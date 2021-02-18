<template>
  <div class="content__container">
    <div class="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <PostsTab :postList="postList" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'admin',
  data() {
    return {
      title: 'Dashboard',
      postList: [],
    }
  },
  head() {
    return {
      title: this.title,
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
    },
  },
}
</script>

<style lang="scss" scoped>
.card-list{
  display: flex;
}
</style>
