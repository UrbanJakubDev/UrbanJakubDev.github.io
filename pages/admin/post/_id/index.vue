<template>
  <div class='content__container'>
    <NuxtLink to='/admin/dashboard'> Back</NuxtLink>
    <h3>post | {{ postData.title }}</h3>
    <article v-html='postData.content'></article>

    <div class='button-group'>
      <NuxtLink :to="{ name: 'admin-post-create' }" class='btn'>Create</NuxtLink>
      <NuxtLink
        :to="{ name: 'admin-post-id-edit', params: { id: postID } }"
        class='btn'>Edit
      </NuxtLink>
      <a class='btn' @click='deletePost(postData.id)'>Delete</a>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      title: 'Single page',
      postID: null,
      postData: {}
    }
  },
  head() {
    return {
      title: this.postData.title
    }
  },
  mounted() {
    this.postID = $nuxt.$route.params.id
    this.getPost(this.postID)
  },
  methods: {
    async getPost(id) {
      this.postData = await this.$axios.$get(`posts/${id}`)

    },
    async deletePost(id) {
      const response = await this.$axios.$delete(`posts/${id}`)
      console.log(response)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>

article {
  width: 100%;
  margin: 2rem auto 3rem auto;
}

p {
  margin-top: 2rem !important;
}

figure {
  margin: 0;
  width: 100%;
}

img {
  width: 60%;
  margin: 0 auto;
}

.button-group{
  display: flex;
  justify-content: left;
}
.btn {
  margin-right: 1rem;
}

</style>
