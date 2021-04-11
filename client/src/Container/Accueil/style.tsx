import { makeStyles } from '@material-ui/core/styles';
import fond from '../../Images/fond-1.png';

const useStyles = makeStyles((theme) => ({
    boxOne: {
        backgroundImage: "url("+fond+")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    boxText: {
        width: "60%",
        color: "#fff",
        padding: "0 5rem",
        borderLeft: "5px solid #fff"
    },
    boxButton: {
        width: "60%",
        "&>a": {
            textDecoration: "none",
            padding: "11px 29px",
            borderWidth: 0,
            backgroundColor: "rgba(255 255 255 / 50%)",
            borderRadius: "5px",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointeur",
            "&:hover": {
                backgroundColor: "rgba(255 255 255 / 60%)",
            }
        }
    },
    boxTwo: {
        textAlign: "center",
        color: "#006AB0",
        padding: "3rem",
        fontSize: "36px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px rgba(0, 0, 0, 0.1)",
    },
    boxThree: {
        backgroundColor: "#E9EBEC",
        height: "800px",
        display: "flex",

    },
    boxThree1: {
        width: "30%",
        padding: "2rem",
        "& .content": {
            backgroundColor: "#fff",
            padding: "2rem 0rem",
            color: "#004D80",
            "& .boxVerset": {
                display: "flex",
                justifyContent: "center",
                "& .verset": {
                    padding: "20px",
                    width: "50%",
                    fontSize: "25px",
                    backgroundColor: "#f7f7f7"
                }
            }
        }
    },
    boxThree2: {
        width: "70%",
        padding: "2rem",
        "& .content": {
            backgroundColor: "#fff",
            padding: "1rem 2.5rem",
            color: "#004D80",
            "& h1": {
                borderBottom: "2px solid #004D80"
            },
            "& .quote": {
                display: "flex",
                justifyContent: "spaceBetween",
                "& .quoteContent": {
                    padding: "15px",
                    "& .profil": {
                        padding: "10px",
                        textAlign: "right"
                    }
                }
            }
        }
    },
    boxRed: {
        border: "1px solid red"
    }
}));

export default useStyles;