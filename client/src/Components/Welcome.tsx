import React from 'react'
import { Box } from '@mui/material'
import Title from './Title'

const styles = {
    container: {
        '.MuiTypography-root': {
            lineHeight: '44px',
            color: '#FFFFFF',
            '&.en': {
                opacity: '0.6',
                fontSize: '49px'
            },
            '&.fr': {
                opacity: '0.3',
                fontSize: '47px',
                lineHeight: '36px'
            }
        }
    }
}

const Welcome = () => {
    return (
        <Box sx={styles.container}>
            <Title className='mg' type="h2">Tonga soa</Title>
            <Title className='en' type="h2">Welcome</Title>
            <Title className='fr' type="h2" color="default">Bienvenue</Title>
        </Box>
    )
}

export default Welcome
