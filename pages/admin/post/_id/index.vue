<template>
  <div class="content__container">
    <NuxtLink to="/admin/dashboard"> Back</NuxtLink>
    <h3>post | {{ postData.title }}</h3>
    <article v-html="postData.content"></article>

    <div class="button-group">
      <NuxtLink :to="{ name: 'admin-post-create' }" class="btn">Create</NuxtLink>
      <NuxtLink
        :to="{ name: 'admin-post-id-edit', params: { id: postID } }"
        class="btn">Edit</NuxtLink>
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

  article{
    width: 100%;
    margin: 2rem auto 3rem auto;
  }

  p{
    margin-top: 2rem !important;
  }

  figure{
    margin: 0;
    width: 100%;
  }

  img{
    width: 60%;
    margin: 0 auto;
  }

</style>
