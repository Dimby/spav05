import React from "react";
import { Box } from "@mui/material";
import Bg01 from '../Assets/bg-01.jpg'

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
                backgroundColor: '#000000',
                height: '100vh',
                opacity: '0.4'
            }
        }
    }
}

const Accueil = () => {
    return (
        <>
            <Box sx={styles.container} >
                <Box className="first-box">
                    <div className="box-blur">A</div>
                </Box>
                <Box className="second-box">B</Box>
            </Box>
        </>
    )
}

export default Accueil;