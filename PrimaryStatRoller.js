//1d6
const dSix = () => {
  return Math.floor(Math.random() * 6 + 1)
}

//3d6
const threeDSix = () => {
  return dSix() + dSix() + dSix()
}

//4d6
const fourDSix = () => {
  const four = [dSix(), dSix(), dSix(), dSix()]
  let smallestNumber = null
  let total = 0
  for (let x = 0; x < four.length; x++) {
    if (smallestNumber === null || smallestNumber > four[x]) {
      total += smallestNumber
      smallestNumber = four[x]
    } else {
      total += four[x]
    }
  }
  return total
}

//Full Stat Array with 3-3d6 and 3-4d6
const fullStat = (lowestTotal) => {
  lowestTotal = lowestTotal || 0
  const stats = [threeDSix(), threeDSix(), threeDSix(), fourDSix(), fourDSix(), fourDSix()]
  const total = stats[0] + stats[1] + stats[2] + stats[3] + stats[4] + stats[5]
  if (total >= lowestTotal) {
  return `Your stats are ${stats} for a total of ${total}`
  }
  return fullStat(lowestTotal)
}
