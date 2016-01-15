<style lang="scss">
.book-cover {
  background-color: #ccc;
  border-radius: 4px;
  height: 15em;
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
  h3.book-cover-title {{{ book.title }}}
  h4.book-cover-author By {{ book.author }}
</template>

<script>
export default {
  props: ["book"],
  data() {
    return {
      files: []
    }
  },
  computed: {
    title() {
      return this.book.title
    },
    author() {
      return this.book.author
    },
    repo() {
      return this.book.repo
    }
  },
  filters: {
    firstNameFirst(text) {
      let firstName = text.split(", ")[1]
      let lastName  = text.split(", ")[0]
      return `${firstName} ${lastName}`
    }
  }
}
</script>
