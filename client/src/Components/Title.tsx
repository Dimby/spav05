import { Typography } from '@mui/material'
import React, { FC } from 'react'

interface TitleProps {
    color?: 'primary' | 'secondary' | 'default' | string
    type: 'h1' | 'h2' | 'h3' | 'h4'
    className?: string
    children: React.ReactNode
}

const Title: FC<TitleProps> = ({ type, color = 'primary', className, children }) => {
    return (
        <Typography className={className} variant={type} color={color}>{children}</Typography>
    )
}

export default Title