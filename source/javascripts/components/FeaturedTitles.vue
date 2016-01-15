<style lang="scss">
</style>

<template lang="jade">
#featured-titles
  .block-grid
    h1 Featured Titles
    .block-grid-list
      li.block-grid-item(v-for="item in featuredItems")
        a(v-link="{ name: 'book', params: { bookID: item.repo }}")
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
        { title: "Don Quixote", author: "Cervantes, Miguel de", repo: "Don-Quixote_996" },
        { title: "Narrative of the Life of Frederick Douglass", author: "Douglass, Frederick", repo: "Narrative-of-the-Life-of-Frederick-Douglass-an-American-Slave_23" },
        { title: "The Time Machine", author: "Wells, H.G.", repo: "The-Time-Machine_35" }
      ]
    }
  },
  components: {
    BookCover
  }
}
</script>
