import React, { FC } from 'react'
import { Button } from '@mui/material'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

interface ButtonMenuProps {
    title: string;
    link: string;
}

const styles = {
    container: {
        'svg': {
            fontSize: '17px',
            position: 'relative',
            top: '4px',
            marginLeft: '15px'
        },
        'div': {
            display: 'inline-block'
        }
    }
}

const ButtonMenu: FC<ButtonMenuProps> = ({ title, link }) => {
    const resolvedPath = useResolvedPath(link);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <Link to={link}>
            <Button sx={{ ...styles.container, backgroundColor: isActive && 'rgb(255 255 255 / 48%)' }} color='menuButton' variant='contained'>
                {title}
                {isActive && (
                    <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} >
                        <BsArrowRight />
                    </motion.div>
                )}
            </Button>
        </Link>
    )
}

export default ButtonMenu
