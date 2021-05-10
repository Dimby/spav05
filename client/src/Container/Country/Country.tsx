import React, { FC } from 'react'
import useStyles from './style'
import { Grid, Link } from '@material-ui/core'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import image1 from '../../Images/Faritra 1.png';
import image2 from '../../Images/Faritra 3.png';
import image3 from '../../Images/Faritra 4.png';
import image4 from '../../Images/Faritra 5.png';
import image5 from '../../Images/Faritra 2 - carte.png';

function createData(id: string, idFaritra: string, fit: string) {
  return { id, idFaritra , fit}
}
// Data for Faritra Ambatondrazaka
const tileDataAmbato = [
  {img: image1, title: 'Image 1', author: 'Author 1', cols: 1},
  {img: image2, title: 'Image 2', author: 'Author 2', cols: 2},
  {img: image3, title: 'Image 1', author: 'Author 1', cols: 2},
  {img: image4, title: 'Image 1', author: 'Author 1', cols: 1},
  {img: image5, title: 'Image 1', author: 'Author 1', cols: 1},
]
const rowsAmbato = [
  createData('001-A', '01', 'AMBALABAKO ZIONA'),
  createData('002-A', '02', 'AMBALAVATO EBENEZERA'),
  createData('003-A', '03', 'AMBANDRIKA  FILADELFIA'),
  createData('004-A', '04', 'AMBARARATA'),
  createData('005-A', '05', 'AMBATONDRAZAKA  FITIAVANA'),
  createData('006-A', '06', 'AMBOHIBOATAVO HERMONA'),
]
// End

// Data for Faritra Andilamena
const tileDataAndilamena = [
  {img: image1, title: 'Image 1', author: 'Author 1', cols: 2},
  {img: image2, title: 'Image 2', author: 'Author 2', cols: 1},
  {img: image3, title: 'Image 1', author: 'Author 1', cols: 1},
  {img: image4, title: 'Image 1', author: 'Author 1', cols: 2},
  {img: image5, title: 'Image 1', author: 'Author 1', cols: 1},
]

const rowsAndilamena = [
  createData('030-B', '01', 'AMBALABE (MIARINARIVO)'),
  createData('031-B', '02', 'AMBATOHARANANA'),
  createData('032-B', '03', 'AMBATOBE'),
  createData('033-B', '04', 'AMPONDRABE (MIARINARIVO)'),
  createData('034-B', '05', 'ANDILAMENA FANAVAOZANA'),
  createData('035-B', '06', 'ANDILAMENA FINOANA'),
]
// End



// const options = {
//   filter: false,
//   search: false,
//   download: false,
//   print: false,
//   pagination: false,
//   viewColumns: false,
// };

const Country: FC = () => {
  const classes = useStyles()
  return (
    <div style={{ marginTop: '50px' }}>
      <div className={classes.boxOne}>
        <Grid container spacing={0}>
            <Grid xs={2}>
              <div>
                <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>FARITRA</h2>
                <div className="item" style={{ marginLeft: '20px' }}>
                  <div className="menuItem">
                    <Link>Ambatondrazaka</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Andilamena</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Andilanatoby</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Andreba</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Didy</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Imerimandroso</Link>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid style={{ padding: '20px' }} xs>

              <h1>AMBATONDRAZAKA</h1>
              <Grid container>
                <Grid xs>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Lah. SP</TableCell>
                      <TableCell align="left">Lah. FARITRA</TableCell>
                      <TableCell align="left">Fitandremana</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsAmbato.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="left">{row.id}</TableCell>
                        <TableCell align="left">{row.idFaritra}</TableCell>
                        <TableCell align="left">{row.fit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </Grid>
                <Grid xs>
                  <div style={{padding: "10px"}}>
                    <div className={classes.root}>
                      <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileDataAmbato.map((tile) => (
                          <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                          </GridListTile>
                        ))}
                      </GridList>
                    </div>
                  </div>
                </Grid>
              </Grid>

              <h1>ANDILAMENA</h1>
              <Grid container>
                <Grid xs>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Lah. SP</TableCell>
                      <TableCell align="left">Lah. FARITRA</TableCell>
                      <TableCell align="left">Fitandremana</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsAndilamena.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="left">{row.id}</TableCell>
                        <TableCell align="left">{row.idFaritra}</TableCell>
                        <TableCell align="left">{row.fit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </Grid>
                <Grid xs>
                  <div style={{padding: "10px"}}>
                    <div className={classes.root}>
                      <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {tileDataAndilamena.map((tile) => (
                          <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                          </GridListTile>
                        ))}
                      </GridList>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <h1>ANDILANATOBY</h1>
              <h1>ANDREBA</h1>
              <h1>DIDY</h1>
              <h1>IMERIMANDROSO</h1>
            </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Country
