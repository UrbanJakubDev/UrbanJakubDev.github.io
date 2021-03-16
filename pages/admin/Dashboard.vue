<template>
  <div class="content__container">
    <span v-if="isAuthenticated">Welcome {{ loggedInUser.username }}</span>
    <div class="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <PostsTab :postList="postList" />
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
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>

<style lang="scss" scoped>
.card-list{
  display: flex;
}
</style>
