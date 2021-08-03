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
          <Grid item xl={6} lg={6} md={12} xs={12} style={{ padding: '0 50px' }}>
            <div
              style={{
                margin: 'auto',
                maxWidth: '550px',
                textAlign: 'right',
              }}
            >
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <p style={{ textAlign: "justify" }}>{description}</p>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={12} xs={12}>
            <div style={{ textAlign: 'left'}}>
              <img
                src={url}
                alt=""
                style={{ width: '90%', textAlign: 'right' }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default VaovaoIsampitandremana
