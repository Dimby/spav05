import { Grid, GridList, GridListTile } from '@material-ui/core'
import React, { FC } from 'react'
import useStyles from './style'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

interface FaritraProFaritra {
  name: string
  sokajy: string
  rows: {
    id: string
    idFaritra: string
    fit: string
  }[]
  tileData: {
    img: string
    title: string
    author: string
    cols: number
  }[]
}

const Faritra: FC<FaritraProFaritra> = ({ name, sokajy, rows, tileData }) => {
  const classes = useStyles()
  return (
    <>
      <h1>{name}</h1>
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
              {rows.map((row) => (
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
          <div style={{ padding: '10px' }}>
            <div className={classes.root}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Faritra
