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
  h4.book-cover-author By {{ book.author | firstNameFirst }}
</template>

<script>
import _ from 'lodash'
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
  },
  methods: {
    getRepoContents() {
      let owner = "GITenberg"
      let url = `https://api.github.com/repos/${owner}/${this.repo}/git/trees/master`
      let xhr = new XMLHttpRequest()
      xhr.open('GET', url)
      xhr.onload = () => {
        if (xhr.status == 200) {
          this.$set('files', JSON.parse(xhr.responseText).tree)
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
