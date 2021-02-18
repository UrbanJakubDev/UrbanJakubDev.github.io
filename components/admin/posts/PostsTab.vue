<template>
  <div>
    <table>
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>SLug</th>
        <th>Ceated at</th>
      </thead>
      <tbody>
        <tr v-for="post in postList" :key="post.id" >
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.slug }}</td>
          <td>{{ post.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      postList: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
