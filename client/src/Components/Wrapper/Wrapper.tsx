import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style'
import logo from '../../Images/logoSPAV05.png';

interface WrapperComponentProps {
  children?: any;
}



const WrapperComponent = (props: WrapperComponentProps) => {
  const { children } = props;
  const classes = useStyles()

  return (
    <div>
      <div style={{background: "#006AB0", padding: "20px 0px"}}>
        <nav style={{display:"flex", justifyContent: "space-between", width: "90%", margin: "auto"}}>
          <div style={{color: "#fff"}}>
            <span className={classes.logo} style={{fontWeight: "bold"}}><img src={logo} width="12%" alt="" style={{margin: "0px 10px"}}/>
              <Link to="/" style={{position: "absolute", color: "#fff", fontWeight: "bold", textDecoration: "none"}}>SPAV5</Link>
            </span>
          </div>
          <div>
            
            <Link to="/" className={classes.navLink}>Fandraisana</Link>
            <Link to="/" className={classes.navLink}>Mombamomba</Link>
            <Link to="/" className={classes.navLink}>Faritra</Link>
            <Link to="/" className={classes.navLink}>Sary</Link>
            <Link to="/" className={classes.navLink}>Fifandraisana</Link> 
          </div>
        </nav>
      </div>
    { children }
  </div>
  );
};

const Wrapper = (WrappedComponent: any) => () => (
  <WrapperComponent>
    <WrappedComponent />
  </WrapperComponent>
);

export default Wrapper;
