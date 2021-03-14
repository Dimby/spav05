import { MDBBtn } from 'mdbreact';
import React, { FC } from 'react';
import styles from "./style";

const Accueil : FC = () => {
    return <div style={styles.border}>
        <MDBBtn color="primary">Primary</MDBBtn>
    </div>
}

export default Accueil;