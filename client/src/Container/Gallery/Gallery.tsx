import { Grid, IconButton, Modal, ownerDocument, TextField } from '@material-ui/core';
import React, { FC } from 'react';
import useStyles from "./style";
import fond from '../../Images/fond-1.jpg';
import fg from '../../Images/pekin - Copie.jpg';
import ambatondrazakaFitiavana from '../../Images/ambatondrazakaFitiavana.jpeg';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import ChevronRight from '@material-ui/icons/ChevronRight';

import sary1 from '../../Images/Gallery/Gallery (1).png'
import sary2 from '../../Images/Gallery/Gallery (2).png'
import sary3 from '../../Images/Gallery/Gallery (3).png'
import sary4 from '../../Images/Gallery/Gallery (4).png'
import sary5 from '../../Images/Gallery/Gallery (5).png'

function createDataGallery(link: string, title: string, description: string, date: string) {
    return {link, title, description, date}
}
const dataGallery = [
    createDataGallery(sary1, "Ambatondrazaka Fitiavana", "Fetin'ny taranaka", "Fevrier 2020"),
    createDataGallery(sary2, "Ambohimiangaly Zoara", "Alahadin'ny Sampati", "Fevrier 2020"),
    createDataGallery(sary3, "Ambatondrazaka Fitiavana", "Fivoriambe I", "Fevrier 2020"),
    createDataGallery(sary4, "Ambatondrazaka Fitiavana", "Alahadin'ny Mpitandrina", "Septembre 2020"),
    createDataGallery(sary5, "Ambatondrazaka Fitiavana", "Vokadehibe 1", "Fevrier 2020"),
]

const Gallery : FC = () => {
    const classes = useStyles()
    return <div>
        <div className={classes.boxOne}>
            <div>
                "FA FAHASOAVANA NO NAMONJENA ANAREO AMIN'NY FINOANA <br/>ARY TSY AVY AMINAREO IZANY, FA FAMONJENA AVY AMIN'ANDRIAMANITRA"
            </div>
            <p style={{fontSize: "18px"}}>
                - Efesiana 2 : 8
            </p>
        </div>
        <div className={classes.boxTwo}>
            <Grid container spacing={0} className="listImage">
                <Grid xs style={{borderRight: "1px solid rgb(0 0 0 / 10%)"}}>
                    <Grid container style={{display: "flex"}}>
                        <Grid xs={7}>
                            <h2 style={{marginLeft: "15px", color: "#F4C247"}}>SARY SY HORONANTSARY TAHIRY</h2>
                        </Grid>
                        <Grid xs={4} style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                            <form noValidate autoComplete="off" style={{width: "80%"}}>
                                <TextField id="outlined-basic" fullWidth label="Recherche..." variant="outlined" size="small" />
                            </form>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        {dataGallery.map((row) => (
                            <Grid xs={4} style={{marginBottom: "20px"}} key={row.link}>
                                <div className="responsive">
                                    <div className="gallery">
                                        <img src={row.link} alt=""/>
                                        <Grid container className="desc">
                                            <Grid item>
                                                <div><h4 style={{margin: 0}}>{row.title.toUpperCase()}</h4></div>
                                                <div style={{maxWidth: "300px"}}>{row.description} - {row.date}</div>
                                            </Grid>
                                            <Grid xs style={{textAlign: "right"}}>
                                                <IconButton>
                                                    <ZoomOutMapIcon/>
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid xs={3} style={{paddingLeft: "20px"}} className="news">
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
                    </div>
                    <div className="news">
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
                    </div>
                    <div className="news">
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
                </Grid>
            </Grid>
        </div>
     </div>
        
}

export default Gallery;