<template>
  <div id="app">
    <eight-queen />
    <info />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EightQueen from './components/EightQueen.vue'
import Info from './components/Info.vue'

@Component({
  components: {
    EightQueen,
    Info,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
