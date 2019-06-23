// import { repeat } from 'lodash'

const repeat = (x, n) => {
  const l = []
  while (n--) l.push(x)
  return l
}

const repeatPublicArea = n => repeat('공공구역', n)

export const getCleaningArea = (n) => {
  if (n >= 6) return ['쓰레기통', '쓸기', '실내 밀기', '복도 밀기', ...repeatPublicArea(n - 4)]
  else if (n === 5) return ['쓰레기통', '쓸기', '밀기', ...repeatPublicArea(n - 3)]
  else if (n === 4 || n === 3) return ['쓰레기통&쓸기', '밀기', ...repeatPublicArea(n - 2)]
  else return repeatPublicArea(n)
}
