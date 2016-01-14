<style lang="scss">
</style>

<template lang="jade">
.featured
  h1 Featured Titles
  .featured-list
    li.featured-item(v-for="item in featuredItems")
      book-cover(:book="item")
</template>

<script>
import BookCover from "./BookCover.vue"
export default {
  data() {
    return {
      featuredItems: [
        { title: "Frankenstein", author: "Mary Shelley" },
        { title: "Moby Dick", author: "Herman Melville" },
        { title: "Huckleberry Finn", author: "Mark Twain" },
        { title: "Pride and Prejudice", author: "Jane Austen" },
        { title: "Crime and Punishment", author: "Fyodor Dostoyevsky" },
        { title: "The Raven", author: "Edgar Allen Poe" }
      ]
    }
  },
  components: {
    BookCover
  }
}
</script>
