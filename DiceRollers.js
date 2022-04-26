//Roller
const Roll = (dice, bonus) => {
  const roll = Math.floor(Math.random() * dice + 1)
  let total = roll + (bonus || 0)
  return total
}

//1d4
const dFour = (bonus) => {
  return Roll(4, bonus)
}

//1d6
const dSix = (bonus) => {
  return Roll(6, bonus)
}

//1d8
const dEight = (bonus) => {
  return Roll(8, bonus)
}

//1d10
const dTen = (bonus) => {
  return Roll(10, bonus)
}

//1d12
const dTwelve = (bonus) => {
  return Roll(12, bonus)
}

//1d20
const dTwenty = (Bonus) => {
  return Roll(20, Bonus)
}

//1d100
const dOneHundred = (bonus) => {
  return Roll(100, bonus)
}
