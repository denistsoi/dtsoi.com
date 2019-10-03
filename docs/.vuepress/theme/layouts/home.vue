<template>
  <div class="w-full md:w-4/5 text-gray m-auto p-4 md:p-8 max-w-2xl">
    <Content class="text-sm md:text-base" />

    <div class="mt-4 mb-4">
      <Content slot-key="links" />
    </div>

    <Content slot-key="image" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>