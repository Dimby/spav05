import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style'
import logo from '../../Images/Logo25e.png';

interface WrapperComponentProps {
  children?: any;
}



const WrapperComponent = (props: WrapperComponentProps) => {
  const { children } = props;
  const classes = useStyles()
  const start = new Date();
  const years = start.getFullYear();

  return (
    <div>
      <div style={{background: "#006AB0", padding: "20px 0px"}}>
        <nav style={{display:"flex", justifyContent: "space-between", alignItems: "center", width: "90%", margin: "auto"}}>
          <div style={{color: "#fff"}}>
            <span className={classes.logo} style={{fontWeight: "bold"}}><img src={logo} width="9%" alt="" style={{margin: "0px 10px"}}/>
              <Link to="/" style={{position: "absolute", color: "#fff", fontWeight: "bold", textDecoration: "none"}}>SPAV5</Link>
            </span>
          </div>
          <div>
            
            <Link to="/" className={classes.navLink}>Fandraisana</Link>
            <Link to="/about" className={classes.navLink}>Mombamomba</Link>
            <Link to="/country" className={classes.navLink}>Faritra</Link>
            <Link to="/gallery" className={classes.navLink}>Sary</Link>
            <Link to="/contact" className={classes.navLink}>Fifandraisana</Link> 
          </div>
        </nav>
      </div>
    { children }
    <div style={{backgroundColor: "#006AB0", padding: "20px", marginTop: "40px", color: "#fff", textAlign: "center"}}>
      SPAV05 [ Synodamparitany Ambatondrazaka Vaovao 05 ] | Copyright {years} <br /><br />
      STATION FJKM Ambohimiangaly, Ambatondrazaka 503 <br />
      spav5fjkm@gmail.com
    </div>
  </div>
  );
};

const Wrapper = (WrappedComponent: any) => () => (
  <WrapperComponent>
    <WrappedComponent />
  </WrapperComponent>
);

export default Wrapper;
