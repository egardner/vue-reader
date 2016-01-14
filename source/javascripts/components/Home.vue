<style lang="scss">
</style>

<template lang="jade">
#home
  home-hero
  home-featured
</div>
</template>

<script>
import HomeHero from "./HomeHero.vue"
import HomeFeatured from "./HomeFeatured.vue"
export default {
  name: "Home",
  components: {
    HomeHero,
    HomeFeatured
  }
}
</script>
