import React, { FC } from 'react'
import { Button as ButtonMUI } from '@mui/material'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

interface ButtonProps {
    title: string;
    link: string;
    icon?: React.ReactNode;
    variant?: 'contained' | 'outlined';
    color?: 'primary' | 'secondary' | 'default' | 'menuButton'
    onClick?: () => void
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
        },
    }
}

const Button: FC<ButtonProps> = ({ title, link, icon, variant = 'contained', color = 'primary', onClick }) => {
    const resolvedPath = useResolvedPath(link);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Link className='link-button' to={link}>
            <ButtonMUI sx={{ ...styles.container, backgroundColor: isActive && 'rgb(255 255 255 / 48%)' }} color={color} variant={variant} onClick={onClick}>
                {title}
                {isActive && (
                    <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} >
                        <BsArrowRight />
                    </motion.div>
                )}
                <div>{icon}</div>
            </ButtonMUI>
        </Link>
    )
}

export default Button
