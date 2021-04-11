import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxOne: {
        textAlign: "center",
        color: "#006AB0",
        padding: "2rem 2rem 0.5rem 2rem",
        fontSize: "30px",
        backgroundColor: "#fff",
        boxShadow: "0px 1px rgba(0, 0, 0, 0.1)",
    },
    boxTwo: {
        margin: "0 3rem"
    },
    bRed: {
        border: "1px solid red"
    },
    item: {
        "& .menuItem": {
            padding: "0rem 0.5rem",
            marginBottom: "10px",
            border: "3px solid transparent",
            "& :hover": {
                borderLeft: "3px solid #006AB0",
                padding: "0rem 0.5rem",
            },
            "& a": {
                cursor: "pointer",
                textDecoration: "none",
                color: "#006AB0"
            }
        }
    }
}));

export default useStyles;