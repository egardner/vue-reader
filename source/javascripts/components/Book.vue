<template lang="jade">
#book
  .book-info-container.hero
    div.book-info(v-if="richData")
      img.book-info-cover(:src="cover")
      .book-info-text
        h1.book-title {{ metadata.title }}
        a(:href="metadata.creator.author.wikipedia")
          h2.book-author By {{ metadata.creator.author.agent_name }}
        h4.book-author-lifespan {{metadata.creator.author.birthdate }}–{{metadata.creator.author.deathdate }}
        ul.book-subjects
          li(v-for="item in metadata.subjects") {{ item }}
    div.book-info(v-else)
      h1.book-title {{ metadata.title }}
      h2.book-author {{ metadata.author }}
      p.book-subjects {{ metadata.subj }}
  .book-content(v-if="asciidoc")
    book-content-asciidoc
</template>

<script>
import _ from 'lodash'
import yaml from 'js-yaml'
import BookContentAsciidoc from './BookContentAsciiDoc.vue'
export default {
  name: "Book",
  components: {
    BookContentAsciidoc
  },
  data() {
    return {
      apiURL: `https://api.github.com/repos/GITenberg/${this.$route.params.bookID}/git/trees/master`,
      fileURL: `https://raw.githubusercontent.com/GITenberg/${this.$route.params.bookID}/master`,
      owner: "GITenberg",
      richData: false,
      asciidoc: false,
      metadata: {},
      files: [],
      cover: '',
    }
  },
  computed: {
    repo() {
      return this.$route.params.bookID
    },
    id() {
      let url = `https://github.com/${this.owner}/${this.repo}`
      return _.last(url.split('_'))
    }
  },
  methods: {
    filterFiles() {
      let files     = this.files
      let cover     = _.filter(files, { 'path': 'cover.jpg' })
      let asciidoc  = _.filter(files, { 'path': 'book.asciidoc' })
      if (cover.length > 0) {
        this.$set('cover', this.fileURL + "/cover.jpg" )
      }
      if (asciidoc.length > 0) {
        this.$set('asciidoc', true)
      }
    },
    getMetadata() {
      // check for YAML metadata first, this is more comprehensive
      if (_.some(this.files, { 'path': 'metadata.yaml' })) {
        this.xhrRequest(`${this.fileURL}/metadata.yaml`, (response) => {
          let metadata = yaml.safeLoad(response)
          this.$set('metadata', metadata)
          this.$set('richData', true)
        })
      // check for JSON metadata next, better than nothing
      } else if (_.some(this.files, { 'path': 'metadata.json' })) {
        this.xhrRequest(`${this.fileURL}/metadata.json`, (response) => {
          let metadata = JSON.parse(response)
          this.$set('metadata', metadata)
          this.$set('richData', false)
        })
      }
    },
    getRepoContents() {
      this.xhrRequest(this.apiURL, (response) => {
        this.$set('files', JSON.parse(response).tree)
        this.filterFiles()
        this.getMetadata()
      })
    },
    xhrRequest(url, callback) {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = () => {
        if (xhr.status == 200) {
          callback(xhr.responseText)
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
