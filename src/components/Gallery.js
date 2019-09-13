import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./gallery.css";
import { Link } from "react-scroll";

class Gallery extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=362&q=80',
      'https://images.unsplash.com/photo-1533628499718-2127dab955c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
      'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1439158771502-46975f6e44e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
      'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
      'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      'https://images.unsplash.com/photo-1528791067602-aee628b626fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1552160753-117159821e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1550402537-6f7b6189b3b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      'https://images.unsplash.com/photo-1551621955-fa07d4b1376b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    ],
    colWidth: [3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3]
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

      //Maps through images
    return images.map((imageSrc, index) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md={this.state.colWidth[index]} key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              id="img"
              className="img-fluid z-depth-1"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBAnimation reveal type="fadeIn">
      <MDBContainer style={{width: "100vw"}} id="Gallery"  className="mt-5 p-3" >
        <div className="mdb-lightbox p-3">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}

      {/*Arrow that takes you to the top of the page*/}
              <MDBCol id="Arrow">
              <Link 
                activeClass="active"
                to="Nav"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >

           <MDBAnimation type="fadeInUp" infinite duration="4s" delay="1s"><MDBIcon icon="angle-up" size="3x"/> </MDBAnimation>
              </Link>
      </MDBCol>
      </MDBContainer >
       </MDBAnimation>
    );
  }
}

export default Gallery;