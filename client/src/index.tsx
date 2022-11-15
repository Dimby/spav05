import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import Mullingar from './Assets/Mullingar.ttf'

declare module '@mui/material' {
    interface Palette {
        default: Palette['warning'];
        menuButton: Palette['default'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        default?: PaletteOptions['warning'];
        menuButton?: PaletteOptions['default'];
    }

    interface ButtonPropsColorOverrides {
        default: true;
        menuButton: true;
    }
}

const colors = { primary: '#006AB0', secondary: '#FFD160', default: '#FFFFFF' }
const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
            contrastText: '#FFFFFF'
        },
        default: {
            main: colors.default,
            contrastText: '#000000'
        },
        menuButton: {
            main: colors.default
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: ({ ownerState }) => ({
                    boxShadow: 'none',
                    fontSize: 14,
                    padding: '13px 38px',
                    borderRadius: '50px',
                    fontWeight: 400,
                    ...(ownerState.color === 'menuButton' && {
                        color: '#FFFFFF',
                        backgroundColor: '#ffffff1a',
                        ':hover': {
                            backgroundColor: '#ffffff4d',
                            boxShadow: 'none',
                        }
                    }),
                    ...(ownerState.color === 'default' && {
                        color: colors.primary,
                        ':hover': {
                            boxShadow: 'none',
                            backgroundColor: '#ffffffd9'
                        }
                    }),
                    ...(ownerState.color === 'secondary' &&
                    {
                        ...(ownerState.variant === 'contained' ? {
                            color: '#000000',
                            ':hover': {
                                boxShadow: 'none',
                                backgroundColor: '#ffd160d9'
                            }
                        } : {
                            ':hover': {
                                boxShadow: 'none',
                                backgroundColor: '#ebf6ff'
                            }
                        })
                    }
                    ),
                    ...(ownerState.color === 'primary' && {
                        ...(ownerState.variant === 'contained' ? {
                            ':hover': {
                                boxShadow: 'none',
                                backgroundColor: '#006AB0d9'
                            }
                        } : {
                            color: colors.primary,
                            ':hover': {
                                boxShadow: 'none',
                                backgroundColor: '#ebf6ff'
                            }
                        })
                    }),
                }),
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: 'transparent'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                font-family: 'Mullingar';
                src: url(${Mullingar})
            }`
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontFamily: 'Mullingar',
                    fontSize: '86px'
                },
                h2: {
                    fontFamily: 'Mullingar',
                    fontSize: '56px'
                },
                h3: {
                    fontFamily: 'Mullingar',
                    fontSize: '26px'
                }
            }
        }
    },
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
