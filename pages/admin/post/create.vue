<template>
  <div class='page__content'>
    <div>
      <div class='input-box title'>
        <label for='name'>Nazev postu</label>
        <input id='name' v-model='postName' type='text' />
      </div>
      <div class='input-box tags'>
        <label for='skills'>Skills</label>
        <input id='skills' v-model='postTags' type='text' />
      </div>
      <div class='input-box tags'>
        <label for='previewImage'>Preview Image</label>
        <input id='previewImage' v-model='previewImage' type='text' />
      </div>

      <div class='editor'>
        <editor-menu-bar v-slot='{ commands, isActive }' :editor='editor'>
          <div class='menubar'>
            <div class='row'>
              <button
                :class="{ 'is-active': isActive.bold() }"
                class='menubar__button'
                @click='commands.bold'
              >
                B
              </button>

              <button
                :class="{ 'is-active': isActive.italic() }"
                class='menubar__button'
                @click='commands.italic'
              >
                I
              </button>

              <button
                :class="{ 'is-active': isActive.strike() }"
                class='menubar__button'
                @click='commands.strike'
              >
                S
              </button>

              <button
                :class="{ 'is-active': isActive.underline() }"
                class='menubar__button'
                @click='commands.underline'
              >
                U
              </button>

              <button
                :class="{ 'is-active': isActive.code() }"
                class='menubar__button'
                @click='commands.code'
              >
                code
              </button>

              <button
                :class="{ 'is-active': isActive.paragraph() }"
                class='menubar__button'
                @click='commands.paragraph'
              >
                p
              </button>

              <button
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                class='menubar__button'
                @click='commands.heading({ level: 1 })'
              >
                H1
              </button>

              <button
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                class='menubar__button'
                @click='commands.heading({ level: 2 })'
              >
                H2
              </button>

              <button
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                class='menubar__button'
                @click='commands.heading({ level: 3 })'
              >
                H3
              </button>
            </div>
            <div class='row'>
              <button
                :class="{ 'is-active': isActive.bullet_list() }"
                class='menubar__button'
                @click='commands.bullet_list'
              >
                ul
              </button>

              <button
                :class="{ 'is-active': isActive.ordered_list() }"
                class='menubar__button'
                @click='commands.ordered_list'
              >
                ol
              </button>

              <button
                :class="{ 'is-active': isActive.blockquote() }"
                class='menubar__button'
                @click='commands.blockquote'
              >
                "
              </button>

              <button
                :class="{ 'is-active': isActive.code_block() }"
                class='menubar__button'
                @click='commands.code_block'
              >
                code block
              </button>

              <button
                class='menubar__button'
                @click='showImagePrompt(commands.image)'
              >
                img
              </button>

              <button class='menubar__button' @click='commands.horizontal_rule'>
                hr
              </button>
            </div>
            <div class='row'>
              <button class='menubar__button' @click='commands.undo'><-</button>

              <button class='menubar__button' @click='commands.redo'>-></button>
            </div>
          </div>
        </editor-menu-bar>

        <editor-content :editor='editor' class='editor__content' />
      </div>
      <p>
        <a class='btn' @click.prevent='sendPost'>Odeslat</a>
      </p>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  Bold,
  BulletList,
  Code,
  CodeBlock,
  HardBreak,
  Heading,
  History,
  HorizontalRule,
  Image,
  Italic,
  Link,
  ListItem,
  OrderedList,
  Strike,
  TodoItem,
  TodoList,
  Underline
} from 'tiptap-extensions'

export default {
  middleware: 'auth',
  layout: 'admin',
  components: {
    EditorContent,
    EditorMenuBar
  },
  head() {
    return {
      title: this.title
    }
  },
  data() {
    return {
      title: 'Posts Create',
      html: '',
      content: '',
      postName: null,
      postTags: null,
      previewImage: null,
      postId: null,
      editor: new Editor({
        onUpdate: ({ getHTML }) => {
          this.html = getHTML()
          if (this.html === '<p></p>') this.content = ''
          else this.content = this.html
        },
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Image()
        ]
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },

  mounted() {
    this.getPostData($nuxt.$route.params.id)
  },
  methods: {
    async getPostData(id) {
      if (id) {
        let response = await this.$axios.$get(`posts/${id}`)
        console.log(response)
        this.editor.setContent(response.content)
        this.content = response.content
        this.postName = response.title
        this.postTags = response.tags
        this.previewImage = response.previewImage
        this.postId = response.id
      }
    },

    sendPost() {
      console.log(this.content)
      let data = {
        id: this.postId,
        title: this.postName,
        content: this.imageFilter(this.content),
        slug: this.postName + '5',
        tags: this.postTags,
        previewImage: this.previewImage
      }
      // this.$axios.setToken(this.$store.$auth.$storage._state['_token.local'])

      if (this.postId) {
        this.$axios.$put(`/posts/${this.postId}`, data).then(
          (response) => {
          })
      } else {
        this.$axios.$post(`/posts`, data).then(
          (response) => {
          })

      }

    },

    showImagePrompt(command) {
      let src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },

    imageFilter(data) {
      return data.replace('<img ', '<img width="100%" ')
    }
  }
}
</script>
<style lang='scss' scoped>
.input-box,
label,
input {
  display: block;
  width: 100%;
}

.editor {
  margin: 1rem auto;
}

.editor__content {
  margin-top: 1rem;
  background-color: var(--color-trix-editor);
  color: black;
  min-height: 10rem;
}

p {
  margin: 1rem 0 1rem 0;
}

button {
  box-shadow: none;
  background-color: var(--color-trix-editor);
  border: none;
}

.menubar__button.is-active {
  background-color: red;
}

.menubar__button:hover {
  background-color: aliceblue;
}
</style>
