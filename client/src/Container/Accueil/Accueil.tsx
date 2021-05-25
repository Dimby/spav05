import { Button, Grid, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ChevronRight } from '@material-ui/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useStyles from "./style";
import Slider from 'react-slick'
import { verset } from '../../Lib/verset'
import image1 from '../../Images/Faritra 1.png';

function createDataMisongadina(id: number, title: string, desc: string) {
  return { id, title, desc }
}
const rowsMisongadin = [
  createDataMisongadina(1, "ALAHADY FAHA 12 APRILY 2021", "Fivoriamben'ny Synodamparitany any amin'ny fitandremana Antokazo"),
  createDataMisongadina(2, "ALAKAMISY 13 - Zoma 14 MAI 2021", "Fambolen-kazo atao eny amin'ny tanin'ny Synodamparitany Manakambahiny, amin'ny 09 ora ny fiaingana eo amin'ny Fiangonana Ambohimasina."),
  createDataMisongadina(3, "ALATSINAINY 23 - ZOMA 28 NOVAMBRA 2021", "Lasym-paritra farany ataon'ny SAMPATI amin'ity taona 2021 ity, hotanterahina eny amin'ny Fiangonana FJKM Ambohimiangaly amin'ny 10 ora. Mitondra vary 4 kapoaka avy sy kit..."),
  createDataMisongadina(4, "ALAHADY FAHA 12 APRILY 2021", "Fivoriamben'ny Synodamparitany any amin'ny fitandremana Antokazo"),
  createDataMisongadina(5, "ALAKAMISY 13 - Zoma 14 MAI 2021", "Fambolen-kazo atao eny amin'ny tanin'ny Synodamparitany Manakambahiny, amin'ny 09 ora ny fiaingana eo amin'ny Fiangonana Ambohimasina."),
  createDataMisongadina(6, "ALATSINAINY 23 - ZOMA 28 NOVAMBRA 2021", "Lasym-paritra farany ataon'ny SAMPATI amin'ity taona 2021 ity, hotanterahina eny amin'ny Fiangonana FJKM Ambohimiangaly amin'ny 10 ora. Mitondra vary 4 kapoaka avy sy kit..."),
]

const Accueil: FC = () => {
  const classes = useStyles()
  const height = '612px'
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 4000
  }
  
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  const versetRandom = verset()
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.boxOne} style={{ height: height, zIndex: 2 }}>
        <div className={classes.boxText}>
          <p>SYNODAMPARITANY AMBATONDRAZAKA VAOVAO</p>
          <h1 style={{ fontSize: '70px', margin: 0 }}>
            FIANARANA AMIN'NY <br />
            ASA TSARA.
          </h1>
          <h2>Tit. 2:7a</h2>
        </div>
        <div className={classes.boxButton}>
          <Link to="/about">MOMBA NY SPAV5 </Link>
        </div>
      </div>
      <div className={classes.boxTwo}>
        <div>
          TONGA SOA ETO AMIN'NY TRANONKALAM-PIFANDRAISAN'NY <br />
          SYNODAMPARITANY AMBATONDRAZAKA VAOVAO
        </div>
        <p style={{ fontSize: '18px' }}>
          " {versetRandom.fehezanteny} "
          - {versetRandom.toko}
        </p>
      </div>
      <div style={{color: "#006AB0", padding: "20px", textAlign: "center", fontSize: "21px"}}>
          PERIKOPA VOLANA MEY : <span style={{ fontWeight: "bold"}}>"MAMPIORINA NY MINO NY HERIN'NY FANAHY MASINA"</span>
      </div>
      <div className={classes.boxThree}>
        <Grid container>
          <Grid xs={3}>
            <div className={classes.boxThree1}>
                <div className="content">
                    <div style={{backgroundColor: "#F4C247"}}>
                        <div style={{backgroundColor: "#fff", width: "75%", textAlign: "center", fontSize: "30px", margin: "auto"}}>MOFON'AINA</div>
                    </div>
                    <div style={{padding: "30px", textAlign: "center"}}>Talata 02 Febroary 2021</div>
                    <div className="boxVerset" style={{textAlign: "center"}}>
                        <div className="verset">HEBREO 4 : 1 - 13</div>
                    </div>
                    <div style={{padding: "2rem 3rem", textAlign: "justify"}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Provident cupiditate aliquid dicta expedita, animi quo quis,
                        eum quam placeat facere veniam dolore quaerat nostrum?
                        Aut asperiores illo repellendus eligendi voluptatibus?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Provident cupiditate aliquid dicta expedita, animi quo quis,
                        eum quam placeat facere veniam dolore quaerat nostrum?
                        Aut asperiores illo repellendus eligendi voluptatibus?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Provident cupiditate aliquid dicta expedita, animi quo quis,
                        eum quam placeat facere veniam dolore quaerat nostrum?
                        Aut asperiores illo repellendus eligendi voluptatibus?
                    </div>
                </div>
                <br/><br/>
                <div className="news">
                    <div><h2 style={{marginLeft: "15px", color: "#F4C247"}}>JEREO KOA</h2></div>
                    <div>
                        <div className="item">
                            <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
                                <Grid container>
                                  <Grid item>
                                      <div><h4 style={{margin: 0}}>14 Juin 2021</h4></div>
                                      <div style={{width: "235px"}}>Fambolenkazo teny Manakambahiny </div>
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
                                      <div style={{width: "235px"}}>tetikandro2021.docx</div>
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
                                      <div style={{width: "235px"}}>fitsipikaanatiny.docx</div>
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
                                      <div style={{width: "235px"}}>vinasyfanamby.docx</div>
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
            </div>
        </Grid>
        <Grid xs={9}>
        <div className={classes.boxThree2}>
          <div className="content">
            <h1>HAFATRY NY PRESIDENT SYNODAL</h1>
            <div className="quote">
              <div className="quoteIcon">
                <svg
                  style={{ fill: '#004D80' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 18 18"
                >
                  <path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z" />
                </svg>
              </div>
              <div className="quoteContent">
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  reiciendis excepturi inventore quam rerum iusto itaque eaque
                  dignissimos ratione, doloribus quisquam voluptatem aperiam
                  eius minus vitae harum? Vero, in perspiciatis. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Amet reiciendis
                  excepturi inventore quam rerum iusto itaque eaque dignissimos
                  ratione, doloribus quisquam voluptatem aperiam eius minus
                  vitae harum? Vero, in perspiciatis. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Amet reiciendis excepturi
                  inventore quam rerum iusto itaque eaque dignissimos ratione,
                  doloribus quisquam voluptatem aperiam eius minus vitae harum?
                  Vero, in perspiciatis. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Amet reiciendis excepturi inventore quam
                  rerum iusto itaque eaque dignissimos ratione, doloribus
                  quisquam voluptatem aperiam eius minus vitae harum? Vero, in
                  perspiciatis. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Amet reiciendis excepturi inventore quam
                  rerum iusto itaque eaque dignissimos ratione, doloribus
                  quisquam voluptatem aperiam eius minus vitae harum? Vero, in
                  perspiciatis.
                </div>
                <div className="profil">---- Rasolonirina Robert, Mpitandrina, Président Synodal</div>
              </div>
            </div>
          </div>
          <div className="content">
            <h1>VAOVAO MISONGADINA</h1>
            <Slider {...settings} className="slider">
              {rowsMisongadin.map((row) => (
                <div className="itemSlick" onClick={handleClickOpen}>
                  <div className="context">
                    <div className="counter">{row.id}</div>
                    <h3>{row.title}</h3>
                    <div>{row.desc}</div>
                  </div>
                </div>
              ))}
            </Slider>
            <div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div className="content">
            <h1>VAOVAO ISAM-PITANDREMANA</h1>
            <Slider {...settings2}>
                <div style={{marginBottom: "4rem"}}>
                  <Grid container>
                    <Grid item xs={6}>
                      <div style={{margin: "auto", maxWidth: "550px", textAlign: "right"}}>
                        <h2>ALAHADY FAHA 12 Aprily 2021</h2>
                        <h3>AMBOHIMASINA FIVAVAHANA</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt non quas impedit iure, consequuntur 
                          magni at officiis, aut laborum explicabo tempora. Repudiandae corrupti blanditiis earum deserunt magnam neque porro.
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi suscipit eligendi incidunt nulla, aspernatur cupiditate
                          odit alias laboriosam rem eos maiores aliquid eius dolorem facere? Repellat dolore illo eum.</p>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div style={{textAlign: "left", paddingInline: "30px"}}>
                        <img src={image1} alt="" style={{height: "300px", textAlign: "right"}} />
                      </div>
                    </Grid>
                  </Grid>
                </div> 
                <div style={{marginBottom: "4rem"}}>
                  <Grid container>
                    <Grid item xs={6}>
                      <div style={{margin: "auto", maxWidth: "550px", textAlign: "right"}}>
                        <h2>ALAHADY FAHA 12 Aprily 2021</h2>
                        <h3>AMBOHIMASINA FIVAVAHANA</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt non quas impedit iure, consequuntur 
                          magni at officiis, aut laborum explicabo tempora. Repudiandae corrupti blanditiis earum deserunt magnam neque porro.
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi suscipit eligendi incidunt nulla, aspernatur cupiditate
                          odit alias laboriosam rem eos maiores aliquid eius dolorem facere? Repellat dolore illo eum.</p>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div style={{textAlign: "left", paddingInline: "30px"}}>
                        <img src={image1} alt="" style={{height: "300px", textAlign: "right"}} />
                      </div>
                    </Grid>
                  </Grid>
                </div> 
                <div style={{marginBottom: "4rem"}}>
                  <Grid container>
                    <Grid item xs={6}>
                      <div style={{margin: "auto", maxWidth: "550px", textAlign: "right"}}>
                        <h2>ALAHADY FAHA 12 Aprily 2021</h2>
                        <h3>AMBOHIMASINA FIVAVAHANA</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt non quas impedit iure, consequuntur 
                          magni at officiis, aut laborum explicabo tempora. Repudiandae corrupti blanditiis earum deserunt magnam neque porro.
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi suscipit eligendi incidunt nulla, aspernatur cupiditate
                          odit alias laboriosam rem eos maiores aliquid eius dolorem facere? Repellat dolore illo eum.</p>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div style={{textAlign: "left", paddingInline: "30px"}}>
                        <img src={image1} alt="" style={{height: "300px", textAlign: "right"}} />
                      </div>
                    </Grid>
                  </Grid>
                </div> 
            </Slider>
          </div>
        </div>
        </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Accueil
