import React, { FC } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import logo from '../../Images/Logo25e.png';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

interface DialogJobilyProps {
  title: string
  description: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleClose: () => void
}

// Table for Antontan'isa
function createPerson(fifaninanana: string, name: string, firstname: string, fonction: string, church: string) {
    return { fifaninanana, name, firstname, fonction, church }
  }
  const rows = [
    createPerson('Logo', 'ANDRIANOMENJANAHARY', 'Nehemia', 'Diakona', 'FJKM Ambohimasina Fivavahana'),
    createPerson('Hira Faneva', 'RANDRIANARINASY', 'Maurille', 'Diakona', 'FJKM Ambohimiangaly Zoara'),
  ]

const DialogJobily: FC<DialogJobilyProps> = ({
  title,
  description,
  open,
  handleClose,
}) => {
  return (
    <div>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"md"}
        style={{ textAlign: "center" }}
        scroll={'body'}
      >
        <DialogTitle id="alert-dialog-title">JOBILY FAHA 25 TAONA ( 1996 - 2021 )</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              <h4>Logo</h4>
          <img src={logo} width="" alt="" style={{margin: "0px 10px"}}/>
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h4>Hira Faneva</h4>
            <p>
                1. Ny hira fiderana sy ny haja <br />
                No entinay misaotra Anao <br />
                Ny fonay mino sady mankalaza <br />
                Dia taratry ny fitiavanao <br />
            </p>
            <p>

                2. Ny Tenin’Andriamanitra mahery <br />
                Sakafon’ny fanahinay <br />
                Ny fiombonana no mampahery <br />
                Sy hanefana ireo adidinay <br />
            </p>
            <p>
                3. Tahio ho mendrika sy mahatoky <br />
                Izay mino Anao Jesoa <br />
                Ho voasoratra ao anaty boky <br />
                Handova lanitra sy lapasoa <br />
            </p>
            <p>
                Fiv. Ho fianarana amin’ny asa tsara <br />
                Sy mihavao ny anjara fanompoana <br />
                Ny fitoriana Filazantsara <br />
                No vina sy fampandrosoana <br />
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogContent>
            <TableContainer>
                <Table aria-label="simple table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Fifaninanana</TableCell>
                      <TableCell>Anarana</TableCell>
                      <TableCell>Asa</TableCell>
                      <TableCell>Fiangonana niaviana</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell>{row.fifaninanana}</TableCell>
                        <TableCell component="th" scope="row">
                          {row.name} {row.firstname}
                        </TableCell>
                        <TableCell>{row.fonction}</TableCell>
                        <TableCell>{row.church}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogJobily;