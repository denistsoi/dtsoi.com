<template>
  <div class="w-full border-b-2 border-blue-500">
    <div class="md:w-4/5 max-w-2xl p-4 md:px-8 m-auto">
      <div class="home">
        <router-link :to="$withBase('/')">/src</router-link>
      </div>
      <div v-if="showLinks">
        <span v-for="item in $site.themeConfig.nav">
          <router-link
            rel="preload"
            :to="$withBase(item.link)"
            class="block lg:inline-block pr-2 lg:mt-0 no-underline hover:text-orange"
          >- {{ item.text }}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coreheader",
  props: {
    showLinks: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>