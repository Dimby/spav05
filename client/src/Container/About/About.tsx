import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@material-ui/core'
import React, { createRef, FC } from 'react'
import useStyles from './style'
import avatar1 from '../../Images/ps.jpg'
import avatar2 from '../../Images/avatar1.jpg'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import MUIDataTable from 'mui-datatables'

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

// Table for Mpitandrina
const columnsMpit = ['Lah.', 'Anarana', 'Fitandremana', 'Fifandraisana']

const dataMpit = [
  ['1', 'ANDRIAMALAZA Otis  Patrice', 'Ambohitanibe Kristy Fahazavana', '0340585554 / 0337973196'],
  ['2', 'ANDRIAMPARANY Donna ', 'Antsangasanga Vavolombelona', '0340395454'],
  ['3', 'ANDRIAMAMPIANINA René Robin', 'Fanantenana Ambodinonoka', '0346452492 / 0336144586'],
  ['4', 'ANDRIAMIHAJA  Albert', 'Kristy Fahazavana Ilafy', '0348510087 / 0325013213'],
]

//  Table for VOOM
const columnsVomm = [
  {name: "faritra", label: "Faritra"},
  [
    {name: "laharana", label: "Lah."},
    {name: "siege", label: "Toerana"},
    {name: "dateDebut", label: "Daty nijoroany"},
    {name: "fondateur", label: "Nanagana"},
    {name: "mpiahy", label: "Mpiahy azy"},
  ]
];

const options = {
  filterType: 'checkbox',
}

const About: FC = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.boxOne}>
        <div>
          "FA FAHASOAVANA NO NAMONJENA ANAREO AMIN'NY FINOANA <br />
          ARY TSY AVY AMINAREO IZANY, FA FAMONJENA AVY AMIN'ANDRIAMANITRA"
        </div>
        <p style={{ fontSize: '18px' }}>- Efesiana 2 : 8</p>
      </div>
      <div className={classes.boxTwo}>
        <Grid container spacing={0}>
          <Grid xs={2}>
            <div>
              <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>LOHATENY</h2>
              <div className={classes.item} style={{ marginLeft: '20px' }}>
                <div className="menuItem">
                  <Link>Birao</Link>
                </div>
                <div className="menuItem">
                  <Link>PS nifandimby</Link>
                </div>
                <div className="menuItem">
                  <Link>Mpitandrina</Link>
                </div>
                <div className="menuItem">
                  <Link>VOMM</Link>
                </div>
                <div className="menuItem">
                  <Link>Antontan'isa</Link>
                </div>
                <div className="menuItem">
                  <Link>Tantaran'ny SP</Link>
                </div>
              </div>
            </div>
          </Grid>
          <Grid style={{ padding: '20px' }} xs>
            <h1>BIRAO</h1>
            <Grid container>
              <Grid xs={3} style={{ padding: '10px' }}>
                <Card className="cardBirao">
                  <CardContent style={{ margin: 'auto', textAlign: 'center' }}>
                    <Avatar
                      alt=""
                      className="avatar"
                      src={avatar2}
                      style={{ margin: 'auto' }}
                    />
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="h1"
                      style={{ paddingTop: '10px' }}
                    >
                      RASOLONIRINA Robert, Mpitandrina
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      FILOHA
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={3} style={{ padding: '10px' }}>
                <Card className="cardBirao">
                  <CardContent style={{ margin: 'auto', textAlign: 'center' }}>
                    <Avatar
                      alt=""
                      className="avatar"
                      src={avatar2}
                      style={{ margin: 'auto' }}
                    />
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="h1"
                      style={{ paddingTop: '10px' }}
                    >
                      Rxxxxxxxxxx Txxxx, Mpitandrina
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      FILOHA LEFITRA
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={3} style={{ padding: '10px' }}>
                <Card className="cardBirao">
                  <CardContent style={{ margin: 'auto', textAlign: 'center' }}>
                    <Avatar
                      alt=""
                      className="avatar"
                      src={avatar2}
                      style={{ margin: 'auto' }}
                    />
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="h1"
                      style={{ paddingTop: '10px' }}
                    >
                      Rxxxxxxxxxx Hxxxx
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      MPITANTSORATRY NY VOLA
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={3} style={{ padding: '10px' }}>
                <Card className="cardBirao">
                  <CardContent style={{ margin: 'auto', textAlign: 'center' }}>
                    <Avatar
                      alt=""
                      className="avatar"
                      src={avatar2}
                      style={{ margin: 'auto' }}
                    />
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="h1"
                      style={{ paddingTop: '10px' }}
                    >
                      Rxxxxxxxxxxxx Axxxxxxx
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      MPITAHIRY VOLA
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={3} style={{ padding: '10px' }}>
                <Card className="cardBirao">
                  <CardContent style={{ margin: 'auto', textAlign: 'center' }}>
                    <Avatar
                      alt=""
                      className="avatar"
                      src={avatar2}
                      style={{ margin: 'auto' }}
                    />
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="h1"
                      style={{ paddingTop: '10px' }}
                    >
                      Rxxxxxxxxxxxx Txxxxxxx
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      MPANOLOTSAINA
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={3} style={{ padding: '10px' }}>
                <Card className="cardBirao">
                  <CardContent style={{ margin: 'auto', textAlign: 'center' }}>
                    <Avatar
                      alt=""
                      className="avatar"
                      src={avatar2}
                      style={{ margin: 'auto' }}
                    />
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="h1"
                      style={{ paddingTop: '10px' }}
                    >
                      Rxxxxxxxxxxxx Ixxxxxxx
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p">
                      MPANDRAHARAHA
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <h1>PRESIDENT SYNODAL NIFANDIMBY</h1>
            <Grid container>
              <Grid
                item
                xs={6}
                style={{ textAlign: 'center', padding: '20px' }}
              >
                <Card className="root" style={{ maxWidth: 'none' }}>
                  <CardActionArea>
                    <CardMedia
                      className="media"
                      image={avatar1}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h1">
                        RASOLONIRINA Robert Mivady
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        Desambra 2017
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ textAlign: 'center', padding: '20px' }}
              >
                <Card className="root" style={{ maxWidth: 'none' }}>
                  <CardActionArea>
                    <CardMedia
                      className="media"
                      image={avatar1}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h1">
                        RASOLONIRINA Robert Mivady
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        Desambra 2017
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ textAlign: 'center', padding: '20px' }}
              >
                <Card className="root" style={{ maxWidth: 'none' }}>
                  <CardActionArea>
                    <CardMedia
                      className="media"
                      image={avatar1}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h1">
                        RASOLONIRINA Robert Mivady
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        Desambra 2017
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <h1>MPITANDRINA</h1>
            <MUIDataTable
              title={'Lisitry ny Mpitandrina 2021'}
              data={dataMpit}
              columns={columnsMpit}
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
          </Grid>
          <Grid className={classes.bRed} xs={3}>
            <div>xs</div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default About
