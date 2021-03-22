<template>
  <div class='table-wrapper'>
    <table>
      <thead>
      <th>Title</th>
      <th>SLug</th>
      <th>Ceated at</th>
      <th>Link</th>
      </thead>
      <tbody>
      <tr v-for='post in postList' :key='post.id'>
        <td>
          <NuxtLink :to="{ name: 'admin-post-id', params: { id: post.id }}">{{ post.title }}</NuxtLink>
        </td>
        <td>{{ post.slug }}</td>
        <td>{{ dateFormat(post.createdAt) }}</td>
        <td>
          <span class='material-icons' @click="$emit('editPost',post.id)">edit</span>
          <span class='material-icons' @click="$emit('deletePost',post.id)">archive</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    postList: {
      type: Array,
      default: {}
    }
  },
  methods: {
    dateFormat(datetime) {
      return moment(datetime).fromNow()
    },
  }
}
</script>

<style lang='scss' scoped>
.table-wrapper {
  width: 100%;
  margin: 5rem auto;

  table {
    width: 100%;
  }
}
</style>
