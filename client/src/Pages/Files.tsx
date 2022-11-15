import React from 'react'
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material'
import Button from '../Components/Button'
import { BsFillFileEarmarkZipFill, BsArrowLeft, BsCloudDownloadFill } from 'react-icons/bs'
import Title from '../Components/Title'
import { Link } from 'react-router-dom'
import Verse from '../Components/Verse'

const styles = {
    container: {
        zIndex: '102 !important',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'hidden',
        '> .MuiBox-root': {
            width: '100%',
            height: '100vh'
        },
        '.MuiPaper-root': {
            marginTop: '15px',
            '.MuiTableCell-root': {
                color: '#006AB0',
                'a': {
                    textDecoration: 'none',
                    color: '#F4C247'
                }
            }
        }
    },
    grid: {
        '.grid-content': {
        }
    },
    content: {
        height: 'calc(100vh - 70px)',
        padding: '70px 0 0 0',
        position: 'relative'
    },
    footer: {
        margin: '13px 38px 70px 38px',
        position: 'absolute',
        bottom: 0,
        width: 'calc(100% - 76px)',
        borderTop: '1px solid #ebebeb',
        color: '#006AB0',
        '.grid-left': {
            textAlign: 'right',
            padding: '10px 20px 0 0',
            'div:first-child': {
                mb: 1
            }
        },
        '.grid-right': {
            padding: '10px 0 0 20px',
            'div:first-child': {
                mb: 2
            }
        }
    }
}

const Files = () => {

    function createData(
        name: React.ReactNode,
        description: string,
        date_add: string,
        size: number,
        upload: React.ReactNode,
    ) {
        return { name, description, date_add, size, upload };
    }

    const rows = [
        createData(
            <span><BsFillFileEarmarkZipFill /> Tetikandro2021.docx</span>,
            'Tetikandron\'ny SP - taona 2021', '2021-12-25 12:30',
            24,
            <Link to='/contactUs'><BsCloudDownloadFill /> Cliquer ici</Link>
        ),
        createData(
            <span><BsFillFileEarmarkZipFill /> Tetikandro2021.docx</span>,
            'Tetikandron\'ny SP - taona 2021', '2021-12-25 12:30',
            24,
            <Link to='/contactUs'><BsCloudDownloadFill /> Cliquer ici</Link>
        ),
        createData(
            <span><BsFillFileEarmarkZipFill /> Tetikandro2021.docx</span>,
            'Tetikandron\'ny SP - taona 2021', '2021-12-25 12:30',
            24,
            <Link to='/contactUs'><BsCloudDownloadFill /> Cliquer ici</Link>
        ),
    ];


    return (
        <Box sx={styles.container}>
            <Grid container sx={styles.grid}>
                <Grid item xs></Grid>
                <Grid item xs={8} className='grid-content'>
                    <Box sx={styles.content}>
                        <Button link='/' color='default' title='Pejy fandraisana' startIcon={<BsArrowLeft />} />
                        <Box sx={{ padding: '13px 38px' }}>
                            <Title type='h6'>Liste des fichiers</Title>
                            <Paper variant='outlined'>
                                <TableContainer>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nom</TableCell>
                                                <TableCell align="right">Description</TableCell>
                                                <TableCell align="right">Ajouter le</TableCell>
                                                <TableCell align="right">Taille</TableCell>
                                                <TableCell align="right">Télécharger</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row, key) => (
                                                <TableRow
                                                    key={key}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.description}</TableCell>
                                                    <TableCell align="right">{row.date_add}</TableCell>
                                                    <TableCell align="right">{row.size} Ko</TableCell>
                                                    <TableCell align="right">{row.upload}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Box>
                        <Box sx={styles.footer}>
                            <Grid container>
                                <Grid item xs className='grid-left'>
                                    <div>Synodamparitany Ambatondrazaka Vaovao :</div>
                                    <Verse author='Titosy 02: 07a'>Fianarana amin'ny asa tsara.</Verse>
                                </Grid>
                                <Grid item xs className='grid-right'>
                                    <div>Te hifandray aminay ? Mandefasa hafatra.</div>
                                    <Button link='/contactUs' variant='outlined' title='Handefa hafatra' />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </Box>
    )
}

export default Files
