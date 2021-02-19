<template>
  <div class="single-post-wrapper">
    <h3>post | {{ postList.title }}</h3>
    <small> {{ postList.slug }}</small>
    <p>{{ postList.content }}</p>

    <NuxtLink to="/admin/dashboard">Back</NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout:'admin',
  data() {
    return {
      title: 'Dashboard',
      postList: {},
      urlParam: '',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  mounted() {
    this.getAllPosts($nuxt.$route.params.slug)
  },
  methods: {
    getAllPosts(params) {
      axios
        .get(`http://localhost:5000/api/posts/${params}`)
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
