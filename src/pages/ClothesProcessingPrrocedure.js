import { Image } from "react-bootstrap";
import clothes_processing_procedure from '../assets/images/clothes-processing-procedure.png'

const ClothesProcessingProcedure = () => {
    return <div className="container-fluid bg-black p-5">
        <Image 
            src={clothes_processing_procedure} alt="clothes processing procedure" fluid/>
    </div>;
}
 
export default ClothesProcessingProcedure;