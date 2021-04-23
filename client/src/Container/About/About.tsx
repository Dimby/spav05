import { Grid, Link } from '@material-ui/core'
import React, { FC } from 'react'
import useStyles from './style'

const About: FC = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.boxOne}>
        <div>
          "FA FAHASOAVANA NO NAMONJENA ANAREO AMIN'NY FINOANA <br />
          ARY TSY AVY AMINAREO IZANY, FA FAMONJENA AVY AMIN'ANDRIAMANITRA"
        </div>
        <p style={{ fontSize: '18px' }}>- Efesiana 2 : 8</p>
      </div>
        <div className={classes.boxTwo}>
            <Grid container spacing={0}>
                <Grid xs={2}>
                    <div>
                        <h2 style={{marginLeft: "15px", color: "#F4C247"}}>LOHATENY</h2>
                        <div className={classes.item} style={{marginLeft: "20px"}}>
                            <div className="menuItem">
                                <Link>Birao</Link>
                            </div>
                            <div className="menuItem">
                                <Link>PS nifandimby</Link>
                            </div>
                            <div className="menuItem">
                                <Link>Antontan'isa</Link>
                            </div>
                            <div className="menuItem">
                                <Link>Tantaran'ny SP</Link>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.bRed} xs>
                    <div>xs=6</div>
                </Grid>
                <Grid className={classes.bRed} xs={3}>
                    <div>xs</div>
                </Grid>
            </Grid>
        </div>
     </div>
        
}

export default About
