const {
  royalFlush,
  straightFlush,
  fourCard,
  fullHouse,
  flush,
  straight,
  threeCard,
  twoPair,
  onePair
} = require('./pokerHands')
const readlineSync = require('readline-sync')

// カードの記号と数字が空白区切りで5行入力
function main () {
  const inputs = []
  console.log('スペードが0、クラブが1、ダイヤが2、ハートが3')
  console.log('数字は1から2桁で 01～13')
  for (let i = 0; i < 5; i++) {
    inputs.push(
      readlineSync.question(`記号 数字を空白区切りで入力 ${i + 1}個目：`)
    )
  }
  const inputSuit = inputs
    .map((v) => v.split(' '))
    .map((v) => v[0])
    .map((n) => Number(n))
  const inputNum = inputs
    .map((v) => v.split(' '))
    .map((v) => v[1])
    .map((n) => Number(n))
  const suit = ['S', 'C', 'D', 'H']
  const num = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  let str = suit[inputSuit[0]] + num[inputNum[0] - 1]
  for (let i = 1; i < inputs.length; i++) {
    str += ` ${suit[inputSuit[i]] + num[inputNum[i] - 1]}`
  }
  console.log(str)
  inputSuit.sort((a, b) => a - b)
  inputNum.sort((a, b) => a - b)
  const inputSuitNum = [0, 0, 0, 0]
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < inputSuit.length; j++) {
      if (inputSuit[j] === i) {
        inputSuitNum[i]++
      }
    }
  }
  let pokerHand = ''
  if (royalFlush(inputNum, inputSuitNum)) {
    pokerHand = 'ロイヤルストレートフラッシュ！'
  } else if (straightFlush(inputNum)) {
    pokerHand = 'ストレートフラッシュ'
  } else if (fourCard(inputNum)) {
    pokerHand = 'フォーカード'
  } else if (fullHouse(inputNum)) {
    pokerHand = 'フルハウス'
  } else if (flush(inputSuitNum)) {
    pokerHand = 'フラッシュ'
  } else if (straight(inputNum)) {
    pokerHand = 'ストレート'
  } else if (threeCard(inputNum)) {
    pokerHand = 'スリーペア'
  } else if (twoPair(inputNum)) {
    pokerHand = 'ツーペア'
  } else if (onePair(inputNum)) {
    pokerHand = 'ワンペア'
  } else {
    pokerHand = 'ブタ'
  }
  console.log(pokerHand)
}

main()
