import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
}))

export default useStyles
