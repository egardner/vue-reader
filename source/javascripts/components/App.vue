<template lang="jade">
#app
  app-header(msg = "Infinite Library")
  app-content
  app-footer
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppContent from "./AppContent.vue";
import AppFooter from "./AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>
