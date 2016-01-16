<template lang="jade">
#book-content
  {{{ content }}}
</template>

<script>
export default {
  data() {
    return {
      fileURL: `https://raw.githubusercontent.com/GITenberg/${this.$route.params.bookID}/master`,
      content: ''
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
    getBookText() {
      this.xhrRequest(`${this.fileURL}/${this.id}-h/${this.id}-h.htm`, (response) => {
        this.$set('content', response)
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
    this.getBookText()
  }
}
</script>
