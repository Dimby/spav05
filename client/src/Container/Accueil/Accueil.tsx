import { Grid } from '@material-ui/core'
import moment from 'moment'
import 'moment/locale/fr'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import ItemJereo from '../../Components/ItemJereo'
import image1 from '../../Images/Faritra 1.png'
import { getAndalana } from '../../Lib/perikopa2021'
import { verset } from '../../Lib/verset'
import DialogCustom from './DialogCustom'
import DialogJobily from './DialogJobily'
import Mofonaina from './Mofonaina/Mofonaina'
import useStyles from './style'
import VaovaoIsampitandremana from './VaovaoIsampitandremana'
import VaovaoMisongadina from './VaovaoMisongadina'

function createDataMisongadina(id: number, title: string, desc: string) {
  return { id, title, desc }
}
const rowsMisongadin = [
  createDataMisongadina(
    1,
    'ALAHADY FAHA 12 APRILY 2021',
    "Fivoriamben'ny Synodamparitany any amin'ny fitandremana Antokazo",
  ),
  createDataMisongadina(
    2,
    'ALAKAMISY 13 - Zoma 14 MAI 2021',
    "Fambolen-kazo atao eny amin'ny tanin'ny Synodamparitany Manakambahiny, amin'ny 09 ora ny fiaingana eo amin'ny Fiangonana Ambohimasina.",
  ),
  createDataMisongadina(
    3,
    'ALATSINAINY 23 - ZOMA 28 NOVAMBRA 2021',
    "Lasym-paritra farany ataon'ny SAMPATI amin'ity taona 2021 ity, hotanterahina eny amin'ny Fiangonana FJKM Ambohimiangaly amin'ny 10 ora. Mitondra vary 4 kapoaka avy sy kitoza atono atao laoka atoandro sy hariva. Tongava maro ary aza adino mitondra lay sy tanty fa mangatsika be any",
  ),
  createDataMisongadina(
    4,
    'ALAHADY FAHA 12 APRILY 2021',
    "Fivoriamben'ny Synodamparitany any amin'ny fitandremana Antokazo",
  ),
  createDataMisongadina(
    5,
    'ALAKAMISY 13 - Zoma 14 MAI 2021',
    "Fambolen-kazo atao eny amin'ny tanin'ny Synodamparitany Manakambahiny, amin'ny 09 ora ny fiaingana eo amin'ny Fiangonana Ambohimasina.",
  ),
  createDataMisongadina(
    6,
    'ALATSINAINY 23 - ZOMA 28 NOVAMBRA 2021',
    "Lasym-paritra farany ataon'ny SAMPATI amin'ity taona 2021 ity, hotanterahina eny amin'ny Fiangonana FJKM Ambohimiangaly amin'ny 10 ora. Mitondra vary 4 kapoaka avy sy kitoza atono atao laoka atoandro sy hariva. Tongava maro ary aza adino mitondra lay sy tanty fa mangatsika be any",
  ),
]

const mofonainaAnio = {
  date: 'Talata 12 Febroary 2021',
  andininy: 'Hosea 12 : 1 - 15',
  andalana:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt non quas impedit iure, consequuntur magni at officiis, aut laborum explicabo tempora. Repudiandae corrupti blanditiis earum deserunt magnam neque porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi suscipit eligendi incidunt nulla, aspernatur cupiditate odit alias laboriosam rem eos maiores aliquid eius dolorem facere? Repellat dolore illo eum.',
}

const jereoKoa = [
  { title: 'TETIKANDRO', desc: 'tetikandro2021.docx', to: '/contact' },
  { title: 'FITSIPIPIFEHEZANA', desc: 'fitsipikaanatiny.docx', to: '/contact' },
  { title: 'VINA SY FANAMBY', desc: 'vinasyfanamby.docx', to: '/contact' },
]

const vaovaoFit = [
  {
    title: 'ALAHADY FAHA 12 Aprily 2021',
    subtitle: 'AMBOHIMASINA FIVAVAHANA',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt non quas impedit iure, consequuntur magni at officiis, aut laborum explicabo tempora. Repudiandae corrupti blanditiis earum deserunt magnam neque porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi suscipit eligendi incidunt nulla, aspernatur cupiditate odit alias laboriosam rem eos maiores aliquid eius dolorem facere? Repellat dolore illo eum.',
    url: image1,
  },
  {
    title: 'ALAHADY FAHA 12 Aprily 2021',
    subtitle: 'AMBOHIMASINA FIVAVAHANA',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt non quas impedit iure, consequuntur magni at officiis, aut laborum explicabo tempora. Repudiandae corrupti blanditiis earum deserunt magnam neque porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi suscipit eligendi incidunt nulla, aspernatur cupiditate odit alias laboriosam rem eos maiores aliquid eius dolorem facere? Repellat dolore illo eum.',
    url: image1,
  },
  {
    title: 'ALAHADY FAHA 12 Aprily 2021',
    subtitle: 'AMBOHIMASINA FIVAVAHANA',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nesciunt non quas impedit iure, consequuntur magni at officiis, aut laborum explicabo tempora. Repudiandae corrupti blanditiis earum deserunt magnam neque porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi suscipit eligendi incidunt nulla, aspernatur cupiditate odit alias laboriosam rem eos maiores aliquid eius dolorem facere? Repellat dolore illo eum.',
    url: image1,
  },
]

moment.updateLocale('fr', {
  months: [
    'Janoary',
    'Febroary',
    'Martsa',
    'Aprily',
    'Mey',
    'Jona',
    'Jolay',
    'Aogositra',
    'Septambra',
    'Oktobra',
    'Novambra',
    'Desambra',
  ],
})

const Accueil: FC = () => {
  const classes = useStyles()
  const height = '612px'
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  }

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  const versetRandom = verset()
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  const handleClickOpen = (title: string, description: string) => {
    setOpen(true)
    setTitle(title)
    setDescription(description)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpenJobily = () => {
    setOpen(true)
  }

  return (
    <div>
      <DialogCustom
        title={title}
        description={description}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
      <DialogJobily
        title={"title"}
        description={"Rakoto a dit"}
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
      <div className={classes.boxOne} style={{ height: height, zIndex: 2 }}>
        <div className={classes.boxText}>
          <p
            style={{
              padding: '5px 10px',
              background: 'rgb(0, 106, 176)',
              width: 'fit-content',
              borderRadius: '4px',
            }}
          >
            SYNODAMPARITANY AMBATONDRAZAKA VAOVAO
          </p>
          <h1 style={{ fontSize: '70px', margin: 0 }}>
            FIANARANA AMIN'NY <br />
            ASA TSARA.
          </h1>
          <h2>Tit. 2:7a</h2>
        </div>
        <div className={classes.boxButton}>
          <Link to="/about">MOMBA NY SPAV5 </Link>
          <Link to="" style={{ marginLeft: "20px" }}
            onClick={() => {
              handleClickOpenJobily()
            }}
          >JOBILY 25e</Link>
        </div>
      </div>
      <div className={classes.boxTwo}>
        <div>
          TONGA SOA ETO AMIN'NY TRANONKALAM-PIFANDRAISAN'NY <br />
          SYNODAMPARITANY AMBATONDRAZAKA VAOVAO
        </div>
        <p style={{ fontSize: '18px' }}>
          " {versetRandom.fehezanteny} " - {versetRandom.toko}
        </p>
      </div>
      <div
        style={{
          color: '#006AB0',
          padding: '20px',
          textAlign: 'center',
          fontSize: '21px',
        }}
      >
        PERIKOPA VOLANA {moment().format('MMMM').toUpperCase()} :{' '}
        {/* 0 Janoary - 1 Febroary ... 11 Desambra */}
        <span style={{ fontWeight: 'bold' }}>"{getAndalana(5).andalana}"</span>
      </div>
      <div className={classes.boxThree}>
        <Grid container>
          <Grid xs={3}>
            <div className={classes.boxThree1}>
              <div className="content">
                <div style={{ backgroundColor: '#F4C247' }}>
                  <div
                    style={{
                      backgroundColor: '#fff',
                      width: '75%',
                      textAlign: 'center',
                      fontSize: '30px',
                      margin: 'auto',
                    }}
                  >
                    MOFON'AINA
                  </div>
                </div>
                <Mofonaina
                  date={mofonainaAnio.date}
                  andininy={mofonainaAnio.andininy}
                  andalana={mofonainaAnio.andalana}
                />
              </div>
              <br />
              <br />
              <div className="news">
                <div>
                  <h2 style={{ marginLeft: '15px', color: '#F4C247' }}>
                    JEREO KOA
                  </h2>
                </div>
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
                  {jereoKoa.map((row) => (
                    <ItemJereo
                      title={row.title}
                      description={row.desc}
                      to={row.to}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Grid>
          <Grid xs={9}>
            <div className={classes.boxThree2}>
              <div className="content">
                <h1>HAFATRY NY PRESIDENT SYNODAL</h1>
                <Grid container>
                  <Grid xs={7}>
                    <div className="quote">
                      <div className="quoteIcon">
                        <svg
                          style={{ fill: '#004D80' }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="70"
                          height="70"
                          viewBox="0 0 18 18"
                        >
                          <path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z" />
                        </svg>
                      </div>
                      <div className="quoteContent">
                        <div className="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet reiciendis excepturi inventore quam rerum
                          iusto itaque eaque dignissimos ratione, doloribus
                          quisquam voluptatem aperiam eius minus vitae harum?
                          Vero, in perspiciatis. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Amet reiciendis
                          excepturi inventore quam rerum iusto itaque eaque
                          dignissimos ratione, doloribus quisquam voluptatem
                          aperiam eius minus vitae harum? Vero, in perspiciatis.
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet reiciendis excepturi inventore quam rerum
                          iusto itaque eaque dignissimos ratione, doloribus
                          quisquam voluptatem aperiam eius minus vitae harum?
                          Vero, in perspiciatis. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Amet reiciendis
                          excepturi inventore quam rerum iusto itaque eaque
                          dignissimos ratione, doloribus quisquam voluptatem
                          aperiam eius minus vitae harum? Vero, in perspiciatis.
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet reiciendis excepturi inventore quam rerum
                          iusto itaque eaque dignissimos ratione, doloribus
                          quisquam voluptatem aperiam eius minus vitae harum?
                          Vero, in perspiciatis.
                        </div>
                        <div className="profil">
                          Rasolonirina Robert, Mpitandrina, Président Synodal
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    xs={5}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ border: '1px solid red', width: '90%' }}>
                      Video ici
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="content">
                <h1>VAOVAO MISONGADINA</h1>
                <Slider {...settings} className="slider">
                  {rowsMisongadin.map((row) => (
                    <VaovaoMisongadina
                      key={row.id}
                      id={row.id}
                      title={row.title}
                      description={row.desc}
                      handleClickOpen={() =>
                        handleClickOpen(row.title, row.desc)
                      }
                    />
                  ))}
                </Slider>
              </div>
              <div className="content">
                <h1>VAOVAO ISAM-PITANDREMANA</h1>
                <Slider {...settings2}>
                  {vaovaoFit.map((row) => (
                    <VaovaoIsampitandremana
                      title={row.title}
                      subtitle={row.subtitle}
                      description={row.desc}
                      url={row.url}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Accueil
