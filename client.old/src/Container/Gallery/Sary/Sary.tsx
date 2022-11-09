import { Grid } from '@material-ui/core'
import React, { FC } from 'react'
import useStyles from './style'

interface SaryProSary {
  url: string
  title: string
  description: string
  date: string
}

const Sary: FC<SaryProSary> = ({ url, title, description, date }) => {
  const classes = useStyles()
  return (
    <>
      <Grid xs={4} style={{ marginBottom: '20px' }} key={url}>
        <div className="responsive">
          <div className="gallery">
            <img src={url} alt="" />
            <Grid container className="desc">
              <Grid item>
                <div>
                  <h4 style={{ margin: 0 }}>{title.toUpperCase()}</h4>
                </div>
                <div>
                  {description} - {date}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </>
  )
}

export default Sary
