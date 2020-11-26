<template>
  <div>
    <div class="w-full md:w-4/5 text-gray m-auto p-4 md:p-8 max-w-2xl">
      <Content class="text-sm md:text-base" />
      
      <div class="my-4">
        <Content slot-key="links" />
      </div>
      <div class="my-4">
        <span>Social</span>
        <Content slot-key="socials" />
      </div>
      <Content slot-key="image" />
    </div>
    <corefooter />
  </div>
</template>

<script>
import corefooter from '../core/footer'

export default {
  name: "Home",
  components: {
    corefooter
  }
};
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>