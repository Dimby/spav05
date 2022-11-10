import React, { useState } from 'react'
import { Box, Button, IconButton, Tooltip } from '@mui/material'
import { HiX, HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'

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
                <Button color='menuButton' variant='contained'>Fandraisana</Button>
            </Link>
            <Link to='/aboutUs'>
            <Button color='menuButton' variant='contained'>Mombamomba</Button>
            </Link>
            <Link to='/areas'>
            <Button color='menuButton' variant='contained'>Faritra</Button>
            </Link>
            <Link to='/albums'>
            <Button color='menuButton' variant='contained'>Sary</Button>
            </Link>
            <Link to='/contactUs'>
            <Button color='menuButton' variant='contained'>Fifandraisana</Button>
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
