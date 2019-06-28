<template>
  <div>
    <h3 @click="showInfo">エイト・クイーンとは▽</h3>
    <p v-show="flg">
      エイト・クイーンとは、チェスの盤とコマを使用したパズルの名称である。<br /><br />
      チェスの盤上に、8個のクイーンを配置する。このとき、どの駒も他の駒に取られるような位置においてはいけない。<br />
      クイーンの動きは、上下左右斜めの8方向に、遮る物がない限り進める。将棋の飛車と角行を合わせた動きである。
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Info extends Vue {
  flg = false
  showInfo() {
    this.flg = !this.flg
  }
}
</script>

<style lang="scss">
h3 {
  cursor: pointer;
}
</style>
