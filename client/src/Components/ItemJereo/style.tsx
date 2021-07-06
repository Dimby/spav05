import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
}))

export default useStyles
