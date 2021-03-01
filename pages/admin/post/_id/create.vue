<template>
  <div>
    <form action="#" id="postForm" method="post" @submit="checkForm">
      <label for="name">Nazev postu</label>
      <input type="text" id="name" v-model="postName" />

      <label for="text">Text</label>
      <input type="text" id="text" v-model="postText" />
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>import axios from "axios"

export default {
  layout: 'admin',
  data() {
    return {
      title: 'Posts Crete',
      postName: null,
      postText: null,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    checkForm(e) {

      let data = {
        title: this.postName,
        content: this.postText,
        slug: this.postName + '5'
      }


      axios
      .post(`http://localhost:5000/api/posts`, data)
        .then((response) => {
          console.log(response)
        })
        .catch(console.error())
      e.preventDefault();
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
