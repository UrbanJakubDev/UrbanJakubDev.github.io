<template>
  <div>
    <form action="#" id="postForm" method="post" @submit="checkForm">
      <div class="input-box">
        <label for="name">Nazev postu</label>
        <input type="text" id="name" v-model="postName" />
      </div>

      <div class="trix">
        <VueTrix inputId="editor1" v-model="editorContent" placeholder="enter your content..."/>
      </div>
      <p>
        <button class="btn" type="submit">Odeslat</button>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import VueTrix from "vue-trix";

export default {
  components:{
    VueTrix
  },
  layout: 'admin',
  data() {
    return {
      editorContent: "<h1>Editor contents</h1>",
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
        content: this.editorContent,
        slug: this.postName + '5',
      }

      axios
        .post(`http://localhost:5000/api/posts`, data)
        .then((response) => {
          console.log(response)
        })
        .catch(console.error())
      e.preventDefault()
    },
  },
}
</script>

<style lang="scss" scoped>
.trix{
  background-color: var(--color-trix-editor);
  color: black;
}

button{
  box-shadow: none;
  background-color: var(--color-trix-editor);
  border: none;
}
</style>
