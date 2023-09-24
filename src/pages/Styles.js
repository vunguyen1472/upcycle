import { Container, Image } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

import style1 from '../assets/images/styles1.jpg';
import style2 from '../assets/images/styles2.jpg';
import style3 from '../assets/images/styles3.jpg';
import style4 from '../assets/images/styles4.jpg';

const Styles = () => {
    return <>
        <Header />

        <Container className="py-5">
            <Image src={style1} alt="styles1" fluid/>
            <Image src={style2} alt="styles2" fluid className="mt-5"/>
            <Image src={style3} alt="styles3" fluid className="mt-5"/>
            <Image src={style4} alt="styles4" fluid className="mt-5"/>
        </Container>

        <Footer />
    </>;
}
 
export default Styles;