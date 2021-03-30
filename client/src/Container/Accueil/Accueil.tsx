import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import useStyles from "./style";

const Accueil : FC = () => {
    const classes = useStyles()
    const height = "612px"
    return  <div>
        <div className={classes.boxOne} style={{height: height, zIndex: 2,}}>
            <div className={classes.boxText}>
                <p>
                    SYNODAMPARITANY AMBATONDRAZAKA VAOVAO
                </p>
                <h1 style={{fontSize: "70px", margin: 0}}>
                    FIANARANA AMIN'NY <br/>ASA TSARA.
                </h1>
                <h2>Tit. 2:7a</h2>
            </div>
            <div className={classes.boxButton}>
                <Link to="/">MOMBA NY SPAV5</Link>
            </div>
        </div>
        <div className={classes.boxTwo}>
            <div>
            TONGA SOA ETO AMIN'NY TRANONKALAM-PIFANDRAISAN'NY <br/> SYNODAMPARITANY AMBATONDRAZAKA VAOVAO
            </div>
            <p style={{fontSize: "18px"}}>
                "Mifalia mandrakariva ao amin'ny Tompo, hoy izaho indray, mifalia." Fil. 4:4
            </p>
        </div>
        <div className={classes.boxThree}>
            <div className={classes.boxThree1}>
                <div className="content">
                    <div style={{backgroundColor: "#F4C247", paddingLeft: "50px"}}>
                        <div style={{backgroundColor: "#fff", width: "50%", textAlign: "center", fontSize: "30px"}}>MOFON'AINA</div>
                    </div>
                    <div style={{padding: "30px", textAlign: "center"}}>Talata 02 Febroary 2021</div>
                    <div className="boxVerset" style={{textAlign: "center"}}>
                        <div className="verset">HEBREO 4 : 1 - 13</div>
                    </div>
                    <div style={{padding: "2rem 3rem", textAlign: "justify"}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Provident cupiditate aliquid dicta expedita, animi quo quis,
                        eum quam placeat facere veniam dolore quaerat nostrum?
                        Aut asperiores illo repellendus eligendi voluptatibus?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Provident cupiditate aliquid dicta expedita, animi quo quis,
                        eum quam placeat facere veniam dolore quaerat nostrum?
                        Aut asperiores illo repellendus eligendi voluptatibus?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Provident cupiditate aliquid dicta expedita, animi quo quis,
                        eum quam placeat facere veniam dolore quaerat nostrum?
                        Aut asperiores illo repellendus eligendi voluptatibus?
                    </div>
                </div>
            </div>
            <div className={classes.boxThree2}>
                <div className="content">
                    <h1>HAFATRY NY PRESIDENT SYNODAL</h1>
                    <div className="quote">
                        <div className="quoteIcon">
                            <svg style={{fill: "#004D80"}} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 18 18"><path d="M10 5v5h2.75L11 13h2.25L15 10V5h-5zm-7 5h2.75L4 13h2.25L8 10V5H3v5z"/></svg>
                        </div>
                        <div className="quoteContent">
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet reiciendis excepturi inventore quam rerum iusto itaque eaque dignissimos ratione, doloribus quisquam voluptatem aperiam eius minus vitae harum? Vero, in perspiciatis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet reiciendis excepturi inventore quam rerum iusto itaque eaque dignissimos ratione, doloribus quisquam voluptatem aperiam eius minus vitae harum? Vero, in perspiciatis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet reiciendis excepturi inventore quam rerum iusto itaque eaque dignissimos ratione, doloribus quisquam voluptatem aperiam eius minus vitae harum? Vero, in perspiciatis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet reiciendis excepturi inventore quam rerum iusto itaque eaque dignissimos ratione, doloribus quisquam voluptatem aperiam eius minus vitae harum? Vero, in perspiciatis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet reiciendis excepturi inventore quam rerum iusto itaque eaque dignissimos ratione, doloribus quisquam voluptatem aperiam eius minus vitae harum? Vero, in perspiciatis.
                            </div>
                            <div className="profil">--- PS RASOLONIRINA Robert, Mpitandrina FJKM</div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h1>VAOVAO FARANY</h1>
                </div>
            </div>
        </div>
    </div>
}

export default Accueil;