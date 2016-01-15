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
        { title: "Frankenstein", author: "Shelley, Mary", repo: "Frankenstein_84" },
        { title: "Moby Dick", author: "Melville, Herman", repo: "Moby-Dick--Or-The-Whale_2701" },
        { title: "Huckleberry Finn", author: "Twain, Mark", repo: "Adventures-of-Huckleberry-Finn_76" },
        { title: "Pride and Prejudice", author: "Austen, Jane", repo: "Pride-and-Prejudice_1342" },
        { title: "Crime and Punishment", author: "Dostoyevsky, Fyodor", repo: "Crime-and-Punishment_2554" },
        { title: "The Raven", author: "Poe, Edgar Allen", repo: "The-RavenIllustrated_45484" }
      ]
    }
  },
  components: {
    BookCover
  }
}
</script>
