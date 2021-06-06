import { Grid } from '@material-ui/core'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './style'

interface ItemJereoProps {
  title: string
  description: string
  to?: any // optionnel ?
}

const ItemJereo: FC<ItemJereoProps> = ({ title, description, to }) => {
  return (
    <div className="item">
      <div className="content" style={{ borderLeft: '5px solid #006AB0' }}>
        <Grid container>
          <Grid item>
            <Link
              to={to}
              style={{
                color: 'rgb(0, 77, 128)',
                textDecoration: 'none',
              }}
            >
              <div>
                <h4 style={{ margin: 0 }}>{title}</h4>
              </div>
              <div style={{ fontSize: '12px' }}>{description}</div>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ItemJereo
