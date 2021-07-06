import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logo: {
        
    },
    navLink: {
        color: "#fff",
        textDecoration: "none",
        padding: "5px 20px",
        "&:hover": {
            textDecoration: "none",
            transition: "all 0.2s ease-in-out",
            backgroundColor: "rgb(252, 252, 253, 0.2)",
            borderRadius: "4px",
        },
        "&:before": {
            content: '',
            position: "absolute",
            height: "5px",
            backgroundColor: "#fff",
            borderRadius: "4px",
            width: "35px",
            transition: "all .5s ease-in-out"
        }
    },
    
}));

export default useStyles;

