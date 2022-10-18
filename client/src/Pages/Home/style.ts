import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  leftDiv: {
    backgroundColor: 'red',
    flex: '0 100%',
  },
  rightDiv: {
    backgroundColor: 'yellow',
    flex: '0 100%',
  },
}))

export default useStyles
