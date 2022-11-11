import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Button from '../Components/Button'
import Verse from '../Components/Verse'
import Welcome from '../Components/Welcome'

interface HomeProps {
    onClickHome: () => void
}

const styles = {
    container: {
        '.left-boxHome': {
            display: 'flex',
            flexDirection: 'column-reverse'
        },
        color: "#FFFFFF"
    },
    welcomeSubtitle: {
        margin: '22px 0',
        lineHeight: '20px',
        color: '#FFFFFF'
    },
    leftContent: {
        alignItems: 'end',
        padding: '60px 75px 60px 100px',
    },
    buttonCTA: {
        mt: 3,
        'a': {
            display: 'inline !important',
            mr: 2
        }
    }
}

const Home: FC<HomeProps> = ({ onClickHome }) => {
    return (
        <Box className='mainContent' sx={styles.container}>
            <Box className='left-boxHome'>
                <Box sx={styles.leftContent}>
                    <Welcome />
                    <Typography variant="subtitle1" sx={styles.welcomeSubtitle}>
                        Eto amin'ny tranonkalam-pifandraisan'ny <br />
                        Synodamparitany Ambatondrazaka Vaovao 05
                    </Typography>
                    <Verse color='default' author='Vakio : And. 01 : 21'>Anorenana ny maha kristiana ny finoana.</Verse>
                    <Box sx={styles.buttonCTA}>
                        <Button link='/aboutUs' color='secondary' title='Mombamomba' onClick={onClickHome} />
                        <Button link='/contactUs' color='default' title='Te hifandray ?' onClick={onClickHome} />
                    </Box>
                </Box>
            </Box>
            <Box className='right-boxHome'>A</Box>
        </Box>
    )
}

export default Home
