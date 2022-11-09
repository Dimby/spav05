import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cardBirao: {
    margin: 'auto',
    height: '200px',
    boxShadow: 'none',
    border: '1px solid rgb(0 0 0 / 10%)',
    '& .avatar': {
      width: '50px',
      height: '50px',
      border: '1px solid rgb(0 0 0 / 20%)',
    },
  },
}))

export default useStyles
