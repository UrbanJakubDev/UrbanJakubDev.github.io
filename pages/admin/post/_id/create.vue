<template>
  <div>
    <form action="#" id="postForm" method="post" @submit="checkForm">
      <div class="input-box">
        <label for="name">Nazev postu</label>
        <input type="text" id="name" v-model="postName" />
      </div>

      <div class="trix">
        <VueTrix
          inputId="editor1"
          v-model="editorContent"
          placeholder="enter your content..."
          @trix-attachment-add="handleAttachmentChanges"
        />
      </div>
      <p>
        <button class="btn" type="submit">Odeslat</button>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import VueTrix from 'vue-trix'

export default {
  components: {
    VueTrix,
  },
  layout: 'admin',
  data() {
    return {
      editorContent: '<h1>Editor contents</h1>',
      title: 'Posts Crete',
      postName: null,
      postText: null,
      remoteHost: 'http://localhost:5000/api/img',
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
        content: this.remove(this.editorContent),
        slug: this.postName + '5',
      }

      const response = this.$axios.$post(`http://localhost:5000/api/posts`,data)
      e.preventDefault()
    },

    handleAttachmentChanges(event) {
      // 1. get file object
      let file = event.attachment.file
      const remoteHost = 'http://localhost:5000/api/attachments/upload'

      // 2. upload file to remote server with FormData
      let formData = new FormData()
      formData.append('file', file)
      this.$axios.$post(`/attachments/upload`, formData).then((data) => {


        // // 3. if upload success, set back the attachment's URL attribute
        // // @param object data from remote server response data after upload.
        console.log(data);
        let attributes = {
          url: data.result.secure_url,
          href: data.result.secure_url,
        }
        event.attachment.setAttributes(attributes)
      })
    },

    remove(data){
      data = data.toString()
      console.log(data);
      data = data.replace(/width=".*?"/,'width="100%"')
      data = data.replace(/height=".*?"/,'')


      return data
    }
  },
}
</script>

<style lang="scss" scoped>
.trix {
  background-color: var(--color-trix-editor);
  color: black;
}

button {
  box-shadow: none;
  background-color: var(--color-trix-editor);
  border: none;
}
</style>
