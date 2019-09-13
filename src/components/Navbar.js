import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBAnimation} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-scroll";

class Navbar extends React.Component {
     state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "black", paddingBottom:0}}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="Nav">
        <Router>
          <header >
            <MDBNavbar id="nav" style={{width: "100vw"}} color="black"  dark expand="md" 
              fixed="top"
              >
                              <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} style={{overflow: "hidden"}} navbar>
                <MDBNavbarNav style={{marginRight:"30%", marginLeft:"30%"}} className="center">
                       <MDBAnimation type="fadeIn" duration="2s">
                  <MDBNavItem>
                       <Link 
                activeClass="active"
                to="Nav"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
                  </MDBNavItem>
                            </MDBAnimation>
                         <MDBAnimation type="fadeIn" duration="3s">
                                    <Link 
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
                            </MDBAnimation>
                         <MDBAnimation type="fadeIn" duration="4s">
                                    <Link 
                activeClass="active"
                to="Services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Services
              </Link>
                            </MDBAnimation>
                         <MDBAnimation type="fadeIn" duration="5s">
                                   <Link 
                activeClass="active"
                to="Footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
                            </MDBAnimation>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
                 {this.state.collapsed && overlay}
          </div>
    );
  }
}

export default Navbar;