<template>
  <div class="main">
    <h1>エイト・クイーン</h1>
    <a
      target="_blank"
      href="https://github.com/mnao305/codingskill-kadai/tree/master/kadai3"
    >
      GitHubリポジトリ
    </a>
    <div class="board">
      <table>
        <tr v-for="(items, i) in board" :key="i">
          <td
            :class="item"
            @click="tdClick(i, j)"
            v-for="(item, j) in items"
            :key="j"
          >
            <template v-if="item !== 'X'">
              {{ item }}
            </template>
          </td>
        </tr>
      </table>

      <div class="score">{{ result }} / 8</div>

      <button @click="reset">リセット</button>
      <p v-if="result >= 8">8個揃いました！！！！</p>
      <p v-else-if="board.length * board.length <= squares">
        もう置く場所はありません。。。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EightQueen extends Vue {
  board = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
  ]
  result = 0
  squares = 0

  /**
   * tdClick
   *
   * 押したマスにQを入れる。
   * その周囲八方向のマスにはXを入れる。
   */
  tdClick(i: number, j: number) {
    console.log(i, j)

    if (this.board[i][j] === 'Q' || this.board[i][j] === 'X') {
      console.log('押せないよ')
      return
    }
    // 横列
    for (let index = 0; index < this.board.length; index++) {
      if (this.board[i][index] === '') {
        this.squares++
      }
      this.$set(this.board[i], index, 'X')
    }
    // 縦列
    for (let index = 0; index < this.board.length; index++) {
      if (this.board[index][j] === '') {
        this.squares++
      }
      this.$set(this.board[index], j, 'X')
    }
    // 斜め方向 - 左上から右下
    let row: number
    let column: number
    if (i > j) {
      row = i - j
      column = 0
    } else {
      column = j - i
      row = 0
    }
    while (row < this.board.length && column < this.board.length) {
      if (this.board[row][column] === '') {
        this.squares++
      }
      this.$set(this.board[row], column, 'X')
      row++
      column++
    }
    // 斜め方向 - 右上から左下
    row = i
    column = j
    while (row < this.board.length && column >= 0) {
      if (this.board[row][column] === '') {
        this.squares++
      }
      this.$set(this.board[row], column, 'X')
      row++
      column--
    }
    row = i
    column = j
    while (column < this.board.length && row >= 0) {
      if (this.board[row][column] === '') {
        this.squares++
      }
      this.$set(this.board[row], column, 'X')
      row--
      column++
    }
    // 押した位置にQを設置
    this.$set(this.board[i], j, 'Q')
    this.result += 1
    if (this.result >= 8) {
      this.playAudio()
    }
  }
  /**
   * reset
   *
   * 盤面のリセット
   */
  reset() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        this.$set(this.board[i], j, '')
      }
    }
    this.result = 0
    this.squares = 0
  }
  /**
   * playAudio
   *
   * クリア時にファンファーレを鳴らす
   */
  playAudio() {
    console.log('hogefuga')

    const audio = new Audio()
    audio.src = '/audio/fanfare.mp3'
    audio.load()
    audio.play()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  width: 300px;
  margin: 0 auto;
  h1 {
    margin-bottom: 0;
  }
  a {
    display: block;
    margin-bottom: 10px;
  }
  .score {
    text-align: right;
  }
  table {
    margin: 0 auto;
    border-collapse: collapse;
    td {
      width: 35px;
      height: 35px;
    }
    td:hover {
      background-color: #e0f7fa;
    }
    th,
    td {
      border: solid 1px #006064;
    }
    tr {
      .Q {
        background-color: #ff7043;
      }
      .X {
        background-color: #ffab91;
      }
    }
  }
  button {
    margin-top: 20px;
  }
}
</style>
