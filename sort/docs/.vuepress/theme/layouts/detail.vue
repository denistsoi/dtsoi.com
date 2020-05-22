<template>
  <div>
    <coreheader :showLinks="true" />
    <div class="w-full md:w-4/5 text-gray m-auto p-4 md:p-8 max-w-2xl">
      <Content />
    </div>
    <corefooter />
  </div>
</template>

<script>
import coreheader from "../core/header";
import corefooter from "../core/footer";
export default {
  components: {
    coreheader,
    corefooter
  }
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>