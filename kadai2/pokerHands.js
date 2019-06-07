function royalFlush (num, suit) {
  let flg = suit.sort((a, b) => b - a)[0] === 5
  const straightFlush = [1, 10, 11, 12, 13]
  for (let i = 0; flg && i < num.length - 1; i++) {
    if (num[i] !== straightFlush[i]) {
      flg = false
    }
  }
  return flg
}
exports.royalFlush = royalFlush

function straightFlush (num) {
  let flg
  for (let i = 0; i < num.length; i++) {
    flg = num.sort((a, b) => b - a)[0] === 5
    for (let j = 1; flg && j < num.length; j++) {
      if (!(num[j - 1] + 1 === num[j] || (num[j - 1] === 13 && num[j] === 1))) {
        flg = false
      }
    }
    if (flg) {
      break
    }
    num.push(num[0])
    num.shift()
  }
  return flg
}
exports.straightFlush = straightFlush

function fourCard (num) {
  // 数字の1番目と4番目が一緒の場合数字4つが同じと判断
  const flg = num[0] === num[3] || num[1] === num[4]
  return flg
}
exports.fourCard = fourCard

function fullHouse (num) {
  const flg = (num[0] === num[2] && num[3] === num[4]) || (num[0] === num[1] && num[2] === num[4])
  return flg
}
exports.fullHouse = fullHouse

function flush (num) {
  const flg = num.sort((a, b) => b - a)[0] === 5
  return flg
}
exports.flush = flush

function straight (num) {
  let flg
  for (let i = 0; i < num.length; i++) {
    flg = true
    for (let j = 1; flg && j < num.length; j++) {
      if (!(num[j - 1] + 1 === num[j] || (num[j - 1] === 13 && num[j] === 1))) {
        flg = false
      }
    }
    if (flg) {
      break
    }
    num.push(num[0])
    num.shift()
  }
  return flg
}
exports.straight = straight

function threeCard (num) {
  let flg = false
  if (num[0] === num[2] || num[1] === num[3] || num[2] === num[4]) {
    flg = true
  }
  return flg
}
exports.threeCard = threeCard

function twoPair (num) {
  let flg = false
  const tmp = []
  for (let i = 0; i < num.length; i++) {
    tmp[num[i]] = tmp[num[i]] > 0 ? tmp[num[i]] + 1 : 1
  }
  tmp.sort((a, b) => b - a)
  if (tmp[0] === tmp[1]) {
    flg = true
  }
  return flg
}
exports.twoPair = twoPair

function onePair (num) {
  let flg = false
  if (num[0] === num[1] || num[1] === num[2] || num[2] === num[3] || num[3] === num[4]) {
    flg = true
  }
  return flg
}
exports.onePair = onePair
