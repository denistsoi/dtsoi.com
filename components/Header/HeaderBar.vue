<template>
  <div class="border-blue-400 border-b-2 h-12 p-3">
    <div v-for="link in links" :key=link>
      <router-link :to=link.href>{{ link.text }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    links: Array
  }
}
</script>
