import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

function Footer() {
  return (
    <MDBFooter id="Footer"  color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-md-left">
        <MDBRow id="Contact">
          <MDBCol md="4 pr-2">
    {/* CONTACT TEXT */}
            <h2 className="title">Contact</h2>
            <p>
              Feel free to contact me, and make sure to follow me on all my social media accounts.
            </p>
          </MDBCol>
        {/* ADRESS*/}
          <MDBCol  md="4 pr-4">
            <ul>
              <li className="list-unstyled">
                <h5><strong>Telephone</strong>: 111/2456-245</h5>
              </li>
              <li className="list-unstyled">
                    <h5><strong>Adress</strong>: 123 Example, USA Example</h5>
              </li>
              <li className="list-unstyled">
                     <h5><strong>E-mail</strong>: example@mail.com</h5>
              </li>
            </ul>
          </MDBCol>
        {/* SOCIAL MEDIA */}
                  <MDBCol md="4 pr-5">
            <ul>
              <li  className="list-unstyled">
                <a rel="noopener noreferrer" href="https://www.instagram.com/danijela.js/" target="_blank">  <MDBIcon fab size="2x" icon="instagram" /> </a>
              </li>
              <li className="list-unstyled">
                <a rel="noopener noreferrer" href="https://twitter.com/DanijelaJs" target="_blank"><MDBIcon fab size="2x" icon="twitter" /></a>
              </li>
              <li className="list-unstyled">
                <MDBIcon fab size="2x" icon="pinterest-p" />
              </li>
              <li className="list-unstyled">
                <MDBIcon fab size="2x" icon="facebook-f" />
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Danijela Fusko
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;