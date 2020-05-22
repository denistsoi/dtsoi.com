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
import Detail from "./layouts/Detail";
import Home from "./layouts/Home";
import Template from "./layouts/Template";

export default {
  components: {
    coreheader,
    Detail,
    Home,
    Template
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "Home";
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