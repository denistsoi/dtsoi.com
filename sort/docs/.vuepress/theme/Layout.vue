<template>
  <div>
    <coreheader />
    <div>
      <component :is="layout" />
    </div>
  </div>
</template>

<script>
import coreheader from "./core/header";
import detail from "./layouts/detail";
import home from "./layouts/home";

export default {
  components: {
    coreheader,
    detail,
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