import { Grid } from '@material-ui/core'
import MUIDataTable from 'mui-datatables'
import { FC } from 'react'
import useStyles from './style'

const columnsCountry = ['Lah sp.', 'Lah Fit.', 'Fitandremana']
const rowsAmbato = [
  ['001-A', '01', 'AMBALABAKO ZIONA'],
  ['002-A', '02', 'AMBALAVATO EBENEZERA'],
  ['003-A', '03', 'AMBANDRIKA FILADEDLIFIA'],
  ['004-A', '04', 'AMBARARATA'],
  ['005-A', '05', 'AMBATONDRAZAKA FITIAVANA'],
  ['006-A', '06', 'AMBOHIBOATAVO HERMONA'],
  ['007-A', '07', 'AMBOHIBOROMANGA SALEMA'],
  ['008-A', '08', 'AMBOHIDEHILAHY 3F'],
  ['009-A', '09', 'AMBOHIMASINA FIVAVAHANA'],
  ['010-A', '10', 'AMBOHIMENA FANANTENANA'],
  ['011-A', '11', 'AMBOHIMIANGALY ZOARA'],
  ['012-A', '12', 'AMBOHITANIBE'],
  ['013-A', '13', 'AMBOHITRANJAKANA'],
  ['014-A', '14', 'AMPONGABE SAHA VAOVAO'],
  ['015-A', '15', 'AMPITATSIMO MIHAVAO'],
  ['016-A', '16', 'ANDILANOMBY FIRAISANA'],
  ['017-A', '17', 'ANDINGADINGANA FANANTENANA'],
  ['018-A', '18', 'ANDRANOVELONA'],
  ['019-A', '19', 'ANDRARABARY FITIAVANA'],
  ['020-A', '20', 'ANKAZOTSARAVOLO'],
  ['021-A', '21', 'ANOSINDRAFILO RASALAMA'],
  ['022-A', '22', 'ANTANIMENA-TANAMBAO'],
  ['023-A', '23', 'ANTSANGASANGA VAVOLOMBELONA'],
  ['024-A', '24', 'FERAMANGA AVARATRA'],
  ['025-A', '25', 'FERAMANGA ATSIMO'],
  ['026-A', '26', 'ILAFY KRISTY FAHAZAVANA'],
  ['027-A', '27', 'MANAKAMBAHINY ZOARA'],
  ['028-A', '28', 'MANGALAHALA'],
  ['029-A', '29', 'MANGALAZA NAZARETA'],
]
// End

const rowsAndilamena = [
  ['030-B', '01', 'AMBALABE(MIARINARIVO)'],
  ['031-B', '02', 'AMBATOHARANANA'],
  ['032-B', '03', 'AMBATOBE'],
  ['033-B', '04', 'AMPONDRABE(MIARINARIVO)'],
  ['034-B', '05', 'ANDILAMENA FANAVOZANA'],
  ['035-B', '06', 'ANDILAMENA FINOANA'],
  ['036-B', '07', 'ANKAIAFO SUD'],
  ['037-B', '08', 'ANTANIMENABAKA'],
  ['038-B', '09', 'ANTSEVAKELY'],
  ['039-B', '10', 'BEMAITSO'],
  ['040-B', '11', 'MAROMANDIA'],
  ['041-B', '12', 'MIARINARIVO'],
  ['042-B', '13', 'SAHAVOLO'],
  ['043-B', '14', 'TANANANIFOLOLAHY(MIARINARIVO)'],
  ['044-B', '15', 'DIHIZANA'],
  ['045-B', '16', 'AMBATOLAMPY FIORENANA'],
]

const rowsAndilanatoby = [
  ['046-D', '01', 'AMBODINONOKA'],
  ['047-D', '02', 'AMBOHIMIARINA'],
  ['048-D', '03', 'ANDILANATOBY ZIONA'],
  ['049-D', '04', 'ANDRANOKOBAKA RANOFOTSY'],
  ['050-D', '05', 'MANGATANY'],
  ['051-D', '06', 'VOHIDIALA'],
  ['052-D', '07', 'SAHANIDINGANA'],
]

const rowsAndreba = [
  ['053-E', '01', 'AMBOHIMANJAKA SALEMA'],
  ['054-E', '02', 'AMBATOSORATRA'],
  ['055-E', '03', 'AMBOHIDAVA'],
  ['056-E', '04', 'AMBOHIMANGA FINOANA'],
  ['057-E', '05', 'AMBOHITSILAOZANA'],
  ['058-E', '06', 'AMPARIHINTSOKATRA'],
  ['059-E', '07', 'ANALAVORY'],
  ['060-E', '08', 'ANDREBA ZIONA'],
  ['061-E', '09', 'ANTANDROKOMBY '],
  ['062-E', '10', 'ANTOKAZO'],
  ['063-E', '11', 'LOHAFASIKA'],
  ['064-E', '12', 'MAHATSINJO KARMELA'],
  ['065-E', '13', 'MANAKAMBAHINY EST'],
  ['066-E', '14', 'MORARANO FIVAVAHANA'],
  ['067-E', '15', 'TSARAHALANA-AMBOHIMANJAKA'],
]

const rowsDidy = [
  ['068-F', '01', 'AMBOARABE'],
  ['069-F', '02', 'AMBOHIBE'],
  ['070-F', '03', 'AMBOHIDAVA DIDY'],
  ['071-F', '04', 'AMBOHIJANAHARY DIDY NAZARETA'],
  ['072-F', '05', 'AMBOHIMADERA'],
  ['073-F', '06', 'AMBOHIMANJAKA DIDY'],
  ['074-F', '07', 'ANKENIHENIBE'],
  ['075-F', '08', 'DIDY FAHAZAVANA '],
  ['076-F', '09', 'SAHAFASENINA-MANARINTSOA'],
  ['077-F', '10', 'TSARATAMPONA'],
]

const rowsImerimandroso = [
  ['078-G', '01', 'AMBALAHAZO'],
  ['079-G', '02', 'AMBOASARIMASINA'],
  ['080-G', '03', 'AMBODIHASINA'],
  ['081-G', '04', 'AMBOHIJANAHARIKELY'],
  ['082-G', '05', 'AMBOHIMANJAKA FITIAVANA'],
  ['083-G', '06', 'AMBOHITRAMPIRANA'],
  ['084-G', '07', 'AMPISARAHANA'],
  ['085-G', '08', 'ANDREBAKELY FIHAVAOZANA'],
  ['086-G', '09', 'ANDROMBA EDENA VAOVAO'],
  ['087-G', '10', 'ANKASINA FAHAZAVANA'],
  ['088-G', '11', 'ANTANANDAVA IMERIMANDROSO'],
  ['089-G', '12', 'ANTAZAMASO'],
  ['090-G', '13', 'ANTSAHALEMAKA'],
  ['091-G', '14', 'IMERIMANDAROSO'],
  ['092-G', '15', 'ISOAVINA'],
  ['093-G', '16', 'MAROSALAZANA FITAHIANA'],
  ['094-G', '17', 'MAROVATO'],
  ['095-G', '18', 'SANDRANIKA'],
  ['096-G', '19', 'TSARAHONENANA'],
  ['097-G', '20', 'VATOFOLAKA AVARATRA'],
  ['098-G', '21', 'VOHIMENA NAZARETA VAOVAO'],
  ['099-G', '22', 'VOHITRAIVO FAHARETANA'],
  ['100-G', '23', 'VOHITSIVALANA FAMONJENA'],
  ['101-G', '24', 'VOHITSOA'],
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
const options = {
  elevation: 0,
}

const Country: FC = () => {
  const classes = useStyles()
  return (
    <div style={{ marginTop: '50px' }}>
      <div className={classes.boxOne}>
        <Grid container spacing={0}>
          <Grid xs={12} md={2} lg={3} xl={3}>
            <div style={{ position: 'fixed', backgroundColor: '#FFFFFF' }}>
              <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>FARITRA</h2>
              <div className="item" style={{ marginLeft: '20px' }}>
                <div className="menuItem">
                  <a href="#ambatondrazaka">Ambatondrazaka</a>
                </div>
                <div className="menuItem">
                  <a href="#andilamena">Andilamena</a>
                </div>
                <div className="menuItem">
                  <a href="#andilanatoby">Andilanatoby</a>
                </div>
                <div className="menuItem">
                  <a href="#andreba">Andreba</a>
                </div>
                <div className="menuItem">
                  <a href="#didy">Didy</a>
                </div>
                <div className="menuItem">
                  <a href="#imerimandroso">Imerimandroso</a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid style={{ padding: '20px' }} xs>
            <div id="ambatondrazaka">
              <MUIDataTable
                title={'AMBATONDRAZAKA'}
                data={rowsAmbato}
                columns={columnsCountry}
                options={options}
              />
            </div>
            <div id="andilamena">
              <MUIDataTable
                title={'ANDILAMENA'}
                data={rowsAndilamena}
                columns={columnsCountry}
                options={options}
              />
            </div>
            <div id="andilanatoby">
              <MUIDataTable
                title={'ANDILANATOBY'}
                data={rowsAndilanatoby}
                columns={columnsCountry}
                options={options}
              />
            </div>
            <div id="andreba">
              <MUIDataTable
                title={'ANDREBA'}
                data={rowsAndreba}
                columns={columnsCountry}
                options={options}
              />
            </div>
            <div id="didy">
              <MUIDataTable
                title={'DIDY'}
                data={rowsDidy}
                columns={columnsCountry}
                options={options}
              />
            </div>
            <div id="imerimandroso">
              <MUIDataTable
                title={'IMERIMANDROSO'}
                data={rowsImerimandroso}
                columns={columnsCountry}
                options={options}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Country
