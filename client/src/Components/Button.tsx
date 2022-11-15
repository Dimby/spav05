import React, { FC } from 'react'
import { Button as ButtonMUI } from '@mui/material'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

interface ButtonProps {
    title: string;
    link: string;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
    variant?: 'contained' | 'outlined';
    color?: 'primary' | 'secondary' | 'default' | 'menuButton'
    onClick?: () => void
}

const styles = {
    container: {
        '.isActive, .end-icon, .start-icon': {
            'svg': {
                fontSize: '17px',
                position: 'relative',
                top: '4px',
                marginLeft: '15px'
            }
        },
        '.start-icon': {
            'svg': {
                ml: 0,
                marginRight: '15px'
            },
        },
        'div': {
            display: 'inline-block'
        },
    }
}

const Button: FC<ButtonProps> = ({ title, link, endIcon, startIcon, variant = 'contained', color = 'primary', onClick }) => {
    const resolvedPath = useResolvedPath(link);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Link className='link-button' to={link}>
            <ButtonMUI sx={{ ...styles.container, backgroundColor: isActive && 'rgb(255 255 255 / 48%)' }} color={color} variant={variant} onClick={onClick}>
                <div className='start-icon'>{startIcon}</div>
                {title}
                {isActive && (
                    <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className='isActive'>
                        <BsArrowRight />
                    </motion.div>
                )}
                <div className='end-icon'>{endIcon}</div>
            </ButtonMUI>
        </Link>
    )
}

export default Button
