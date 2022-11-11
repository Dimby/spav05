import React from 'react'
import { Box, duration } from '@mui/material'
import { motion } from 'framer-motion'
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
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <Title className='mg' type="h2">Tonga soa</Title>
            </motion.div>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} >
            <Title className='en' type="h2">Welcome</Title>
            </motion.div >
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} >
            <Title className='fr' type="h2" color="default">Bienvenue</Title>
            </motion.div >
        </Box>
    )
}

export default Welcome
