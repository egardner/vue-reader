<style lang="scss">
</style>

<template lang="jade">
#search
  .hero
    .hero-inner
      .hero-copy
        h1 Welcome to the Infinite Library
        input(v-model="query" placeholder="The Count of Monte Cristo...")
        button(@click="searchRepos") Search {{repoCount}} books!
  div(v-if="hasResults")
    search-results(:results="results")
  featured-titles
</template>

<script>
import SearchResults from "./SearchResults.vue"
import FeaturedTitles from "./FeaturedTitles.vue"
export default {
  name: "Search",
  components: {
    SearchResults,
    FeaturedTitles
  },
  data() {
    return {
      repoCount: '',
      query: '',
      results: [],
      userID: 'GITenberg'
    }
  },
  computed: {
    hasResults() {
      if (this.results.length < 1) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    getRepoCount() {
      let url = 'https://api.github.com/users/' + this.userID
      let xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = () => {
        this.$set('repoCount', JSON.parse(xhr.responseText).public_repos)
        console.log(JSON.parse(xhr.responseText))
      }
      xhr.send()
    },
    searchRepos() {
      let url = `https://api.github.com/search/repositories?q=${this.query}+user:${this.userID}`
      let xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = () => {
        this.$set('results', JSON.parse(xhr.responseText).items)
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
