import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFormInline } from 'mdbreact';

interface WrapperComponentProps {
  children?: any;
}



const WrapperComponent = (props: WrapperComponentProps) => {

  return (
    <MDBNavbar color="indigo" dark expand="md">
    <MDBNavbarBrand>
      <strong className="white-text">Navbar</strong>
    </MDBNavbarBrand>
    <MDBNavbarToggler onClick={() => {}} />
    <MDBCollapse id="navbarCollapse3" isOpen={false} navbar>
      <MDBNavbarNav left>
        <MDBNavItem active>
          <MDBNavLink to="#!">Home</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#!">Features</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#!">Pricing</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <span className="mr-2">Dropdown</span>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem href="#!">Action</MDBDropdownItem>
              <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
              <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBFormInline waves>
            <div className="md-form my-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </MDBFormInline>
        </MDBNavItem>
      </MDBNavbarNav>


    </MDBCollapse>
  </MDBNavbar>
  );
};

const Wrapper = (WrappedComponent: any) => () => (
  <WrapperComponent>
    <WrappedComponent />
  </WrapperComponent>
);

export default Wrapper;
