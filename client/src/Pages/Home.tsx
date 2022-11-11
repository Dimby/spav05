import { Box, Typography } from '@mui/material'
import React from 'react'
import Verse from '../Components/Verse'
import Welcome from '../Components/Welcome'

const styles = {
    container: {
        '.left-boxHome': {
            display: 'flex',
            flexDirection: 'column-reverse'
        }
    },
    welcomeSubtitle: {
        margin: '22px 0',
        lineHeight: '20px',
        color: '#FFFFFF'
    },
    leftContent: {
        alignItems: 'end',
        padding: '60px 75px 60px 100px',
    }
}

const Home = () => {
    return (
        <Box className='mainContent' sx={styles.container}>
            <Box className='left-boxHome'>
                <Box sx={styles.leftContent}>
                    <Welcome />
                    <Typography variant="subtitle1" sx={styles.welcomeSubtitle}>
                        Eto amin'ny tranonkalam-pifandraisan'ny <br />
                        Synodamparitany Ambatondrazaka Vaovao 05
                    </Typography>
                    <Verse color='default'>Anorenana ny maha kristiana ny finoana.</Verse>
                </Box>
            </Box>
            <Box className='right-boxHome'>A</Box>
        </Box>
    )
}

export default Home
