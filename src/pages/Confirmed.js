import { useNavigate } from "react-router-dom";

import { Button, Container } from "react-bootstrap";

import Footer from "../components/Footer";
import Header from "../components/Header";

import logo from '../assets/images/logo.png';

const Confirmed = () => {
    const navigate = useNavigate()
    return <div>
        <Header />

        <Container className="d-flex flex-column align-items-center mt-5">
            <img src={logo} alt="logo" height='200' width='200'/>
            <p className="fs-2">Đơn hàng của bạn đã được xác nhận</p>
            <Button onClick={() => {navigate('/')}}>Trở về trang chủ</Button>
        </Container>

        <Container fluid className="border-top fixed-bottom"> 
            <Footer />
        </Container>
    </div>;
}
 
export default Confirmed;