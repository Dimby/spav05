import { Grid, Link } from '@material-ui/core'
import React, { FC } from 'react'
import image1 from '../../Images/Gallery/Gallery (1).jpg'
import image2 from '../../Images/Gallery/Gallery (2).jpg'
import image3 from '../../Images/Gallery/Gallery (3).jpg'
import image4 from '../../Images/Gallery/Gallery (4).jpg'
import image5 from '../../Images/Gallery/Gallery (5).jpg'
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
const rowsAmbato = [
  createData('001-A', '01', 'AMBALABAKO ZIONA'),
  createData('002-A', '02', 'AMBALAVATO EBENEZERA'),
  createData('003-A', '03', 'AMBANDRIKA FILADEDLIFIA'),
  createData('004-A', '04', 'AMBARARATA'),
  createData('005-A', '05', 'AMBATONDRAZAKA FITIAVANA'),
  createData('006-A', '06', 'AMBOHIBOATAVO HERMONA'),
  createData('007-A', '07', 'AMBOHIBOROMANGA SALEMA'),
  createData('008-A', '08', 'AMBOHIDEHILAHY 3F'),
  createData('009-A', '09', 'AMBOHIMASINA FIVAVAHANA'),
  createData('010-A', '10', 'AMBOHIMENA FANANTENANA'),
  createData('011-A', '11', 'AMBOHIMIANGALY ZOARA'),
  createData('012-A', '12', 'AMBOHITANIBE'),
  createData('013-A', '13', 'AMBOHITRANJAKANA'),
  createData('014-A', '14', 'AMPONGABE SAHA VAOVAO'),
  // createData('015-A', '15', 'AMPITATSIMO MIHAVAO'),
  // createData('016-A', '16', 'ANDILANOMBY FIRAISANA'),
  // createData('017-A', '17', 'ANDINGADINGANA FANANTENANA'),
  // createData('018-A', '18', 'ANDRANOVELONA'),
  // createData('019-A', '19', 'ANDRARABARY FITIAVANA'),
  // createData('020-A', '20', 'ANKAZOTSARAVOLO'),
  // createData('021-A', '21', 'ANOSINDRAFILO RASALAMA'),
  // createData('022-A', '22', 'ANTANIMENA-TANAMBAO'),
  // createData('023-A', '23', 'ANTSANGASANGA VAVOLOMBELONA'),
  // createData('024-A', '24', 'FERAMANGA AVARATRA'),
  // createData('025-A', '25', 'FERAMANGA ATSIMO'),
  // createData('026-A', '26', 'ILAFY KRISTY FAHAZAVANA'),
  // createData('027-A', '27', 'MANAKAMBAHINY ZOARA'),
  // createData('028-A', '28', 'MANGALAHALA'),
  // createData('029-A', '29', 'MANGALAZA NAZARETA'),
]
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
