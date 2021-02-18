<template>
  <div class="content__container">
    <div v-for="post of postList" :key="post.id">
      <PostPreview :post="post" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'default',
  data() {
    return {
      title: 'Portfolio / Posts',
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
