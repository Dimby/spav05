import React, { FC } from 'react'
import useStyles from './style'
import { Grid, Link } from '@material-ui/core'

const Country: FC = () => {
  const classes = useStyles()
  return (
    <div style={{ marginTop: '50px' }}>
      <div className={classes.boxOne}>
        <Grid container spacing={0}>
            <Grid xs={2}>
              <div>
                <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>FARITRA</h2>
                <div className="item" style={{ marginLeft: '20px' }}>
                  <div className="menuItem">
                    <Link>Ambatondrazaka</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Andilamena</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Andilanatoby</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Andreba</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Didy</Link>
                  </div>
                  <div className="menuItem">
                    <Link>Imerimandroso</Link>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid style={{ padding: '20px' }} xs>
              <h1>AMBATONDRAZAKA</h1>
              <Grid container>
                <Grid xs>
                  A
                </Grid>
                <Grid xs>
                  B
                </Grid>
              </Grid>
              <h1>ANDILAMENA</h1>
              <h1>ANDILANATOBY</h1>
              <h1>ANDREBA</h1>
              <h1>DIDY</h1>
              <h1>IMERIMANDROSO</h1>
            </Grid>
            <Grid xs={3}>
              <div>xs</div>
            </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Country
