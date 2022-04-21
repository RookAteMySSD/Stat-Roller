//1d4
const DFour = (Bonus) => {
  const roll = Math.floor(Math.random() * 4 + 1)
  let total = roll + (Bonus || 0)
  return total
}

//1d6
const DSix = (Bonus) => {
  const roll = Math.floor(Math.random() * 6 + 1)
  let total = roll + (Bonus || 0)
  return total
}

//1d8
const DEight = (Bonus) => {
  const roll = Math.floor(Math.random() * 8 + 1)
  let total = roll + (Bonus || 0)
  return total
}

//1d10
const DTen = (Bonus) => {
  const roll = Math.floor(Math.random() * 10 + 1)
  let total = roll + (Bonus || 0)
  return total
}

//1d12
const DTwelve = (Bonus) => {
  const roll = Math.floor(Math.random() * 12 + 1)
  let total = roll + (Bonus || 0)
  return total
}

//1d20
const DTwenty = (Bonus) => {
  const roll = Math.floor(Math.random() * 20 + 1)
  let total = roll + (Bonus || 0)
  return total
}

//1d100
const DOneHundred = (Bonus) => {
  const roll = Math.floor(Math.random() * 100 + 1)
  let total = roll + (Bonus || 0)
  return total
}

