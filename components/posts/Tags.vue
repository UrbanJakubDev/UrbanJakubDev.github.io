<template>
  <div class="tag-wrapper">
    <div class="tag-list">
      <span>Skills:</span>
      <span
        v-for="tag in tags"
        :key="tag.id"
        class="badge"
        v-bind:class="[tag.value.toLowerCase()]"
        >{{ tag.value }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badgeClass: '',
    }
  },
  props: {
    tags: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style lang="scss" scoped>
.tag-wrapper {
  padding: 2rem 0 2rem 0;
}

.tag-list {
  display: inline;
}

.badge {
  background-color: #fff;
  color: black;
  border-radius: 0.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5em;
}

.html {
  background-color: #e85d25;
}

.css {
  background-color: #25a1e1;
}

.js {
  background-color: #e5a329;
}
</style>
