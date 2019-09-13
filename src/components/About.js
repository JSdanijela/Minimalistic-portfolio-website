import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import woman from './woman.jpg';

function About() {
  return (
        <MDBContainer id="About" style={{width:"100vw", marginTop: "30vh"}} className="w-100">
      <MDBRow>
       {/*IMAGE*/}
        <MDBCol className="col-12 col-sm-12 col-lg-5">
         <MDBAnimation reveal type="fadeInLeft" duration="2s">
            <img  src={woman} style={{marginLeft: 0}}  className="img-fluid" alt="" />
             </MDBAnimation>
          </MDBCol>
                   {/*ABOUT*/}
                  <MDBCol style={{marginTop: 25}} className="col-12 col-sm-12 col-lg-5 text-center">
                   <MDBAnimation reveal type="fadeInRight" duration="2s">
        <h4><strong style={{marginBottom: 25}}>Hi, I'm Francine Bernier</strong></h4><p className="text-center">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
        Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
        purus sit amet fermentum.  Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
        purus sit amet fermentum.Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
        Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p>
         </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default About;