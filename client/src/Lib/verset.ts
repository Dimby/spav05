const versets = [
  { id: '1', toko: 'A', fehezanteny: 'A' },
  { id: '2', toko: 'B', fehezanteny: 'B' },
  { id: '3', toko: 'B', fehezanteny: 'B' },
  { id: '4', toko: 'B', fehezanteny: 'B' },
]

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const verset = () => {
  const indice = getRandomInt(versets.length - 1)
  return versets[indice]
}
