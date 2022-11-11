import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Button from '../Components/Button'
import Verse from '../Components/Verse'
import Welcome from '../Components/Welcome'
import BgCircle from '../Assets/bgCircle.png'
import Title from '../Components/Title'

interface HomeProps {
    onClickHome: () => void
}

const styles = {
    container: {
        '.left-boxHome': {
            color: "#FFFFFF",
            display: 'flex',
            flexDirection: 'column-reverse'
        },
        '.right-boxHome': {
            '.boxCercle': {
                position: 'relative'
            }
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
    },
    rightContent: {
        position: 'absolute',
        top: 0
    },
    buttonCTA: {
        mt: 3,
        'a': {
            display: 'inline !important',
            mr: 2
        }
    },
    bgCircle: {
        backgroundImage: `url('${BgCircle}')`,
        backgroundPosition: 'right',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '500px'
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
            <Box className='right-boxHome'>
                <motion.div
                    className='boxCercle'
                    initial={{ x: 500, y: -500, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Box sx={styles.bgCircle}></Box>
                </motion.div>
                    <Box sx={styles.rightContent}>
                    <Title type='h1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt, recusandae aperiam facere dignissimos maiores ut rem autem iure esse quidem repellat debitis sit quas! Rerum magni cumque neque suscipit.</Title>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
