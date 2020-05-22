<template>
  <div>
    <HeaderBar :links=links />

    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/Header/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
  },
  data() {
    return {
      links: [{
        text: "src/",
        href: "/"
      }, {
        text: "cv/",
        href: "cv/"
      }]
    }
  }
}
</script>
