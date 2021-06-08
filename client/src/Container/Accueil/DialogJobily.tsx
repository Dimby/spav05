import React, { FC } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import logo from '../../Images/Logo25e.png';

interface DialogJobilyProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleClose: () => void
}

const DialogJobily: FC<DialogJobilyProps> = ({
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
          <hr style={{ width: "70%" }} />
              <h4>Logo</h4>
          <img src={logo} width="" alt="" style={{margin: "0px 10px"}}/>
          <p>
              Namorona : <br />
              <b>ANDRIANOMENJANAHARY Nehemia</b> <br />
              <b>Diakona</b> ao amin'ny <b>FJKM Ambohimasina Fivavahana</b>
          </p>
          <hr style={{ width: "70%" }} />
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h4>Hira Faneva 25 Taona</h4>
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
            <p>
                Namorona : <br />
                <b>RANDRIANARINASY Maurille</b> <br />
                <b>Diakona</b> ao amin'ny <b>FJKM Ambohimiangaly Zoara</b>
            </p>
          </DialogContentText>
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