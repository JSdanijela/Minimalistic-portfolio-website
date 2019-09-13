import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBAnimation} from 'mdbreact';
import "../index.css";


class Card extends React.Component  {

  render(){

    return (
  <div id="Services" className="row">
      <div className="col-lg-4 col-md-6 pt-3">
      <MDBAnimation reveal type="fadeInLeft">
         <MDBCard style={{background:"black", marginTop : "20px"}} className="card" >
          <MDBCardImage id="img" className="img-fluid" src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80" waves />
          <MDBCardBody id="border">
            <MDBCardTitle className="text-white">Shoping</MDBCardTitle>
            <MDBCardText>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </MDBCardText>
          <MDBBtn outline color="white">Book</MDBBtn>
          </MDBCardBody>
        </MDBCard>
         </MDBAnimation>
            </div>
  
             <div className="col-lg-4 col-md-6">
           <MDBAnimation reveal type="fadeInLeft">
               <MDBCard style={{background:"black", marginTop : "20px"}}  className="card">
          <MDBCardImage id="img" className="img-fluid" src="https://images.unsplash.com/photo-1536293283170-b4604bbe272f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" waves />
          <MDBCardBody id="border">
            <MDBCardTitle className="text-white">Photoshoots</MDBCardTitle>
            <MDBCardText>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </MDBCardText>
            <MDBBtn  outline color="white">Book</MDBBtn>
          </MDBCardBody>
        </MDBCard>
         </MDBAnimation>
            </div>
  
            <div  className="col-lg-4 col-md-6">
           <MDBAnimation reveal type="fadeInLeft">
              <MDBCard style={{background:"black", marginTop : "20px"}} className="card">
          <MDBCardImage id="img" className="img-fluid" src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" waves />
          <MDBCardBody id="border">
            <MDBCardTitle className="text-white">Planned outfits</MDBCardTitle>
            <MDBCardText>
             Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </MDBCardText>
         <MDBBtn  outline color="white">Book</MDBBtn>
          </MDBCardBody>
        </MDBCard>
         </MDBAnimation>
      </div>
      </div>
    )}
}
export default Card;