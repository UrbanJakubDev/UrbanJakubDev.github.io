<template>
  <div class='content__container'>
    <span v-if='isAuthenticated'>Welcome {{ loggedInUser.name }}</span>
    <span>{{ isAuthenticated}}</span>
    <div class='card-list'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <PostsTab :postList='postList' />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  layout: 'admin',
  data() {
    return {
      title: 'Dashboard',
      postList: []
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  mounted() {
    this.getAllPosts()
  },
  methods: {
    getAllPosts() {
      this.$axios.$get('/posts').then(
        (response) => {
          this.postList = response
        })
        .catch(console.error())
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>

<style lang='scss' scoped>
.card-list {
  display: flex;
}
</style>
