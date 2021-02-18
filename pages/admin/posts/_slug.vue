<template>
  <div>
    {{ postList }}

    <NuxtLink to="/admin/dashboard">Back</NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: 'Dashboard',
      postList: {},
      urlParam: ''
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
