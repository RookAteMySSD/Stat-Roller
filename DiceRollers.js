//Roller
const Roll = (Dice, Bonus) => {
  const roll = Math.floor(Math.random() * Dice + 1)
  let total = roll + (Bonus || 0)
  return total
}

//1d4
const DFour = (Bonus) => {
  return Roll(4, Bonus)
}

//1d6
const DSix = (Bonus) => {
  return Roll(6, Bonus)
}

//1d8
const DEight = (Bonus) => {
  return Roll(8, Bonus)
}

//1d10
const DTen = (Bonus) => {
  return Roll(10, Bonus)
}

//1d12
const DTwelve = (Bonus) => {
  return Roll(12, Bonus)
}

//1d20
const DTwenty = (Bonus) => {
  return Roll(20, Bonus)
}

//1d100
const DOneHundred = (Bonus) => {
  return Roll(100, Bonus)
}
