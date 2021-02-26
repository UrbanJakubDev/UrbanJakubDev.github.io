<template>
  <div>Post edit {{ postID }}</div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      title: 'Posts Edit',
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
    this.postID = paramId
    console.log(paramId)
  },
}
</script>

<style lang="scss" scoped>
</style>
