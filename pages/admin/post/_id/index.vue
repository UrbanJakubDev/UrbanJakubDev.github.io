<template>
  <div class="single-post-wrapper">
    <NuxtLink to="/admin/dashboard"> Back</NuxtLink>
    <h3>post | {{ postData.title }}</h3>
    <article v-html="postData.content"></article>
    <!-- <article v-html="kontent"></article> -->

    <div class="button-group">
      <NuxtLink :to="{ name: 'admin-post-id-create' }" class="btn"
        >Create</NuxtLink
      >
      <NuxtLink
        :to="{ name: 'admin-post-id-edit', params: { id: postID } }"
        class="btn"
        >Edit</NuxtLink
      >
      <a @click="deletePost(postData.id)" class="btn">Delete</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'admin',
  data() {
    return {
      title: 'Single page',
      postID: null,
      postData: {},
      kontent: '<h1>Editor contents</h1><div><img class="image" src="https://res.cloudinary.com/dqdmwnui6/image/upload/v1615400122/u8i04acu3wn0e5xiu7dp.jpg" width="100%" ></div>'
    }
  },
  head() {
    return {
      title: this.postData.title,
    }
  },
  mounted() {
    this.postID = $nuxt.$route.params.id
    this.getPost(this.postID)
  },
  methods: {
    async getPost(id){
      const response = await this.$axios.$get(`posts/${id}`)
      this.postData = response

    },
    async deletePost(id){
      const response = await this.$axios.$delete(`posts/${id}`)
      console.log(response);
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>

figure{
  width: 80%;
}


</style>
