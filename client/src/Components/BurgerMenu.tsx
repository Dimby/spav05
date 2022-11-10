import React, { useState } from 'react'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { HiX, HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ButtonMenu from './ButtonMenu'

const styles = {
    container: {
        padding: '60px 75px 0 100px',
        '.MuiTooltip-popper .MuiTooltip-tooltip': {
            marginTop: 0
        },
        height: 'calc(100vh - 60px)'
    },
    buttonBurger: {
        color: '#FFFFFF',
        padding: '10px',
        marginTop: '15px',
        'svg': {
            fontSize: '35px'
        },
        ':hover': {
            backgroundColor: 'rgb(255 255 255 / 18%)'
        }
    },
    menuButton: {
        'a': {
            display: 'block',
            textDecoration: 'none'
        },
        'button': {
            display: 'inherit',
            marginBottom: '10px'
        }
    }
}

const BurgerMenu = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [openTooltip, setOpenTooltip] = useState(false)

    const tooltipMenu = (
        <Box sx={styles.menuButton}>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu title='Fandraisana' link='/' />
            </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu title='Mombamomba' link='/aboutUs' />
            </motion.div>
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu title='Faritra' link='/areas' />
            </motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu title='Sary' link='/albums' />
            </motion.div>
            <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu title='Fifandraisana' link='/contactUs' />
            </motion.div>
        </Box>
    )

    return (
        <Box sx={{ ...styles.container, backgroundColor: collapsed ? '#000000b3' : 'inherit' }}>
            <Tooltip
                PopperProps={{ disablePortal: true, }}
                title={tooltipMenu}
                placement='right-start'
                open={openTooltip}
                onClose={() => setOpenTooltip(false)}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                className='tootltipMenu'
            >
                <IconButton sx={styles.buttonBurger} aria-label="delete" onClick={() => {
                    collapsed ? setOpenTooltip(false) : setOpenTooltip(true)
                    setCollapsed(!collapsed)
                }}>
                    {collapsed ? <HiX /> : <HiMenu />}
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default BurgerMenu
