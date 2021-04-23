import { Grid, IconButton, Modal } from '@material-ui/core';
import React, { FC } from 'react';
import useStyles from "./style";
import fond from '../../Images/fond-1.jpg';
import fg from '../../Images/pekin - Copie.jpg';
import ambatondrazakaFitiavana from '../../Images/ambatondrazakaFitiavana.jpeg';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';


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
            <Grid container spacing={0}>
                <Grid xs>
                    <div><h2 style={{marginLeft: "15px", color: "#F4C247"}}>SARY SY HORONANTSARY TAHIRY</h2></div>
                    <Grid container spacing={0}>
                        <Grid xs={4}>
                            <div className="responsive">
                                <div className="gallery">
                                    <img src={ambatondrazakaFitiavana} alt=""/>
                                    <Grid container className="desc">
                                        <Grid item>
                                            <div><h4 style={{margin: 0}}>TITRE DE LA PHOTO</h4></div>
                                            <div>Ambatondrazaka Fitiavana, 15 Fevrier</div>
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
                        <Grid xs={4}>
                            <div className="responsive">
                                <div className="gallery">
                                    <img src={fg} alt=""/>
                                    <Grid container className="desc">
                                        <Grid item>
                                            <div><h4 style={{margin: 0}}>TITRE DE LA PHOTO</h4></div>
                                            <div>Ambatondrazaka Fitiavana, 15 Fevrier</div>
                                        </Grid>
                                        <Grid xs style={{textAlign: "right"}}>
                                            <IconButton>
                                                <ZoomOutMapIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={4}>
                            <div className="responsive">
                                <div className="gallery">
                                    <img src={fond} alt=""/>
                                    <Grid container className="desc">
                                        <Grid item>
                                            <div><h4 style={{margin: 0}}>TITRE DE LA PHOTO</h4></div>
                                            <div>Ambatondrazaka Fitiavana, 15 Fevrier</div>
                                        </Grid>
                                        <Grid xs style={{textAlign: "right"}}>
                                            <IconButton>
                                                <ZoomOutMapIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid xs={3}>
                    <div>xs</div>
                </Grid>
            </Grid>
        </div>
     </div>
        
}

export default Gallery;