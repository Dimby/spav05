const versets = [
  { id: '1', toko: 'toko 1', fehezanteny: 'Misaotra anao rala ah, code avo lenta be izy zany lety eh hahaahMisaotra anao rala ah, code avo lenta be izy zany lety eh hahaah' },
  { id: '2', toko: 'toko 2', fehezanteny: 'Noheveriko fa hoe fantatrao  ilay bodyguard dia hoe gaigy be koa raha hi- gilita' },
  { id: '3', toko: 'toko 3', fehezanteny: 'Eny, 1 - Tsy bandy niara-nikotrana 2 - Za tsy mikotrana zany' },
  { id: '4', toko: 'toko 4', fehezanteny: 'MInantsss, ary ataonlery mahita mintsy zany glita zany haha' },
]

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const verset = () => {
  const indice = getRandomInt(versets.length - 1)
  return versets[indice]
}
