import { makeStyles } from '@material-ui/core/styles'
import fond2 from '../../Images/fond-2.jpg'

const useStyles = makeStyles((theme) => ({
  boxOne: {
    backgroundImage: 'url(' + fond2 + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  boxText: {
    width: '60%',
    color: '#fff',
    padding: '0 5rem',
    borderLeft: '5px solid #fff',
  },
  boxButton: {
    width: '60%',
    '&>a': {
      textDecoration: 'none',
      padding: '11px 29px',
      borderWidth: 0,
      backgroundColor: 'rgba(255 255 255 / 50%)',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '18px',
      cursor: 'pointeur',
      '&:hover': {
        backgroundColor: 'rgba(255 255 255 / 60%)',
      },
    },
  },
  boxTwo: {
    textAlign: 'center',
    color: '#006AB0',
    padding: '3rem',
    fontSize: '36px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px rgba(0, 0, 0, 0.1)',
  },
  boxThree: {
    backgroundColor: '#E9EBEC',
    display: 'flex',
    '& .boxVerset': {
      display: 'flex',
      justifyContent: 'center',
      '& .verset': {
        padding: '20px',
        width: '50%',
        fontSize: '25px',
        backgroundColor: '#f7f7f7',
      },
    },
  },
  boxThree1: {
    padding: '2rem',
    '& .content': {
      backgroundColor: '#fff',
      padding: '2rem 0rem',
      color: '#004D80',
    },
    '& .news': {
      backgroundColor: '#fff',
      padding: '20px',
      '& .item': {
        padding: '15px 20px',
        '& :hover': {
          transform: 'scale(1.005)',
          transition: 'all 0.1s ease-in-out',
        },
        '& .content': {
          maxHeight: '78px',
          borderRadius: '4px',
          cursor: 'pointer',
          padding: '15px 20px',
          boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
          '& h2': {
            padding: '0',
            margin: '0',
          },
        },
      },
    },
  },
  boxThree2: {
    padding: '2rem 2rem 2rem 0rem',
    '& .content': {
      backgroundColor: '#fff',
      padding: '1rem 2.5rem',
      color: '#004D80',
      '& .slick-next:before': {
        color: '#F4C247',
      },
      '& .slick-prev:before': {
        color: '#F4C247',
      },
      '& h1': {
        color: '#F4C247',
        padding: '20px 0',
      },
      '& .quote': {
        display: 'flex',
        justifyContent: 'spaceBetween',
        '& .quoteContent': {
          padding: '15px',
          '& .profil': {
            borderTop: '1px solid #004D80',
            marginTop: '20px',
            padding: '5px',
            textAlign: 'right',
          },
        },
      },
    },
    '& .slickCarousel': {
      '& .item': {
        padding: '20px',
        border: '1px solid red',
      },
    },
    '& .slider': {
      '& .itemSlick': {
        '& .context': {
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid rgb(0 0 0 / 10%)',
          margin: '10px',
          textAlign: 'center',
          height: '150px',
          padding: '20px',
          '& h3': {
            marginTop: '0!important',
          },
          '& .counter': {
            position: 'absolute',
            zIndex: '-1',
            fontSize: '110px',
            opacity: '0.1',
            padding: '0 40px',
            backgroundColor: 'rgb(0 0 0 / 20%)',
            fontWeight: 'bold',
          },
        },
      },
    },
  },
  boxRed: {
    border: '1px solid red',
  },
}))

export default useStyles
