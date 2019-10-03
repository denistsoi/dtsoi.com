<template>
  <div class="w-full md:w-3/5 text-gray m-auto pt-10 p-8 pb-12">
    <Content />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
@import '../styles/theme.styl';

p {
  margin: 1rem;
}

@css {
  pre {
    @apply p-4 text-gray-100 rounded bg-blue-900 mb-2
  }

  h2 {
    @apply pb-2 m-0 mt-8 font-light font-bold text-xl
  }
  h3 {
    @apply pb-2 m-0 mt-4 font-light text-lg
  }
  .time {
    @apply text-sm bg-green-900 rounded text-gray-100 py-1 px-2 ml-1
  }
}
</style>