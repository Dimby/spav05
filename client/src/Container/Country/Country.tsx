import { Grid, Link } from '@material-ui/core'
import React, { FC } from 'react'
import image1 from '../../Images/Faritra 1.png'
import image5 from '../../Images/Faritra 2 - carte.png'
import image2 from '../../Images/Faritra 3.png'
import image3 from '../../Images/Faritra 4.png'
import image4 from '../../Images/Faritra 5.png'
import Faritra from './Faritra/Faritra'
import useStyles from './style'

function createData(id: string, idFaritra: string, fit: string) {
  return { id, idFaritra, fit }
}
// Data for Faritra Ambatondrazaka
const tileDataAmbato = [
  { img: image1, title: 'Image 1', author: 'Author 1', cols: 1 },
  { img: image2, title: 'Image 2', author: 'Author 2', cols: 2 },
  { img: image3, title: 'Image 1', author: 'Author 1', cols: 2 },
  { img: image4, title: 'Image 1', author: 'Author 1', cols: 1 },
  { img: image5, title: 'Image 1', author: 'Author 1', cols: 1 },
]
const rowsAmbato = [createData('001-A', '01', 'AMBALABAKO ZIONA')]
// End

// Data for Faritra Andilamena
const tileDataAndilamena = [
  { img: image1, title: 'Image 1', author: 'Author 1', cols: 2 },
  { img: image2, title: 'Image 2', author: 'Author 2', cols: 1 },
  { img: image3, title: 'Image 1', author: 'Author 1', cols: 1 },
  { img: image4, title: 'Image 1', author: 'Author 1', cols: 2 },
  { img: image5, title: 'Image 1', author: 'Author 1', cols: 1 },
]

const rowsAndilamena = [
  createData('030-B', '01', 'AMBALABE (MIARINARIVO)'),
  createData('031-B', '02', 'AMBATOHARANANA'),
  createData('032-B', '03', 'AMBATOBE'),
  createData('033-B', '04', 'AMPONDRABE (MIARINARIVO)'),
  createData('034-B', '05', 'ANDILAMENA FANAVAOZANA'),
  createData('035-B', '06', 'ANDILAMENA FINOANA'),
]

const faritra = [
  { sokajy: 'A', name: 'AMBATONDRAZAKA' },
  { sokajy: 'B', name: 'ANDILAMENA' },
  { sokajy: 'D', name: 'ANDILANATOBY' },
  { sokajy: 'E', name: 'ANDREBA' },
  { sokajy: 'F', name: 'DIDY' },
  { sokajy: 'G', name: 'IMERIMANDROSO' },
]
// End

// const options = {
//   filter: false,
//   search: false,
//   download: false,
//   print: false,
//   pagination: false,
//   viewColumns: false,
// };

const Country: FC = () => {
  const classes = useStyles()
  return (
    <div style={{ marginTop: '50px' }}>
      <div className={classes.boxOne}>
        <Grid container spacing={0}>
          <Grid xs={2}>
            <div>
              <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>FARITRA</h2>
              <div className="item" style={{ marginLeft: '20px' }}>
                <div className="menuItem">
                  <Link>Ambatondrazaka</Link>
                </div>
                <div className="menuItem">
                  <Link>Andilamena</Link>
                </div>
                <div className="menuItem">
                  <Link>Andilanatoby</Link>
                </div>
                <div className="menuItem">
                  <Link>Andreba</Link>
                </div>
                <div className="menuItem">
                  <Link>Didy</Link>
                </div>
                <div className="menuItem">
                  <Link>Imerimandroso</Link>
                </div>
              </div>
            </div>
          </Grid>
          <Grid style={{ padding: '20px' }} xs>
            <Faritra
              name={'AMBATONDRAZAKA'}
              sokajy={'A'}
              rows={rowsAmbato}
              tileData={tileDataAmbato}
            />
            <Faritra
              name={'ANDILAMENA'}
              sokajy={'B'}
              rows={rowsAndilamena}
              tileData={tileDataAndilamena}
            />
            <Faritra
              name={'ANDILANATOBY'}
              sokajy={'D'}
              rows={rowsAndilamena}
              tileData={tileDataAndilamena}
            />
            <Faritra
              name={'ANDREBA'}
              sokajy={'E'}
              rows={rowsAndilamena}
              tileData={tileDataAndilamena}
            />
            <Faritra
              name={'DIDY'}
              sokajy={'F'}
              rows={rowsAndilamena}
              tileData={tileDataAndilamena}
            />
            <Faritra
              name={'IMERIMANDROSO'}
              sokajy={'G'}
              rows={rowsAndilamena}
              tileData={tileDataAndilamena}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Country
