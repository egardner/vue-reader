<style lang="scss">
</style>

<template lang="jade">
#search-results
  .block-grid
    h1 Search Results
    .block-grid-list
      li.block-grid-item(v-for="item in books")
        a(v-link="{ name: 'book', params: { bookID: item.repo }}")
          book-cover(:book="item")
</template>

<script>
import BookCover from "./BookCover.vue"
export default {
  props: ["results"],
  computed: {
    books: function () {
      let searchResults = this.results
      let books = []
      searchResults.forEach(function (result) {
        let description = result.description
        let book        = {}
        book.title      = description.split(" by ")[0]
        book.author     = description.split(" by ")[1].split("\n")[0]
        book.repo       = result.name
        book.owner      = result.owner.login
        books.push(book)
      })
      return books
    }
  },
  components: {
    BookCover
  }
}
</script>
