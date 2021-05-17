import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxOne: {
        textAlign: "center",
        color: "#006AB0",
        padding: "2rem 2rem 0.5rem 2rem",
        fontSize: "25px",
        backgroundColor: "#fff",
        boxShadow: "0px 1px rgba(0, 0, 0, 0.1)",
    },
    boxTwo: {
        "& .root": {
            '& .MuiTextField-root': {
                margin: theme.spacing(2),
                width: '35ch',
            },
            "& .button": {
                margin: "10px 20px",
            },
        },
        "& .chipsItem": {
            backgroundColor: "#fff",
            padding: "10px", marginBottom: "10px"
        }
    }
}));

export default useStyles;