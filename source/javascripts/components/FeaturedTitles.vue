<style lang="scss">
</style>

<template lang="jade">
#featured-titles
  .block-grid
    h1 Featured Titles
    .block-grid-list
      li.block-grid-item(v-for="item in featuredItems")
        book-cover(:book="item")
</template>

<script>
import BookCover from "./BookCover.vue"
export default {
  data() {
    return {
      featuredItems: [
        { title: "Frankenstein", author: "Shelley, Mary" },
        { title: "Moby Dick", author: "Melville, Herman" },
        { title: "Huckleberry Finn", author: "Twain, Mark" },
        { title: "Pride and Prejudice", author: "Austen, Jane" },
        { title: "Crime and Punishment", author: "Dostoyevsky, Fyodor" },
        { title: "The Raven", author: "Poe, Edgar Allen" }
      ]
    }
  },
  components: {
    BookCover
  }
}
</script>
