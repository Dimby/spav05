import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        boxOne: {
            textAlign: "center",
            color: "#006AB0",
            padding: "2rem 2rem 0.5rem 2rem",
            fontSize: "25px",
            backgroundColor: "#fff",
            boxShadow: "0px 1px rgba(0, 0, 0, 0.1)",
        },
        boxTwo: {
            margin: "2rem 3rem",
            // Here,  bloc left (image list)
            "& .listImage": {
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
                },
            },
            // Here, bloc right (Jereo koa item)
            "& .news": {
                "& .item": {
                    padding: "15px 20px",
                    "& :hover": {
                        transform: "scale(1.005)",
                        transition: "all 0.1s ease-in-out"
                    },
                    "& .content": {
                        maxHeight: "78px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        padding: "15px 20px",
                        boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)",
                        "& h2": {
                            padding: "0",
                            margin: "0"
                        }
                    },
                },
            }
        },
}));

export default useStyles;