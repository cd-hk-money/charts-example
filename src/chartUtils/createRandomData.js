function randCandleData (start, count, rate) {
  let data = [[start, start, start, start]]
  for (let i = 0; i < count; i++) {
    let start = data[i][3]
    let low = randMinMax(minData(start, rate), start)
    let high = randMinMax(start, maxData(start, rate))
    data.push(
      [
        Math.floor(start),
        Math.floor(low),
        Math.floor(high),
        Math.floor(i % 2 === 0 ? randMinMax(start, high) : randMinMax(low, start))
      ]
    )
  }
  return data
}

function randLineData (count) {
  let tempData = []
  for (let i = 0; i < count; i++) {
    tempData.push(Math.floor(Math.random() * 10) + 1)
  }
  return tempData
}

function minData (val, rate) {
  return val - (val * rate)
}

function maxData (val, rate) {
  return val + (val * rate)
}

function randMinMax (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export { randCandleData, randLineData }
