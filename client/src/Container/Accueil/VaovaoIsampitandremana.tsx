import { Grid } from '@material-ui/core'
import React, { FC } from 'react'

interface VaovaoIsampitandremanaProps {
  title: string
  subtitle: string
  description: string
  url: string
}

const VaovaoIsampitandremana: FC<VaovaoIsampitandremanaProps> = ({
  title,
  subtitle,
  description,
  url,
}) => {
  return (
    <>
      <div style={{ marginBottom: '4rem' }}>
        <Grid container>
          <Grid item xs={6}>
            <div
              style={{
                margin: 'auto',
                maxWidth: '550px',
                textAlign: 'right',
              }}
            >
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <p>{description}</p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ textAlign: 'left', paddingInline: '30px' }}>
              <img
                src={url}
                alt=""
                style={{ height: '300px', textAlign: 'right' }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default VaovaoIsampitandremana
