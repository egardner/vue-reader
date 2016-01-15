<template lang="jade">
#book
  .hero
    .hero-inner
      .hero-copy
        p BookID is {{$route.params.bookID}}
  img(:src="cover")
</template>

<script>
import _ from 'lodash'
export default {
  name: "Book",
  data() {
    return {
      cover: '',
      files: []
    }
  },
  computed: {
    repo() {
      let owner = "GITenberg"
      let url = `https://github.com/${owner}/${this.$route.params.bookID}`
      return url
    }
  },
  methods: {
    filterFiles() {
      let files     = this.files
      let owner     = "GITenberg"
      let fileURL   = `https://raw.githubusercontent.com/${owner}/${this.$route.params.bookID}/master`
      let cover     = _.filter(files, { 'path': 'cover.jpg' })
      let asciidoc  = _.filter(files, { 'path': 'book.asciidoc' })

      if (cover.length > 0) {
        this.$set('cover', fileURL + "/cover.jpg" )
      }

    },
    getRepoContents() {
      let owner = "GITenberg"
      let url = `https://api.github.com/repos/${owner}/${this.$route.params.bookID}/git/trees/master`
      let xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = () => {
        if (xhr.status == 200) {
          this.$set('files', JSON.parse(xhr.responseText).tree)
          this.filterFiles()
        }
      }
      xhr.send()
    }
  },
  ready() {
    this.getRepoContents()
  }
}
</script>
