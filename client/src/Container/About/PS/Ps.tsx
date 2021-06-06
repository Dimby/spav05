import { Grid, Card, CardContent, Avatar, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import useStyles from './style'

interface PsProps {
  urlAvatar: string
  name: string
  firstname: string
  dateDebut: string
  dateFin: string
}

const Ps: FC<PsProps> = ({
  urlAvatar,
  name,
  firstname,
  dateDebut,
  dateFin,
}) => {
  const classes = useStyles()
  return <></>
}

export default Ps
