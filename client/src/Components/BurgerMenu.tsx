import React, { useState } from 'react'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { HiX, HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
            <Link to='/'>
                <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                    <Button color='menuButton' variant='contained'>Fandraisana</Button>
                </motion.div>
            </Link>
            <Link to='/aboutUs'>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
            <Button color='menuButton' variant='contained'>Mombamomba</Button>
                </motion.div>
            </Link>
            <Link to='/areas'>
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
            <Button color='menuButton' variant='contained'>Faritra</Button>
                </motion.div>
            </Link>
            <Link to='/albums'>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
            <Button color='menuButton' variant='contained'>Sary</Button>
                </motion.div>
            </Link>
            <Link to='/contactUs'>
                <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
            <Button color='menuButton' variant='contained'>Fifandraisana</Button>
                </motion.div>
            </Link>
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
