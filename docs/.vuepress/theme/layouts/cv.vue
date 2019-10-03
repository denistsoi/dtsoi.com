<template>
  <div>
    <coreheader />
    <div class="w-full md:w-3/5 text-gray m-auto pt-10 p-8 pb-12">
      <Content />
    </div>
  </div>
</template>

<script>
import coreheader from "../core/header";
export default {
  components: {
    coreheader
  }
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>