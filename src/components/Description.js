import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

function Description (){
	return(
  <MDBContainer id="description" style={{width:"100vw", marginTop: "10vh"}} className="col-11 text-center">
      <MDBRow>
      <MDBAnimation reveal type="fadeInLeft">
        <MDBCol >
        <h3>My Services</h3>
        <p>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
        Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
        purus sit amet fermentum.  Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
        purus sit amet fermentum.Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
        Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
        piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere.</p></MDBCol>
        </MDBAnimation>
      </MDBRow>
    </MDBContainer>


	)
}
export default Description;