<template>
  <div>
    <div class="cardPreview">
      Vue LOGO
    </div>
    <div class="cardContent">
      <div class="cardTitle">
        <article>{{ cardText }}</article>
      </div>
    </div>
    <div class="cardTags">
      <div>Skills:</div>
      <div class="cardTag" v-for="tag in cardTags" :key="tag.id">
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    cardText: '',
    cardTags: [],
  },
  data() {
    return {
      text: ''
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
