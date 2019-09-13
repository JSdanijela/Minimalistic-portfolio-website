import React from "react";
import { MDBMask, MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

class Header extends React.Component {
  render() {
    return (
          <MDBMask style= {{width:"100vw", height:" 70vh"}} className=" d-flex justify-content-center align-items-center">
              <MDBContainer id="Home">
                <MDBRow>
                  <MDBCol md="12" className="mb-4 white-text text-center">

                   {/*TITLE*/}
                     <MDBAnimation type="fadeIn" duration="3s">
                        <h1 style={{marginTop: "20vh"}} className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">Francine Bernier</h1>
                     </MDBAnimation>
                      {/*LINE*/}
                     <MDBAnimation type="fadeInLeft" duration="1s">
                        <hr className="hr-light my-4" />
                     </MDBAnimation>
                     
                     {/*SUBTITLE*/}
                     
                    <MDBAnimation type="fadeIn" duration="2s">
                    <h5 className="mb-4 white-text " style={{fontSize:35}} id="font"><strong>fashion stylist</strong></h5>
                     </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
    );
  }
}

export default Header;