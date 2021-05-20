import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core'
import React, { createRef, FC } from 'react'
import useStyles from './style'
import { Link } from 'react-router-dom';

// Birao
import Filoha from '../../Images/Birao/Filoha.png';
import FilohaMpanampy from '../../Images/Birao/FilohaMpanampy.svg';
import Mpanolotsaina from '../../Images/Birao/Mpanolotsaina.svg';
import MpitantsoratryNyFivoriana from '../../Images/Birao/MpitantsoratryNyFivoriana.svg';
import MpitantsoratryNyVola from '../../Images/Birao/MpitantsoratryNyVola.svg';
// PS
import RRobert from '../../Images/PS/RasolonirinaRobert.jpg'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import MUIDataTable from 'mui-datatables'
import { ChevronRight } from '@material-ui/icons'
import { verset } from '../../Lib/verset'

// Table for Antontan'isa
function createData(name: string, counter: number) {
  return { name, counter }
}
const rows = [
  createData('Mpitandrina', 25),
  createData('Katekista Delege', 36),
  createData('Fitandremana', 45),
  createData('Fiangonana', 78),
  createData("Vondron'olona miara-mivavaka", 85),
  createData('Fiangonana tsy misy mpiahy', 96),
]

// Table for Fanamby
function createDataForFanamby(karazany: string, text: string) {
  return { karazany, text}
}
const dataFanamby = [
  createDataForFanamby("F1.", "Atao vaindohan-draharaha ny Asa fitoriana ny Filazantsara"),
  createDataForFanamby("F2.", "Fiombonana tanteraka ho amin’ny asa fampandrosoana"),
  createDataForFanamby("F3.", "Fahazakana tena ara-bola"),
  createDataForFanamby("F4.", "Fanasongadinana fisiana sy fiiziana miavaka"),
  createDataForFanamby("F5.", "Voakarakara tsara ny mpiasa"),
]

// Data for PS
function createDataPS(avatar: string, name: string, firstname: string, status: string, dateDebut: string, dateFin: string, description: string) {
  return {avatar, name, firstname, status, dateDebut, dateFin, description}
}
const dataPS = [
  createDataPS(RRobert, "RASOLONIRINA", "Robert", "Mivady", "Desambra 2017", "Ankehitriny", "Blablabla"),
]

// Data for Birao
function createDataBirao(avatar: string, name: string, firstname: string, asa: string, fonction: string, toerana: string) {
  return {avatar, name, firstname, asa, fonction, toerana}
}
const dataBirao = [
  createDataBirao(Filoha, "RASOLONIRINA", "Robert", "Mpitandrina", "Filoha", "Prezida Synodaly"),
  createDataBirao(FilohaMpanampy, "RABEARIVELO", "Lalarimana", "Mpitandrina", "Filoha Mpanampy", "FJKM ANOSINDRAFILO"),
  createDataBirao("", "RAVOAJARISOA", "Jean Claude", "Diakona", "Filoha Mpanampy", "FJKM ANDILAMENA FANAVAOZANA"),
  createDataBirao(Mpanolotsaina, "RANDRIALIVA", "Soanirina Seheno", "Mpitandrina", "Mpanolotsaina", "Talen'ny TPM AMBOHIMIANGALY"),
  createDataBirao(MpitantsoratryNyFivoriana, "RATOVONAJASONA", "Robelina", "Mpitandrina", "Mpitantsoratry ny fivoriana", "FJKM ANDINGADINGANA"),
  createDataBirao("", "RANJAKASAINA", "Armand", "Diakona", "Mpitantsoratry ny vola", "FJKM AMBOHIMIANGALY ZOARA"),
  createDataBirao(MpitantsoratryNyVola, "RAOELISON", "Andrianaivo", "Diakona", "Mpitahirivola", "FJKM ANDILANOMBY FIRAISANA"),
]

// Table for Mpitandrina
const columnsMpit = ['Lah.', 'Anarana', 'Fitandremana', 'Fifandraisana']
const dataMpit = [
  ['1', 'ANDRIAMALAZA Otis  Patrice', 'Ambohitanibe Kristy Fahazavana', '0340585554 / 0337973196'],
  ['2', 'ANDRIAMPARANY Donna ', 'Antsangasanga Vavolombelona', '0340395454'],
  ['3', 'ANDRIAMAMPIANINA René Robin', 'Fanantenana Ambodinonoka', '0346452492 / 0336144586'],
  ['4', 'ANDRIAMIHAJA  Albert', 'Kristy Fahazavana Ilafy', '0348510087 / 0325013213'],
]

// Table for KD
const columnsKD = ['Lah.', 'Anarana', 'Fitandremana', 'Fifandraisana']
const dataKD = [
  ['1', 'ANDRIAMALAZA Otis  Patrice', 'Ambohitanibe Kristy Fahazavana', '0340585554 / 0337973196'],
  ['2', 'ANDRIAMPARANY Donna ', 'Antsangasanga Vavolombelona', '0340395454'],
  ['3', 'ANDRIAMAMPIANINA René Robin', 'Fanantenana Ambodinonoka', '0346452492 / 0336144586'],
  ['4', 'ANDRIAMIHAJA  Albert', 'Kristy Fahazavana Ilafy', '0348510087 / 0325013213'],
]

//  Table for VOOM
const columnsVomm = [
  {name: "faritra", label: "Faritra"},
  {name: "laharana", label: "Lah."},
  {name: "siege", label: "Toerana"},
  {name: "dateDebut", label: "Daty nijoroany"},
  {name: "fondateur", label: "Nanagana"},
  {name: "mpiahy", label: "Mpiahy azy"},
];


const options = {
  filterType: 'checkbox',
}

const About: FC = () => {
  const classes = useStyles()
  const versetRandom = verset()
  return (
    <div>
      <div className={classes.boxOne}>
        <div>
          " {versetRandom.fehezanteny.toUpperCase()} "
        </div>
        <p style={{ fontSize: '18px' }}>- {versetRandom.toko}</p>
      </div>
      <div className={classes.boxTwo}>
        <Grid container spacing={0}>
          <Grid xs={2}>
            <div>
              <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>LOHATENY</h2>
              <div className={classes.item} style={{ marginLeft: '20px' }}>
                <div className="menuItem">
                  <Link to="">Birao</Link>
                </div>
                <div className="menuItem">
                  <Link to="">PS nifandimby</Link>
                </div>
                <div className="menuItem">
                  <Link to="">Mpitandrina</Link>
                </div>
                <div className="menuItem">
                  <Link to="">Katekista Delege</Link>
                </div>
                <div className="menuItem">
                  <Link to="">VOMM</Link>
                </div>
                <div className="menuItem">
                  <Link to="">Antontan'isa</Link>
                </div>
                <div className="menuItem">
                  <Link to="">Tantaran'ny SP</Link>
                </div>
              </div>
            </div>
          </Grid>
          <Grid style={{ padding: '30px', borderLeft: "1px solid rgb(0 0 0 / 10%)", borderRight: "1px solid rgb(0 0 0 / 10%)" }} xs>
            <h1>BIRAO</h1>
            <Grid container>
              {dataBirao.map((row) => (
                <Grid xs={3} style={{ padding: '10px' }} key={row.avatar}>
                  <Card className="cardBirao">
                    <CardContent style={{ margin: 'auto', textAlign: 'center' }}>
                      <Avatar
                        alt=""
                        className="avatar"
                        src={row.avatar}
                        style={{ margin: 'auto' }}
                      />
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="h1"
                        style={{ paddingTop: '10px' }}
                      >
                        {row.name} {row.firstname} <br /> {row.asa} <br />
                        {row.toerana}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="p">
                        {row.fonction}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <h1>PRESIDENT SYNODAL NIFANDIMBY</h1>
            <Grid container>
              {dataPS.map((row) => (
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: 'center', padding: '20px' }}
                  key={row.avatar}
                >
                  <Card className="root" style={{ maxWidth: 'none'}}>
                    <CardActionArea>
                      <CardMedia
                        className="media"
                        image={row.avatar}
                        title="Contemplative Reptile"
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

            <h1>MPITANDRINA</h1>
            <MUIDataTable
              title={'Lisitry ny Mpitandrina 2021'}
              data={dataMpit}
              columns={columnsMpit}
            />
            <h1>KATEKISTA DELEGE</h1>
            <MUIDataTable
              title={'Lisitry ny Katekista Delege 2021'}
              data={dataKD}
              columns={columnsKD}
            />
            <h1>ANTONTAN'ISA TSARA HO FANTATRA</h1>
            <div>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Informations</TableCell>
                      <TableCell align="right">Isa</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.counter}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <h1>TANTARAN'NY SYNODAMPARITANY</h1>
            <div>
              B
            </div>
          </Grid>
          <Grid xs={3}>
            <div className="section">
              <div className="news">
                  <div><h2 style={{marginLeft: "15px", color: "#F4C247"}}>JEREO KOA</h2></div>
                  <div>
                      <div className="item">
                          <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
                              <Grid container>
                          <Grid item>
                              <div><h4 style={{margin: 0}}>14 Juin 2021</h4></div>
                              <div>Fambolenkazo teny Manakambahiny </div>
                          </Grid>
                          <Grid xs style={{textAlign: "right"}}>
                              <IconButton style={{backgroundColor: "#F5F5F5"}}>
                                  <ChevronRight />
                              </IconButton>
                          </Grid>
                              </Grid>
                          </div>
                      </div>
                      <div className="item">
                          <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
                            <Link to="/contact" style={{color: "#004D80", textDecoration: "none"}}>
                              <Grid container>
                                <Grid item>
                                    <div><h4 style={{margin: 0}}>TETIKANDRO</h4></div>
                                    <div>tetikandro2021.docx</div>
                                </Grid>
                                <Grid xs style={{textAlign: "right"}}>
                                    <IconButton style={{backgroundColor: "#F5F5F5"}}>
                                        <ChevronRight />
                                    </IconButton>
                                </Grid>
                              </Grid>
                            </Link>
                          </div>
                      </div>
                      <div className="item">
                          <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
                            <Link to="/contact" style={{color: "#004D80", textDecoration: "none"}}>
                              <Grid container>
                                <Grid item>
                                    <div><h4 style={{margin: 0}}>FITSIPIPIFEHEZANA</h4></div>
                                    <div>fitsipikaanatiny.docx</div>
                                </Grid>
                                <Grid xs style={{textAlign: "right"}}>
                                    <IconButton style={{backgroundColor: "#F5F5F5"}}>
                                        <ChevronRight />
                                    </IconButton>
                                </Grid>
                              </Grid>
                            </Link>
                          </div>
                      </div>
                      <div className="item">
                          <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
                            <Link to="/contact" style={{color: "#004D80", textDecoration: "none"}}>
                              <Grid container>
                                <Grid item>
                                    <div><h4 style={{margin: 0}}>VINA SY FANAMBY</h4></div>
                                    <div>vinasyfanamby.docx</div>
                                </Grid>
                                <Grid xs style={{textAlign: "right"}}>
                                    <IconButton style={{backgroundColor: "#F5F5F5"}}>
                                        <ChevronRight />
                                    </IconButton>
                                </Grid>
                              </Grid>
                            </Link>
                          </div>
                      </div>
                  </div>
              </div>
            </div><br />
            <div className="section" style={{padding: "0 20px", borderTop: "1px solid rgb(0 0 0 / 10%)"}}>
              <div><h2 style={{marginLeft: "0px", color: "#F4C247"}}>HIRA FANEVAN'NY SPAV05</h2></div>
              <br />
              <div>
                  1. Isaorana tokoa ny anaranao <br />
                  Ry Andriamanitra tsitoha mahery <br />
                  Mitantana ny dia hatramin’izao <br />
                  Ny dera anie ho Anao irery <br /><br />

                  <div style={{paddingLeft: "20px", fontStyle: "italic"}}>
                    Miorina amin’ny fanantenana <br />
                    Isika mino an’I Jesoa Kristy <br />
                    Finoana marina ny teny mana <br />
                    No amonjena antsika doria. <br /><br />
                  </div> 
                  
                  2. O! mifalia amin’ny fanompoana <br />
                  Ka mandrosoa fa aza mora kivy <br />
                  Dia tano ny ampingan’ny  finoana <br />
                  Ka tanteraho ireo adidy <br /><br />
              </div>
            </div>
            <div className="section" style={{padding: "0 20px", borderTop: "1px solid rgb(0 0 0 / 10%)"}}>
              <div><h2 style={{marginLeft: "0px", color: "#F4C247"}}>VINA</h2></div>
              <div className="vina">
                "SPAV 05, fianarana amin’ny asa tsara" - Titosy 2:7a
              </div>
              <div><h2 style={{marginLeft: "0px", color: "#F4C247"}}>FANAMBY</h2></div>
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
              </div><br />
              <div className="vina">
                <Link to="/contact">vinasyfanamby.docx</Link>
              </div>
            </div>
            <br /><br />
            <div className="section" style={{padding: "0 20px", borderTop: "1px solid rgb(0 0 0 / 10%)"}}>
              <div><h2 style={{marginLeft: "0px", color: "#F4C247"}}>HAFA</h2></div>
              <div className="news">
                <div className="item">
                  <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
                    <Link to="/contact" style={{color: "#004D80", textDecoration: "none"}}>
                      <Grid container>
                        <Grid item>
                            <div><h4 style={{margin: 0}}>TETIKANDRO</h4></div>
                            <div>tetikandro2021.docx</div>
                        </Grid>
                        <Grid xs style={{textAlign: "right"}}>
                            <IconButton style={{backgroundColor: "#F5F5F5"}}>
                                <ChevronRight />
                            </IconButton>
                        </Grid>
                      </Grid>
                    </Link>
                  </div>
              </div>
              <div className="item">
                  <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
                    <Link to="/contact" style={{color: "#004D80", textDecoration: "none"}}>
                      <Grid container>
                        <Grid item>
                            <div><h4 style={{margin: 0}}>FITSIPIPIFEHEZANA</h4></div>
                            <div>fitsipikaanatiny.docx</div>
                        </Grid>
                        <Grid xs style={{textAlign: "right"}}>
                            <IconButton style={{backgroundColor: "#F5F5F5"}}>
                                <ChevronRight />
                            </IconButton>
                        </Grid>
                      </Grid>
                    </Link>
                  </div>
              </div>
              <div className="item">
                  <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
                    <Link to="/contact" style={{color: "#004D80", textDecoration: "none"}}>
                      <Grid container>
                        <Grid item>
                            <div><h4 style={{margin: 0}}>VINA SY FANAMBY</h4></div>
                            <div>vinasyfanamby.docx</div>
                        </Grid>
                        <Grid xs style={{textAlign: "right"}}>
                            <IconButton style={{backgroundColor: "#F5F5F5"}}>
                                <ChevronRight />
                            </IconButton>
                        </Grid>
                      </Grid>
                    </Link>
                  </div>
              </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default About
