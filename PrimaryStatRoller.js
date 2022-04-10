//1d6
const DSix = () => {
  return Math.floor(Math.random() * 6 + 1)
}

//3d6
const ThreeDSix = () => {
  return DSix() + DSix() + DSix()
}

//4d6
const FourDSix = () => {
  const four = [DSix(), DSix(), DSix(), DSix()]
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
const FullStat = (lowestTotal) => {
  const stats = [ThreeDSix(), ThreeDSix(), ThreeDSix(), FourDSix(), FourDSix(), FourDSix()]
  const total = stats[0] + stats[1] + stats[2] + stats[3] + stats[4] + stats[5]
  if (total >= lowestTotal) {
  return [stats, total]
  }
  return FullStat(lowestTotal)
}

let Stat = FullStat(70)
console.log(Stat)