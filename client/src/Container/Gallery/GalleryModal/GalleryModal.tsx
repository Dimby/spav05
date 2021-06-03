import React, { FC } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import { Grid, IconButton, Button } from '@material-ui/core'

interface GalleryModalProps {
    url: string
    title: string
    description: string
    date: string
    open: boolean
    setOpen: (value: React.SetStateAction<boolean>) => void
    handleClose: () => void
}

const GalleryModal: FC<GalleryModalProps> = ({url, title, description, date, open, handleClose }) => {
    return <>
        <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"lg"}
              >
                <DialogContent>
                  <img src={url} alt="" style={{ width: "100%", }} />
                </DialogContent>
                <DialogActions>
                  <Grid container>
                    <Grid item xs>
                      <div>
                        <IconButton style={{backgroundColor: "#F5F5F5", margin: "0px 15px"}}>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton style={{backgroundColor: "#F5F5F5", margin: "0px 15px"}}>
                            <ChevronRight />
                        </IconButton>
                      </div>
                    </Grid>
                    <Grid item xs>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "15px", fontWeight: "bold" }}>{title}</div>
                        <div style={{ fontSize: "12px" }}>{date}</div>
                        <div>{description}</div>
                      </div>
                    </Grid>
                    <Grid item xs style={{ textAlign: "right" }}>
                      <div>
                        <Button onClick={handleClose} color="primary">
                          Ok
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </DialogActions>
              </Dialog>
    </>
}

export default GalleryModal;