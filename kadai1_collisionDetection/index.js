// 「左上x 座標」「左上y 座標」「幅」「高さ」
// txtファイルからデータ入力
const inputs = require('fs').readFileSync('/dev/stdin', 'utf8')

// データを変数に保存
const me = inputs.split('\n')[0].split(' ').map(n => Number(n))
const enemys = inputs.split('\n').slice(2).map(a => a.split(' ').map(n => Number(n)))

// 左上、右下 [x, y]
const mePosition = [[me[0], me[1]], [me[0] + me[2], me[1] + me[3]]]

for (let i = 0; i < enemys.length; i++) {
  const enemy = enemys[i]
  // 左上、右上、左下、右下 [x, y]
  const enemyPosition = [[enemy[0], enemy[1]], [enemy[0] + enemy[2], enemy[1]], [enemy[0], enemy[1] + enemy[3]], [enemy[0] + enemy[2], enemy[1] + enemy[3]]]
  for (let j = 0; j < enemyPosition.length; j++) {
    // 敵の四つ角のうちどれかが自機の範囲内にいる場合メッセージ表示
    if (mePosition[0][0] <= enemyPosition[j][0] && mePosition[0][1] <= enemyPosition[j][1] &&
        mePosition[1][0] >= enemyPosition[j][0] && mePosition[1][1] >= enemyPosition[j][1]) {
      console.log(`敵機${i + 1} あたり`)
      continue
    }
  }
}
