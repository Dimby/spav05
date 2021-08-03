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
          <Grid item xl={12} lg={12} md={12} xs={12} style={{ padding: '0 50px' }}>
            <div
              style={{
                margin: 'auto',
                maxWidth: '550px',
                textAlign: 'center',
              }}
            >
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <p style={{ textAlign: "justify" }}>{description}</p>
              <p>
                <img
                  src={url}
                  alt=""
                  style={{ width: '100%'}}
                />
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default VaovaoIsampitandremana
