<template>
  <div class="single-post-wrapper">
    <NuxtLink to="/admin/dashboard">Back</NuxtLink>
    post index
    <h3>post | {{ postList.title }}</h3>
    <small> {{ postList.slug }}</small>
    <p>{{ postList.content }}</p>

    <div class="button-group">
      <NuxtLink :to="{ name: 'admin-post-id-create'}">Create</NuxtLink>
      <NuxtLink :to="{ name: 'admin-post-id-edit', params: { id: postID }}">Edit</NuxtLink>
      <NuxtLink to="/">Delete</NuxtLink>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout:'admin',
  data() {
    return {
      title: 'Posts Single poage',
      postID: '',
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
    let paramId = $nuxt.$route.params.id
    this.getAllPosts(paramId)
    this.postID = paramId
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
