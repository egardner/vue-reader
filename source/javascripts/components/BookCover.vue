<style lang="scss">
.book-cover {
  background-color: #ccc;
  border-radius: 4px;
  height: 12em;
  margin-bottom: 2rem;
  padding: 1rem;
}

.book-cover-title {
  font-size: 1.25em;
  margin-bottom: 0;
}

.book-cover-author {
  font-size: 1em;
  font-weight: normal;
}
</style>

<template lang="jade">
.book-cover
  h3.book-cover-title {{ book.title }}
  h4.book-cover-author By {{ book.author }}
</template>

<script>
export default {
  props: ["book"]
}
</script>
