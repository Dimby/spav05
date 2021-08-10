import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  CardActionArea,
  CardMedia,
} from '@material-ui/core'
import React, { FC } from 'react'
import useStyles from './style'

interface PsProps {
  urlPicture: string
  name: string
  firstname: string
  dateStart: string
  dateEnd: string
  status: string
}

const Ps: FC<PsProps> = ({
  urlPicture,
  name,
  firstname,
  dateStart,
  dateEnd,
  status,
}) => {
  const classes = useStyles()
  return (
    <>
      <Grid
        item
        xs={12} md={12} lg={6} xl={6}
        style={{ textAlign: 'center', padding: '20px' }}
        key={urlPicture}
      >
        <Card className={classes.root} style={{ maxWidth: 'none' }}>
          <CardActionArea>
            <CardMedia
              className="media"
              image={urlPicture}
              title="Contemplative Reptile"
              style={{ backgroundPosition: 'top' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h1">
                {name.toUpperCase()} {firstname} {status}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {dateStart} - {dateEnd}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  )
}

export default Ps
