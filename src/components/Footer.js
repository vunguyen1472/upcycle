import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png"

const Footer = () => {
    return <Container className="py-5 border-top" fluid >
        <Container>
            <Navbar as={Row}>
                <Stack as={Col} xs={3} direction="vertical">
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} alt="brand-logo" height={60} width={60} className="me-3"/>
                    </Navbar.Brand>
                </Stack>
                <Container as={Col} xs={9} className="align-items-start">
                    <div className="px-3">
                        <h6 className="p-2">Hỗ trợ khách hàng</h6>
                        <Nav className="flex-column">
                            <Nav.Link>Hướng dẫn mua hàng Online</Nav.Link>
                            <Nav.Link>Hình thức thanh toán</Nav.Link>
                            <Nav.Link>Điều kiện cho tặng</Nav.Link>
                            <Nav.Link>Quy trình xử lí quần áo</Nav.Link>
                        </Nav>
                    </div>
                    <div className="px-3">
                        <h6 className="p-2">Công ty</h6>
                        <Nav className="flex-column">
                            <Nav.Link>Về chúng tôi</Nav.Link>
                            <Nav.Link>Điều khoản</Nav.Link>
                            <Nav.Link>Chính sách bảo mật</Nav.Link>
                            <Nav.Link>Trách nhiệm cộng đồng</Nav.Link>
                        </Nav>
                    </div>
                    <div className="px-3">
                        <h6 className="p-2">Kết nối với chúng tôi</h6>
                        <Nav>
                            
                        </Nav>
                    </div>
                </Container>
            </Navbar>  
        </Container>
    </Container>;
}
 
export default Footer;