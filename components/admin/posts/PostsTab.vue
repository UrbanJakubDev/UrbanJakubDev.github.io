<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <th>Title</th>
        <th>SLug</th>
        <th>Ceated at</th>
        <th>Link</th>
      </thead>
      <tbody>
        <tr v-for="post in postList" :key="post.id" >
          <td>{{ post.title }}</td>
          <td>{{ post.slug }}</td>
          <td>{{ dateFormat(post.createdAt) }}</td>
          <td><NuxtLink to="/admin/posts/first-post">Link</NuxtLink></td>

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
        type: Object,
        default: {}
      },
    },
    methods: {
      dateFormat(datetime) {
        return moment(datetime).fromNow()
      }
    },
  }
</script>

<style lang="scss" scoped>

.table-wrapper{
  margin: 5rem auto;
}

</style>
