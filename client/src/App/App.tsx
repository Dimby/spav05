import React from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBAlert, MDBCol, MDBContainer, MDBRow } from "mdbreact";

const App = () => {
  return <div>
    <MDBContainer>
      <MDBRow>
        <MDBCol className="block-example border border-dark">
          <MDBAlert color="primary" >
            A simple primary alert—check it out!
          </MDBAlert>
        </MDBCol>
        <MDBCol className="block-example my-class">One of three columns</MDBCol>
        <MDBCol className="block-example border border-dark">One of three columns</MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>;
};

export default App;
