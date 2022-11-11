import React, { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BrowserRouter } from "react-router-dom";
import Bg01 from '../Assets/bg-01.jpg';
import ButtonMenu from "../Components/Button";
import Routes from "../Routes/Routes";

const styles = {
    container: {
        height: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        '> .MuiBox-root': {
            width: '100%'
        },
        '.first-box': {
            backgroundImage: `url('${Bg01}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '.box-blur': {
                backgroundColor: '#00000054',
                height: '100vh',
            }
        },
        '.second-box': {
            '.mainContent': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 99,
                display: 'flex',
                justifyContent: 'space-between',
                overflow: 'hidden',
                '> .MuiBox-root': {
                    width: '100%',
                    height: '100vh'
                }
            }
        },
        'a.link-button': {
            display: 'block',
            textDecoration: 'none'
        },
    },
    containerBurger: {
        padding: '60px 75px 60px 100px',
        '.MuiTooltip-popper .MuiTooltip-tooltip': {
            marginTop: 0
        },
        zIndex: 100,
        position: 'relative',
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
        'button': {
            display: 'inherit',
            marginBottom: '10px'
        }
    }
}

const Accueil = () => {
    const [widthBox, setWidthBox] = useState('100%')
    const [collapsed, setCollapsed] = useState(false)
    const [openTooltip, setOpenTooltip] = useState(false)

    const tooltipMenu = (
        <Box sx={styles.menuButton}>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu color="menuButton" title='Fandraisana' link='/' onClick={() => setWidthBox('100%')} />
            </motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu color="menuButton" title='Mombamomba' link='/aboutUs' onClick={() => setWidthBox('55%')} />
            </motion.div>
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu color="menuButton" title='Faritra' link='/areas' onClick={() => setWidthBox('55%')} />
            </motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu color="menuButton" title='Sary' link='/albums' onClick={() => setWidthBox('55%')} />
            </motion.div>
            <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                <ButtonMenu color="menuButton" title='Fifandraisana' link='/contactUs' onClick={() => setWidthBox('55%')} />
            </motion.div>
        </Box>
    )

    return (
        <>
            <BrowserRouter>
                <Box sx={styles.container} >
                    <motion.div className="first-box" initial={{ width: '100%' }} animate={{ width: widthBox }}>
                        <div className="box-blur">
                            <Box
                                sx={{ ...styles.containerBurger, backgroundColor: collapsed ? '#000000b3' : 'transparent', height: !collapsed ? 'calc(50vh - 120px)' : 'calc(100vh - 120px)' }}
                                onClick={(e: any) => {
                                    e.stopPropagation()
                                    if (collapsed) {
                                        setCollapsed(false)
                                        setOpenTooltip(false)
                                    }
                                }}
                            >
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
                        </div>
                    </motion.div>
                    <Box className="second-box">
                        <Routes onClickHome={() => setWidthBox('55%')} />
                    </Box>
                </Box>
            </BrowserRouter>
        </>
    )
}

export default Accueil;