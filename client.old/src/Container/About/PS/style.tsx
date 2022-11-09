import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '& .media': {
      height: 240,
    },
  },
}))

export default useStyles
