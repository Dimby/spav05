import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Button from '../Components/Button'
import Verse from '../Components/Verse'
import Welcome from '../Components/Welcome'
import BgCircle from '../Assets/bgCircle.png'
import Title from '../Components/Title'
import QuoteMark from '../Assets/quote-right.png'
import { BsArrowRight, BsFillFileEarmarkZipFill } from 'react-icons/bs'

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
    rightContentTop: {
        position: 'absolute',
        top: 0,
        width: '-webkit-fill-available',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '70px 0 50px',
        '.box-heading': {
            width: 400,
            position: 'relative',
            '.MuiTypography-h5:first-child': {
                position: 'absolute',
                width: 300,
                right: '-30px',
                top: '-20px',
                lineHeight: '27px',
                color: '#534117'
            },
            '.quote-mark': {
                position: 'relative',
                right: 32
            },
            '.heading-lg': {
                letterSpacing: '2px',
                textShadow: '-4px -4px 0px #FFFFFF',
                lineHeight: '70px'
            },
            '.MuiTypography-h5:last-child': {
                mt: 2,
                fontWeight: '500',
                color: '#EEB529'
            }
        }
    },
    rightContentBottom: {
        position: 'absolute',
        bottom: '0',
        width: '-webkit-fill-available',
        padding: '60px 75px 60px 100px',
        '.slider-videos': {
            height: '250px',
        },
        '.buttonCTA-right': {
            textAlign: 'center'
        }
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
                <Box sx={styles.rightContentTop}>
                    <Box className='box-heading'>
                        <Title type='h5'>Synodamparitany Ambatondrazaka vaovao</Title>
                        <img className='quote-mark' src={QuoteMark} alt="" />
                        <Title type='h1' className="heading-lg">
                            Fianarana amin'ny asa tsara
                        </Title>
                        <Title type='h5'>Titosy 02 : 07a</Title>
                    </Box>
                </Box>
                <Box sx={styles.rightContentBottom}>
                    <Box className="slider-videos">
                        videos
                    </Box>
                    <Box sx={styles.buttonCTA} className='buttonCTA-right'>
                        <Button link='/aboutUs' color='primary' title='Misongadina' onClick={() => { }} icon={<BsArrowRight />} />
                        <Button link='/contactUs' color='primary' title='Mety ilainao' onClick={() => { }} variant='outlined' icon={<BsFillFileEarmarkZipFill />} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
