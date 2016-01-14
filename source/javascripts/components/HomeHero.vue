<style lang="scss">
</style>

<template lang="jade">
.hero
  .hero-inner
    .hero-copy
      h1 Welcome to the Infinite Library
      p.
        Discover thousands of titles in Project Gutenberg!
      button Search {{ repoCount }} Books!
</template>

<script>
export default {
  data() {
    return {
      repoCount: ''
    }
  },
  methods: {
    getRepoCount() {
      let userID = 'GITenberg'
      let url    = 'https://api.github.com/users/' + userID
      let xhr    = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = () => {
        this.$set('repoCount', JSON.parse(xhr.responseText).public_repos)
        console.log(JSON.parse(xhr.responseText))
      }
      xhr.send()
    }
  },
  ready() {
    this.getRepoCount()
  }
}
</script>
