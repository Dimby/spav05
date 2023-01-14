import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import Title from './Title'

interface VerseProps {
    color?: 'primary' | 'secondary' | 'default' | string
    variant?: "h1" | "h2" | "h3" | "h4" | "subtitle1" | "h5" | "h6" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined
    author?: string
    children: React.ReactNode
}

const Verse: FC<VerseProps> = ({ color = 'primary', variant = 'h3', author, children }) => {
    return (
        <Box>
            <Title type={variant} color={color}>"{children}"</Title>
            <Typography variant='subtitle1'>{author}</Typography>
        </Box>
    )
}

export default Verse
