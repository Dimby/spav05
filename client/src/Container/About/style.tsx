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
        margin: "0 3rem",
        "& .root": {
            maxWidth: 345,
        },
        "& .media": {
            height: 140,
        },
        "& h1": {
            color: "#006AB0"
        },
        "& .cardBirao": {
            margin: "auto",
            height: '170px',
            "& .avatar": {
                width: "50px",
                height: "50px",
                border: "1px solid rgb(0 0 0 / 20%)"
            }
        }
    },
    bRed: {
        border: "1px solid red",
        padding: "20px"
    },
    item: {
        "& .menuItem": {
            marginBottom: "10px",
            "& :hover": {
                borderLeft: "3px solid #006AB0",
                padding: "0rem 0.5rem",
                transition: "all .1s ease-out",
            },
            "& a": {
                padding: "0rem 0.5rem",
                border: "0px solid transparent",
                cursor: "pointer",
                textDecoration: "none",
                color: "#006AB0"
            }
        }
    }
}));

export default useStyles;