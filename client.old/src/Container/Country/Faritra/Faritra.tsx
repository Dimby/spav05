import { Grid } from '@material-ui/core'
import { FC } from 'react'
import useStyles from './style'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

interface FaritraProFaritra {
  name: string
  id: string
  rows: {
    id: string
    idFaritra: string
    fit: string
  }[]
}

const Faritra: FC<FaritraProFaritra> = ({ name, id, rows }) => {
  const classes = useStyles()
  return (
    <>
      <h1 id={id}>{name}</h1>
      <Grid container>
        <Grid item xs={12}>
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
      </Grid>
    </>
  )
}

export default Faritra
