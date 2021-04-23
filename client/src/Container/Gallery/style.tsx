import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        boxOne: {
            textAlign: "center",
            color: "#006AB0",
            padding: "2rem 2rem 0.5rem 2rem",
            fontSize: "30px",
            backgroundColor: "#fff",
            boxShadow: "0px 1px rgba(0, 0, 0, 0.1)",
        },
        boxTwo: {
            margin: "2rem 3rem",
            "& .marginIcon": {
                padding: "12px",
            },
            "& .responsive": {
                padding: "0px 6px",
                float: "left",
                width: "90%",
                "& .gallery": {
                    border: "1px solid #ebebeb",
                    "& img": {
                        width: "100%",
                        height: "250px"
                    },
                    "& .desc": {
                        padding: "5px 15px",
                    }
                }
            }
        },
}));

export default useStyles;