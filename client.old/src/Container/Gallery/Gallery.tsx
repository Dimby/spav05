import { Grid, IconButton, TextField } from '@material-ui/core'
import ChevronRight from '@material-ui/icons/ChevronRight'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import sary1 from '../../Images/Gallery/Gallery (1).jpg'
import sary2 from '../../Images/Gallery/Gallery (2).jpg'
import sary3 from '../../Images/Gallery/Gallery (3).jpg'
import sary4 from '../../Images/Gallery/Gallery (4).jpg'
import sary5 from '../../Images/Gallery/Gallery (5).jpg'
import sary6 from '../../Images/Gallery/Gallery (6).jpg'
import { verset } from '../../Lib/verset'
import GalleryItem from './GalleryItem/GalleryItem'
import GalleryModal from './GalleryModal/GalleryModal'
import useStyles from './style'
import ItemJereo from '../../Components/ItemJereo/ItemJereo'

function createDataGallery(
  link: string,
  title: string,
  description: string,
  date: string,
) {
  return { link, title, description, date }
}
const dataGallery = [
  createDataGallery(
    sary1,
    'Ambatondrazaka Fitiavana',
    "Fetin'ny taranaka",
    'Fevrier 2020',
  ),
  createDataGallery(
    sary2,
    'Ambohimiangaly Zoara',
    "Alahadin'ny Sampati",
    'Fevrier 2020',
  ),
  createDataGallery(
    sary3,
    'Ambatondrazaka Fitiavana',
    'Fivoriambe I',
    'Fevrier 2020',
  ),
  createDataGallery(
    sary4,
    'Ambatondrazaka Fitiavana',
    "Alahadin'ny Mpitandrina",
    'Septembre 2020',
  ),
  createDataGallery(
    sary5,
    'Ambatondrazaka Fitiavana',
    'Vokadehibe 1',
    'Fevrier 2020',
  ),
  createDataGallery(
    sary6,
    'Ambatondrazaka Fitiavana',
    'Vokadehibe 1',
    'Fevrier 2020',
  ),
]

const jereoKoa = [
  { title: 'TETIKANDRO', desc: 'tetikandro2021.docx', to: '/contact' },
  { title: 'FITSIPIPIFEHEZANA', desc: 'fitsipikaanatiny.docx', to: '/contact' },
  { title: 'VINA SY FANAMBY', desc: 'vinasyfanamby.docx', to: '/contact' },
]

const fjkmVaovao = [
  { title: 'HAFATRY NY FILOHA', desc: 'Vaovao Covid-19', to: '/contact' },
  { title: 'SEKOLY ALAHADY', desc: 'Fivoriambe 1 - Jereo eto', to: '/contact' },
  { title: 'DORKASY FJKM', desc: 'Zaika Be atao any Antsiranana', to: '/contact' },
]

const Gallery: FC = () => {
  const classes = useStyles()
  const versetRandom = verset()
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [date, setDate] = React.useState('')

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = (url: string, title: string, description: string) => {
    setOpen(true)
    setUrl(url)
    setTitle(title)
    setDescription(description)
    setDate(date)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <GalleryModal
        url={url}
        title={title}
        date={date}
        description={description}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
      <div className={classes.boxOne}>
        <div>" {versetRandom.fehezanteny.toUpperCase()} "</div>
        <p style={{ fontSize: '18px' }}>- {versetRandom.toko}</p>
      </div>
      <div className={classes.boxTwo}>
        <Grid container spacing={0} className="listImage">
          <Grid xs style={{ borderRight: '1px solid rgb(0 0 0 / 10%)' }}>
            <Grid container style={{ paddingRight: '40px' }}>
              <Grid xs={7}>
                <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>
                  SARY SY HORONANTSARY TAHIRY
                </h2>
              </Grid>
              <Grid
                xs={5}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <form noValidate autoComplete="off" style={{ width: '80%' }}>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    label="Recherche..."
                    variant="outlined"
                    size="small"
                  />
                </form>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              {dataGallery.map((row) => (
                <>
                  <GalleryItem
                    url={row.link}
                    title={row.title}
                    description={row.description}
                    date={row.date}
                    handleClickOpen={() =>
                      handleClickOpen(row.link, row.title, row.description)
                    }
                  />
                </>
              ))}
            </Grid>
          </Grid>
          <Grid xs={3} style={{ paddingLeft: '20px' }} className="news">
            <div>
              <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>
                JEREO KOA
              </h2>
            </div>
            <div className="news">
              <div>
                {jereoKoa.map((row) => (
                  <ItemJereo
                    title={row.title}
                    description={row.desc}
                    to={row.to}
                  />
                ))}
              </div>
            </div>
            <br />
            <br />
            <div className="news">
              <div>
                <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>
                  FOIBE FJKM
                </h2>
              </div>
              <div>
                {fjkmVaovao.map((row) => (
                  <ItemJereo
                    title={row.title}
                    description={row.desc}
                    to={row.to}
                  />
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Gallery
