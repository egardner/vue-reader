<style lang="scss" scoped>
$nav-bg-color: #333;
$nav-height: 2.5rem;
$nav-text-color: #fff;

nav {
  background-color: $nav-bg-color;
  color: $nav-text-color;
  height: $nav-height;
  padding: 0 1rem;
}

h1 {
  line-height: $nav-height;
}

.app-title {
  color: $nav-text-color;
}
</style>

<template lang="jade">
nav
  a.app-title(v-link="'/'")
    h1 {{ msg }}
</template>

<script>
export default {
  props: ['msg']
}
</script>
