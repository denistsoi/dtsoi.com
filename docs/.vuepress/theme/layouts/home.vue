<template>
  <div class="w-full md:w-4/5 text-gray m-auto pt-10 p-8 pb-12 max-w-2xl">
    <Content />

    <div>
      <Content slot-key="links" />
    </div>

    <Content class="rounded" slot-key="image" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>