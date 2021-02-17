<template>
  <div>
    posts
    <ul v-for="post in postList" :key="post.id">
      <li>{{ post.title }}</li>
    </ul>
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
</style>
