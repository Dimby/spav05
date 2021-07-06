const versets = [
  { id: '1', toko: 'Tit 2.7a', fehezanteny: 'Ka amin’ny zavatra rehetra dia asehoy ny tenanao ho fianarana ny asa tsara' },
  { id: '2', toko: '1 Kor 15.58', fehezanteny: 'Koa amin’izany, ry rahalahy malalako, dia miorena tsara, aza miova, ary mahefà be mandrakariva amin’ny asan’ny Tompo, satria fantatrareo fa tsy foana tsy akory ny fikelezanareo aina ao amin’ny Tompo' },
  { id: '3', toko: '1 Tes 5.21', fehezanteny: 'Fantaro ny zavatra rehetra; hazòny mafy izay tsara' },
  { id: '4', toko: 'Filemona and6', fehezanteny: 'Mba hiasa mafy ho an’i Kristy ny fiombonana avy amin’ny finoanao amin’ny fahalalana tsara ny zavatra rehetra izay ao anatinareo' },
  { id: '5', toko: 'Efe 1.12', fehezanteny: 'Mba ho fiderana ny voninahiny izahay, izay nanantena an’i Kristy rahateo' },
  { id: '6', toko: 'Rom 12.11', fehezanteny: 'Mazotoa, fa aza malaina, ary aoka hafana fo amin’ny fanompoana ny Tompo' },
  { id: '7', toko: 'Rom 12.12', fehezanteny: 'Mifalia amin’ny fanantenana; miareta amin’ny fahoriana; mahareta amin’ny fivavahana' },
  { id: '8', toko: 'Fil 1.27', fehezanteny: 'Fa hany ataoko: aoka ny fitondrantenanareo ho mendrika ny filazantsaran’i Kristy, mba handrenesako ny toetrareo (na ho tonga aho ka hahita anareo, na tsy ho tonga), fa maharitra amin’ny fanahy iray hianareo ka miray fo hiara-miezaka hampandroso ny finoana ny filazantsara' },
  { id: '9', toko: 'Heb 10.24', fehezanteny: 'Ary aoka isika hifampandinika hampandroso ny fitiavana sy ny asa tsara' },
  { id: '10', toko: 'Heb 10.25', fehezanteny: 'Aza mahafoy ny fiarahantsika miangona, tahaka ny fanaon’ny sasany, fa mifananara kosa, mainka satria hitanareo fa mihantomotra ny andro' },
  { id: '11', toko: '1 Kor 15.10', fehezanteny: 'Fa ny fahasoavan’Andriamanitra no nahatoy izao ahy; ary tsy foana ny fahasoavany ato amiko; fa efa niasa fatratra mihoatra noho izy rehetra aho, nefa tsy izaho, fa ny fahasoavan’Andriamanitra no niara-niasa tamiko' },
  { id: '12', toko: '1 Kor 15.33', fehezanteny: 'Aza mety hofitahina hianareo; ny fikambanana amin’ny ratsy manimba ny fitondrantena tsara' },
  { id: '13', toko: 'Asa 1.8', fehezanteny: 'Fa hahazo hery hianareo amin’ny hilatsahan’ny Fanahy Masina aminareo, ary ho vavolombeloko any Jerosalema sy eran’i Jodia sy Samaria ary hatramin’ny faran’ny tany' },
  { id: '14', toko: 'Asa 16.31', fehezanteny: 'Minoa an’i Jesosy Tompo, dia hovonjena hianao sy ny ankohonanao' },
  { id: '15', toko: 'Jao 15.7', fehezanteny: 'Raha miray amiko hianareo, ka mitoetra ao anatinareo ny teniko, dia angataho izay tianareo na inona na inona, fa ho tonga aminareo izany' },
  { id: '16', toko: 'Jao 15.12', fehezanteny: 'Izao no didiko, dia ny mba hifankatiavanareo tahaka ny nitiavako anareo' },
  { id: '17', toko: 'Jao 15.16 ', fehezanteny: 'Tsy hianareo no nifidy Ahy, fa Izaho no nifidy anareo ka nanendry anareo mba handeha sy hamoa, ary mba haharetan’ny vokatrareo, mba homen’ny Ray anareo izay rehetra hangatahinareo amin’ny anarako na inona na inona' },
  { id: '18', toko: 'Jao 15.27', fehezanteny: 'Ary hianareo koa dia vavolombelona hanambara, satria hianareo efa teto amiko hatramin’ny voalohany' },
  { id: '19', toko: 'Asa 2.32', fehezanteny: 'Izany Jesosy izany dia efa natsangan’Andriamanitra, ary vavolombelon’izany izahay rehetra' },
  { id: '20', toko: 'Rom 1.16', fehezanteny: 'Fa tsy menatra ny filazantsara aho; fa herin’Andriamanitra ho famonjena izay rehetra mino izany, amin’ny Jiosy aloha, dia vao amin’ny jentilisa koa' },
  { id: '21', toko: '1 Pet 4.7', fehezanteny: 'Fa antomotra ny faran’ny zavatra rehetra; koa hendre ka mahonona tena ho amin’ny fivavahana' },
  { id: '22', toko: '1 Pet 4.8', fehezanteny: 'Ary mihoatra noho ny zavatra rehetra, mifankatiava tsara: fa,ny fitiavana manarona fahotana maro' },
  { id: '23', toko: 'Jak 1.12', fehezanteny: 'Sambatra izay olona maharitra fakam-panahy; fa rehefa voazaha toetra izy, dia handray ny satroboninahitra fiainana, izay nolazain’ny Tompo homena izay tia Azy' },
  { id: '24', toko: 'Apo 3.11', fehezanteny: 'Ho avy faingana Aho; tano mafy izay anananao, mba tsy hisy haka ny satroboninahitrao' },
]

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const verset = () => {
  const indice = getRandomInt(versets.length - 1)
  return versets[indice]
}
