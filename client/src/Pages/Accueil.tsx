import React from "react";
import { Box } from "@mui/material";
import Bg01 from '../Assets/bg-01.jpg'
import BurgerMenu from "../Components/BurgerMenu";
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
        }
    }
}

const Accueil = () => {
    return (
        <>
            <Box sx={styles.container} >
                <Box className="first-box">
                    <div className="box-blur">
                        <BurgerMenu />
                    </div>
                </Box>
                <Box className="second-box">
                    <Routes />
                </Box>
            </Box>
        </>
    )
}

export default Accueil;