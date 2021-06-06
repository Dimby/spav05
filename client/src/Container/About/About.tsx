import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import MUIDataTable from 'mui-datatables'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import ItemJereo from '../../Components/ItemJereo/ItemJereo'
import biraoImage from '../../Images/Birao/birao.jpg'
// Birao
import Filoha from '../../Images/Birao/Filoha.png'
import FilohaMpanampy from '../../Images/Birao/FilohaMpanampy.svg'
import FilohaMpanampy2 from '../../Images/Birao/FilohaMpanampy2.svg'
import Mpanolotsaina from '../../Images/Birao/Mpanolotsaina.svg'
import MpitahiryVola from '../../Images/Birao/MpitahiryVola.jpg'
import MpitantsoratryNyFivoriana from '../../Images/Birao/MpitantsoratryNyFivoriana.svg'
import MpitantsoratryNyVola from '../../Images/Birao/MpitantsoratryNyVola.jpg'
import RMamy from '../../Images/PS/RalaivelomangaMamy.jpg'
import Randrianahova from '../../Images/PS/Randrianahova.jpg'
// PS
import RRobert from '../../Images/PS/RasolonirinaRobert.jpg'
import TSalomon from '../../Images/PS/TrimozafySalomon.jpg'
import { verset } from '../../Lib/verset'
import Birao from './Birao/Birao'
import useStyles from './style'

// Table for Antontan'isa
function createData(sokajy: string, taona1: number, taona2: number) {
  return { sokajy, taona1, taona2 }
}
const rows = [
  createData('Fitandremana', 101, 101),
  createData('Fiangonana', 170, 169),
  createData('VOMM', 24, 24),
  createData('Mpitandrina', 52, 51),
  createData('Katekista Delege', 28, 28),
  createData('Kristiana', 39200, 39200),
  createData('Diakona sy Loholona', 2026, 2026),
  createData('Vita Batisa', 24800, 24800),
  createData('Mpandray', 10500, 10500),
]

const jereoKoa = [
  { title: 'TETIKANDRO', desc: 'tetikandro2021.docx', to: '/contact' },
  { title: 'FITSIPIPIFEHEZANA', desc: 'fitsipikaanatiny.docx', to: '/contact' },
  { title: 'VINA SY FANAMBY', desc: 'vinasyfanamby.docx', to: '/contact' },
]

// Table for VOMM
function createDataVomm(taona1: number, nijoro: number, fitambarany: number) {
  return { taona1, nijoro, fitambarany }
}
const rowsVomm = [createDataVomm(24, 0, 24)]

// Table for Mpitandrina
function createDataMpitandrina(
  isa: number,
  lahy: number,
  vavy: number,
  off: number,
  natolotra: number,
  noraisina: number,
  die: number,
) {
  return { isa, lahy, vavy, off, natolotra, noraisina, die }
}
const rowsMpitandrina = [createDataMpitandrina(51, 34, 17, 0, 5, 2, 0)]

// Table for Sefala
function createDataSefala(
  sokajy: string,
  taona1: number,
  taona2: number,
  fitambarany: number,
) {
  return { sokajy, taona1, taona2, fitambarany }
}
const rowsSefala = [
  createDataSefala('KATEKISTA', 95, 0, 95),
  createDataSefala('MPIANDRY', 819, 0, 819),
  createDataSefala('MPITORITENY', 591, 0, 591),
]

// Table for Fanamby
function createDataForFanamby(karazany: string, text: string) {
  return { karazany, text }
}
const dataFanamby = [
  createDataForFanamby(
    'F1.',
    'Atao vaindohan-draharaha ny Asa fitoriana ny Filazantsara',
  ),
  createDataForFanamby(
    'F2.',
    'Fiombonana tanteraka ho amin’ny asa fampandrosoana',
  ),
  createDataForFanamby('F3.', 'Fahazakana tena ara-bola'),
  createDataForFanamby('F4.', 'Fanasongadinana fisiana sy fiiziana miavaka'),
  createDataForFanamby('F5.', 'Voakarakara tsara ny mpiasa'),
]

// Data for PS
function createDataPS(
  avatar: string,
  name: string,
  firstname: string,
  status: string,
  dateDebut: string,
  dateFin: string,
  description: string,
) {
  return { avatar, name, firstname, status, dateDebut, dateFin, description }
}
const dataPS = [
  createDataPS(
    RRobert,
    'RASOLONIRINA',
    'Robert',
    'Mivady',
    'Desambra 2017',
    'Ankehitriny',
    'Blablabla',
  ),
  createDataPS('', 'RAKOTONOELY', 'Félix', 'Mivady', '-', '-', 'Blablabla'),
  createDataPS(RMamy, 'RALAIVELOMANGA', 'Mamy', '', '-', '-', 'Blablabla'),
  createDataPS(
    TSalomon,
    'TRIMOZAFY',
    'Salomon',
    'Mivady',
    '-',
    '-',
    'Blablabla',
  ),
  createDataPS(Randrianahova, 'RANDRIANAHOVA', '', '', '-', '-', 'Blablabla'),
]

// Data for Birao
function createDataBirao(
  avatar: string,
  name: string,
  firstname: string,
  asa: string,
  fonction: string,
  toerana: string,
) {
  return { avatar, name, firstname, asa, fonction, toerana }
}
const dataBirao = [
  createDataBirao(
    Filoha,
    'RASOLONIRINA',
    'Robert',
    'Mpitandrina',
    'Filoha',
    'Prezida Synodaly',
  ),
  createDataBirao(
    FilohaMpanampy,
    'RABEARIVELO',
    'Lalarimana',
    'Mpitandrina',
    'Filoha Mpanampy',
    'FJKM ANOSINDRAFILO',
  ),
  createDataBirao(
    FilohaMpanampy2,
    'RAVOAJARISOA',
    'Jean Claude',
    'Diakona',
    'Filoha Mpanampy',
    'FJKM ANDILAMENA FANAVAOZANA',
  ),
  createDataBirao(
    Mpanolotsaina,
    'RANDRIALIVA',
    'Soanirina Seheno',
    'Mpitandrina',
    'Mpanolotsaina',
    "Talen'ny TPM AMBOHIMIANGALY",
  ),
  createDataBirao(
    MpitantsoratryNyFivoriana,
    'RATOVONAJASONA',
    'Robelina',
    'Mpitandrina',
    'Mpitantsoratry ny fivoriana',
    'FJKM ANDINGADINGANA',
  ),
  createDataBirao(
    MpitantsoratryNyVola,
    'RANJAKASAINA',
    'Armand',
    'Diakona',
    'Mpitantsoratry ny vola',
    'FJKM AMBOHIMIANGALY ZOARA',
  ),
  createDataBirao(
    MpitahiryVola,
    'RAOELISON',
    'Andrianaivo',
    'Diakona',
    'Mpitahiry vola',
    'FJKM ANDILANOMBY FIRAISANA',
  ),
]

// Table for Mpitandrina
const columnsMpit = ['Lah.', 'Anarana', 'Fitandremana', 'Fifandraisana']
const dataMpit = [
  [
    '1',
    'ANDRIAMALAZA Otis  Patrice',
    'Ambohitanibe Kristy Fahazavana',
    '0340585554 / 0337973196',
  ],
  ['2', 'ANDRIAMPARANY Donna ', 'Antsangasanga Vavolombelona', '0340395454'],
  [
    '3',
    'ANDRIAMAMPIANINA René Robin',
    'Fanantenana Ambodinonoka',
    '0346452492 / 0336144586',
  ],
  [
    '4',
    'ANDRIAMIHAJA  Albert',
    'Kristy Fahazavana Ilafy',
    '0348510087 / 0325013213',
  ],
]

// Table for KD
const columnsKD = ['Lah.', 'Anarana', 'Fitandremana', 'Fifandraisana']
const dataKD = [
  [
    '1',
    'ANDRIAMALAZA Otis  Patrice',
    'Ambohitanibe Kristy Fahazavana',
    '0340585554 / 0337973196',
  ],
  ['2', 'ANDRIAMPARANY Donna ', 'Antsangasanga Vavolombelona', '0340395454'],
  [
    '3',
    'ANDRIAMAMPIANINA René Robin',
    'Fanantenana Ambodinonoka',
    '0346452492 / 0336144586',
  ],
  [
    '4',
    'ANDRIAMIHAJA  Albert',
    'Kristy Fahazavana Ilafy',
    '0348510087 / 0325013213',
  ],
]

//  Table for VOOM
const columnsVomm = [
  { name: 'faritra', label: 'Faritra' },
  { name: 'laharana', label: 'Lah.' },
  { name: 'siege', label: 'Toerana' },
  { name: 'dateDebut', label: 'Daty nijoroany' },
  { name: 'fondateur', label: 'Nanagana' },
  { name: 'mpiahy', label: 'Mpiahy azy' },
]

const options = {
  elevation: 0
};

const About: FC = () => {
  const classes = useStyles()
  const versetRandom = verset()

  return (
    <div>
      <div className={classes.boxOne}>
        <div>" {versetRandom.fehezanteny.toUpperCase()} "</div>
        <p style={{ fontSize: '18px' }}>- {versetRandom.toko}</p>
      </div>
      <div className={classes.boxTwo}>
        <Grid container spacing={0}>
          <Grid xs={2} style={{position: "sticky", top: "0"}}>
            <div>
              <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>LOHATENY</h2>
              <div className={classes.item} style={{ marginLeft: '20px' }}>
                <div className="menuItem">
                  <a href="#birao">Birao</a>
                </div>
                <div className="menuItem">
                  <a href="#psnifandimby">PS nifandimby</a>
                </div>
                <div className="menuItem">
                  <a href="#mpitandrina">Mpitandrina</a>
                </div>
                <div className="menuItem">
                  <a href="#katekistadelege">Katekista Delege</a>
                </div>
                <div className="menuItem">
                  <a href="#antontanisa">Antontan'isa</a>
                </div>
              </div>
            </div>
          </Grid>
<<<<<<< HEAD
          <Grid style={{ padding: '30px', borderLeft: "1px solid rgb(0 0 0 / 10%)", borderRight: "1px solid rgb(0 0 0 / 10%)" }} xs>
            <h1 id="birao">BIRAO</h1>
            <Grid container>
=======
          <Grid
            style={{
              padding: '30px',
              borderLeft: '1px solid rgb(0 0 0 / 10%)',
              borderRight: '1px solid rgb(0 0 0 / 10%)',
            }}
            xs
          >
            <h1>BIRAO</h1>
            <Grid container style={{ justifyContent: 'center' }}>
>>>>>>> 2ac8aba (component reutilisable)
              {dataBirao.map((row) => (
                <Birao
                  urlAvatar={row.avatar}
                  name={row.name}
                  firstname={row.firstname}
                  asa={row.asa}
                  toerana={row.toerana}
                  fonction={row.fonction}
                />
              ))}
            </Grid>
            <br />
            <Grid container>
              <Grid style={{ textAlign: 'center' }}>
                <img
                  src={biraoImage}
                  alt="Sarin'ny birao"
                  style={{ width: '50%' }}
                />
              </Grid>
            </Grid>
            <br />
            <h1 id="psnifandimby">PRESIDENT SYNODAL NIFANDIMBY</h1>
            <Grid container>
              {dataPS.map((row) => (
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: 'center', padding: '20px' }}
                  key={row.avatar}
                >
                  <Card className="root" style={{ maxWidth: 'none' }}>
                    <CardActionArea>
                      <CardMedia
                        className="media"
                        image={row.avatar}
                        title="Contemplative Reptile"
                        style={{ backgroundPosition: 'top' }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h1">
                          {row.name.toUpperCase()} {row.firstname} {row.status}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                          {row.dateDebut} - {row.dateFin}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {row.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <h1 id="mpitandrina">MPITANDRINA</h1>
            <MUIDataTable
              title={'Lisitry ny Mpitandrina 2021'}
              data={dataMpit}
              columns={columnsMpit}
              options={options}
            />
            <h1 id="katekistadelege">KATEKISTA DELEGE</h1>
            <MUIDataTable
              title={'Lisitry ny Katekista Delege 2021'}
              data={dataKD}
              columns={columnsKD}
              options={options}
            />
            <h1 id="antontanisa">ANTONTAN'ISA VOARAY NY TAONA 2020</h1>
            <div>
              <TableContainer>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Sokajy</TableCell>
                      <TableCell align="right">2019</TableCell>
                      <TableCell align="right">2020</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.sokajy}>
                        <TableCell component="th" scope="row">
                          {row.sokajy}
                        </TableCell>
                        <TableCell align="right">{row.taona1}</TableCell>
                        <TableCell align="right">{row.taona2}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* VOMM */}
            <div>
              <h2>VOMM</h2>
              <TableContainer>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>TAONA 2019</TableCell>
                      <TableCell align="right">VAO NIJORO (2020)</TableCell>
                      <TableCell align="right">FITAMBARANY</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsVomm.map((row) => (
                      <TableRow key={row.taona1}>
                        <TableCell component="th" scope="row">
                          {row.taona1}
                        </TableCell>
                        <TableCell align="right">{row.nijoro}</TableCell>
                        <TableCell align="right">{row.fitambarany}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* Mpitandrina */}
            <div>
              <h2>MPITANDRINA 2020</h2>
              <TableContainer>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>FITAMBARANY</TableCell>
                      <TableCell align="right">LAHY</TableCell>
                      <TableCell align="right">VAVY</TableCell>
                      <TableCell align="right">MISOTRO RONONO</TableCell>
                      <TableCell align="right">NATOLOTRA FOIBE</TableCell>
                      <TableCell align="right">NORAISINA</TableCell>
                      <TableCell align="right">NODIMANDRY</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsMpitandrina.map((row) => (
                      <TableRow key={row.isa}>
                        <TableCell component="th" scope="row">
                          {row.isa}
                        </TableCell>
                        <TableCell align="right">{row.lahy}</TableCell>
                        <TableCell align="right">{row.vavy}</TableCell>
                        <TableCell align="right">{row.off}</TableCell>
                        <TableCell align="right">{row.natolotra}</TableCell>
                        <TableCell align="right">{row.noraisina}</TableCell>
                        <TableCell align="right">{row.die}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div>
              <h2>FIAINAN'NY SEFALA</h2>
              <TableContainer>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>SOKAJY</TableCell>
                      <TableCell align="right">2019</TableCell>
                      <TableCell align="right">2020</TableCell>
                      <TableCell align="right">Fitambarany</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsSefala.map((row) => (
                      <TableRow key={row.sokajy}>
                        <TableCell component="th" scope="row">
                          {row.sokajy}
                        </TableCell>
                        <TableCell align="right">{row.taona1}</TableCell>
                        <TableCell align="right">{row.taona2}</TableCell>
                        <TableCell align="right">{row.fitambarany}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <br />
            <br />
            <div>
              Tsy nisy ny fianarana tany amin’ireo ivon-toerana miisa 8 ny taona
              2019 : Befinoana Ambatondrazaka, Ambohimiangaly, Manakambahiny,
              Andilanatoby, Andreba, Imerimandroso, Didy, Andilamena. Tsy nisy
              koa, noho izany, ny famoahana Katekista sy Mpiandry ary
              Mpitoriteny.
            </div>
          </Grid>
          <Grid xs={3}>
            <div className="section">
              <div className="news">
                <div>
                  <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>
                    JEREO KOA
                  </h2>
                </div>
                <div>
                  {jereoKoa.map((row) => (
                    <ItemJereo
                      title={row.title}
                      description={row.desc}
                      to={row.to}
                    />
                  ))}
                </div>
              </div>
            </div>
            <br />
            <div
              className="section"
              style={{
                padding: '0 20px',
                borderTop: '1px solid rgb(0 0 0 / 10%)',
              }}
            >
              <div>
                <h2 style={{ marginLeft: '0px', color: '#F4C247' }}>
                  HIRA FANEVAN'NY SPAV05
                </h2>
              </div>
              <br />
              <div>
                1. Isaorana tokoa ny anaranao <br />
                Ry Andriamanitra tsitoha mahery <br />
                Mitantana ny dia hatramin’izao <br />
                Ny dera anie ho Anao irery <br />
                <br />
                <div style={{ paddingLeft: '20px', fontStyle: 'italic' }}>
                  Miorina amin’ny fanantenana <br />
                  Isika mino an’I Jesoa Kristy <br />
                  Finoana marina ny teny mana <br />
                  No amonjena antsika doria. <br />
                  <br />
                </div>
                2. O! mifalia amin’ny fanompoana <br />
                Ka mandrosoa fa aza mora kivy <br />
                Dia tano ny ampingan’ny finoana <br />
                Ka tanteraho ireo adidy <br />
                <br />
              </div>
            </div>
            <div
              className="section"
              style={{
                padding: '0 20px',
                borderTop: '1px solid rgb(0 0 0 / 10%)',
              }}
            >
              <div>
                <h2 style={{ marginLeft: '0px', color: '#F4C247' }}>VINA</h2>
              </div>
              <div className="vina">
                "SPAV 05, fianarana amin’ny asa tsara" - Titosy 2:7a
              </div>
              <div>
                <h2 style={{ marginLeft: '0px', color: '#F4C247' }}>FANAMBY</h2>
              </div>
              <div className="fanamby">
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Karazany</TableCell>
                      <TableCell align="left">Fanamby</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataFanamby.map((row) => (
                      <TableRow key={row.karazany}>
                        <TableCell align="left">{row.karazany}</TableCell>
                        <TableCell align="left">{row.text}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <br />
              <div className="vina">
                <Link to="/contact">vinasyfanamby.docx</Link>
              </div>
            </div>
            <br />
            <br />
            <div
              className="section"
              style={{
                padding: '0 20px',
                borderTop: '1px solid rgb(0 0 0 / 10%)',
              }}
            >
              <div>
                <h2 style={{ marginLeft: '0px', color: '#F4C247' }}>HAFA</h2>
              </div>
              <div className="news">
                {jereoKoa.map((row) => (
                  <ItemJereo
                    title={row.title}
                    description={row.desc}
                    to={row.to}
                  />
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default About
