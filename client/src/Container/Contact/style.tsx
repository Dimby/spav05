import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxOne: {
        "& .root": {
            '& .MuiTextField-root': {
                margin: theme.spacing(2),
                width: '35ch',
            },
            "& .button": {
                margin: "10px 20px",
            },
        }
    }
}));

export default useStyles;