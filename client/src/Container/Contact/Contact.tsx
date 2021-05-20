import { Box, Button, Container, Grid, TextField } from '@material-ui/core';
import { TextFieldsRounded } from '@material-ui/icons';
import React, { FC } from 'react';
import useStyles from './style'
import SendIcon from '@material-ui/icons/Send'
import Slider from 'react-slick'
import image1 from '../../Images/Faritra 1.png';
import { verset } from '../../Lib/verset'

const Contact : FC = () => {
  const classes = useStyles()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  const versetRandom = verset()
    return <div>
      <div className={classes.boxOne}>
      <div>
          " {versetRandom.fehezanteny.toUpperCase()} "
        </div>
        <p style={{ fontSize: '18px' }}>- {versetRandom.toko}</p>
      </div>
      <Box mx="10rem">
       <Grid container className={classes.boxTwo}>
          <Grid item xs={5} style={{padding: "30px"}}>
            <div style={{marginBottom: "40px"}}>
            <Slider {...settings}>
              <div>
                <img src={image1} alt="" style={{height: "400px"}} />
              </div>
              <div>
                <img src={image1} alt="" style={{height: "400px"}} />
              </div>
              <div>
                <img src={image1} alt="" style={{height: "400px"}} />
              </div>
              <div>
                <img src={image1} alt="" style={{height: "400px"}} />
              </div>
            </Slider>
            </div>
            <div style={{borderTop: "1px solid rgb(0 0 0 / 10%)", padding: "15px", backgroundColor: "#F5F5F5"}}>
              <div className="chipsItem">
                PRESIDENT SYNODAL : <br /> 034 xx xxx xx / 033 xx xxx xx <br /> robertrasolonirina@gmail.com
              </div>
              <div className="chipsItem">
                MPANDRAHARAHA : <br /> 034 xx xxx xx / 033 xx xxx xx <br /> mpandraharaha@gmail.com
              </div>
              <div className="chipsItem">
                Eto hafa koa
              </div>
            </div>
          </Grid>
          <Grid item xs={6} style={{padding: "30px"}}>
            <h1>Raha : </h1>
            <h3>
              <ul style={{margin: "0"}}>
                <li>Mila fanazavana fanampiny na misy fanamarihana manokana tiana ampitahana,</li>
                <li>Haka 'fichier word' (tetikandro.docx, vinasyfanamby.docx, fitsipikaanatiny.docx, ...)</li>
              </ul>
            </h3>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dia manorata aminay amin'ny alalan'ny adiresy mailaka eo ambany na afaka miantso
              mivantana amin'ny laharana etsy ankavia. Azonao atao koa ny manatona eny amin'ny Biraon'ny Mpandraharaha
              eny amin'ny Station FJKM Ambohimiangaly Ambatondrazaka 503.
            </div>
            <p><u>Fanamarihana</u> : Soraty mazava eo amin'ny Fanamarihana ny antony hilanao ny 'fichier word'.</p>
            <br />
            <div>
              <form className="root" noValidate autoComplete="off">
                <TextField
                  id="outlined-required"
                  label="Anarana"
                  variant="outlined"
                />
                <TextField
                  id="outlined-required"
                  label="Fanampiny"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Synodamparitany"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Fitandremana"
                  variant="outlined"
                />
                <TextField
                  id="outlined-number"
                  label="Laharana"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Adiresy Mailaka"
                  variant="outlined"
                />
                <TextField
                  disabled
                  id="filled-disabled"
                  label="Adiresy handefasana"
                  defaultValue="spav5fjkm@gmail.com"
                  variant="outlined"
                  style={{width: "74ch"}}
                />
                <TextField
                  required
                  multiline
                  rows={4}
                  id="outlined-required"
                  label="Soraty eto ny fanamarihana"
                  variant="outlined"
                  style={{width: "74ch"}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="button"
                    endIcon={<SendIcon />}
                  >
                  Alefa
                </Button>
                <div>* Tsy maintsy fenoina. </div>
              </form>
            </div>
          </Grid>
       </Grid>
      </Box>
     </div>
        
}

export default Contact;