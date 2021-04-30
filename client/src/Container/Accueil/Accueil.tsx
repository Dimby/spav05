import { Grid, IconButton } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useStyles from "./style";
import Slider from 'react-slick'

const Accueil: FC = () => {
  const classes = useStyles()
  const height = '612px'
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
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
          <Link to="/">MOMBA NY SPAV5 </Link>
        </div>
      </div>
      <div className={classes.boxTwo}>
        <div>
          TONGA SOA ETO AMIN'NY TRANONKALAM-PIFANDRAISAN'NY <br />{' '}
          SYNODAMPARITANY AMBATONDRAZAKA VAOVAO
        </div>
        <p style={{ fontSize: '18px' }}>
          "Mifalia mandrakariva ao amin'ny Tompo, hoy izaho indray, mifalia."
          Fil. 4:4
        </p>
      </div>
      <div className={classes.boxThree}>
            <div className={classes.boxThree1}>
                <div className="content">
                    <div style={{backgroundColor: "#F4C247", paddingLeft: "50px"}}>
                        <div style={{backgroundColor: "#fff", width: "50%", textAlign: "center", fontSize: "30px"}}>MOFON'AINA</div>
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
                            </div>
                        </div>
                        <div className="item">
                            <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
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
                            </div>
                        </div>
                        <div className="item">
                            <div className="content" style={{ borderLeft: "5px solid #006AB0",}}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
              </div>
            </div>
          </div>
          <div className="content">
            <h1>VAOVAO FARANY</h1>
            <Slider {...settings} className="slider">
              <div className="itemSlick">
                <div className="context">
                  <h3>ALAHADY FAHA 12 APRILY 2021</h3>
                  <div>Fivoriamben'ny synodamparitany any amin'ny Fitandremana Antokazo</div>
                </div>
              </div>
              <div className="itemSlick">
                <div className="context">
                  <h3>ALAKAMISY 13 - Zoma 14 MAI 2021</h3>
                  <div>Fambolen-kazo atao eny amin'ny tanin'ny Synodamparitany Manakambahiny, amin'ny 09 ora ny fiaingana eo amin'ny Fiangonana Ambohimasina.</div>
                </div>
              </div>
              <div className="itemSlick">
                <div className="context">
                  <h3>ALATSINAINY 23 - ZOMA 28 NOVAMBRA 2021</h3>
                  <div>Lasym-paritra farany ataon'ny SAMPATI amin'ity taona 2021 ity, hotanterahina eny amin'ny Fiangonana FJKM Ambohimiangaly amin'ny 10 ora. Mitondra vary 4 kapoaka avy sy kitay fandrehitra.</div>
                </div>
              </div>
              <div className="itemSlick">
                <div className="context">
                  A
                </div>
              </div>
              <div className="itemSlick">
                <div className="context">
                  A
                </div>
              </div>
              <div className="itemSlick">
                <div className="context">
                  A
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accueil
