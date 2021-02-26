<template>
  <div>
    <form action="#">
      <input type="text" id="name">
      <input type="text" id="text">
      <button></button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      title: 'Posts Crete',
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
  mounted() {},
}
</script>

<style lang="scss" scoped>
</style>
