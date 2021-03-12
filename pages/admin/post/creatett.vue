<template>
  <div class="page__content">
    <div>
      <div class="input-box title">
        <label for="name">Nazev postu</label>
        <input type="text" id="name" v-model="postName" />
      </div>

      <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
          <div class="menubar">
            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.bold() }"
              @click="commands.bold"
            >
              B
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
            >
              I
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.strike() }"
              @click="commands.strike"
            >
              S
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.underline() }"
              @click="commands.underline"
            >
              U
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.code() }"
              @click="commands.code"
            >
              code
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.paragraph() }"
              @click="commands.paragraph"
            >
              p
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 1 }) }"
              @click="commands.heading({ level: 1 })"
            >
              H1
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
            >
              H2
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 3 }) }"
              @click="commands.heading({ level: 3 })"
            >
              H3
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.bullet_list() }"
              @click="commands.bullet_list"
            >
              ul
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.ordered_list() }"
              @click="commands.ordered_list"
            >
              ol
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.blockquote() }"
              @click="commands.blockquote"
            >
              "
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.code_block() }"
              @click="commands.code_block"
            >
              code block
            </button>

            <button
              class="menubar__button"
              @click="showImagePrompt(commands.image)"
            >
              img
            </button>

            <button class="menubar__button" @click="commands.horizontal_rule">
              hr
            </button>

            <button class="menubar__button" @click="commands.undo"><-</button>

            <button class="menubar__button" @click="commands.redo">-></button>
          </div>
        </editor-menu-bar>

        <editor-content class="editor__content" :editor="editor" />
      </div>
      <p>
        <a @click.prevent="SendPost()">Odeslat</a>
      </p>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image
} from 'tiptap-extensions'
export default {
  layout: 'admin',
  components: {
    EditorContent,
    EditorMenuBar,
  },
  head() {
    return {
      title: this.title,
    }
  },
  data() {
    return {
      title: 'Posts Create',
      html: '',
      content: '',
      postName: null,
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
          new Image(),
        ]
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    SendPost() {
      console.log(this.content)
      let data = {
        title: this.postName,
        content: this.imageFilter(this.content),
        slug: this.postName + '5',
      }
      console.log(data.content)
      const response = this.$axios.$post(`http://localhost:5000/api/posts`,data)
    },

    showImagePrompt(command) {
      let src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src})
      }
    },

    imageFilter(data){
      return data.replace('<img ', '<img width="100%" ')
    }
  },
}
</script>
<style lang="scss" scoped>
.editor__content {
  background-color: var(--color-trix-editor);
  color: black;
}

button {
  box-shadow: none;
  background-color: var(--color-trix-editor);
  border: none;
}
</style>
