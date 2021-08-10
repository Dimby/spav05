import { Grid, Card, CardContent, Avatar, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import useStyles from './style'

interface BiraoProps {
  urlAvatar: string
  name: string
  firstname: string
  asa: string
  toerana: string
  fonction: string
}

const Birao: FC<BiraoProps> = ({
  urlAvatar,
  name,
  firstname,
  asa,
  fonction,
  toerana,
}) => {
  const classes = useStyles()
  return (
    <Grid xs={12} xl={3} lg={3} md={4} style={{ padding: '10px' }}>
      <Card className={classes.cardBirao}>
        <CardContent style={{ margin: 'auto', textAlign: 'center' }}>
          <Avatar
            alt=""
            className="avatar"
            src={urlAvatar}
            style={{ margin: 'auto' }}
          />
          <Typography
            gutterBottom
            variant="body2"
            component="h1"
            style={{ paddingTop: '10px' }}
          >
            {name} {firstname} <br /> {asa} <br />
            {toerana}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {fonction}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Birao
