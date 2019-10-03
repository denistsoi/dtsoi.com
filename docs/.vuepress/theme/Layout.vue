<template>
  <div>
    <!-- <header :content="headerContent" /> -->

    <component :is="layout" />
  </div>
</template>

<script>
import cv from "./layouts/cv";
import home from "./layouts/home";

export default {
  components: {
    cv,
    home
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "home";
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './styles/theme.styl';

p {
  margin: 1rem;
}
</style>