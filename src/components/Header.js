import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

import logo from '../assets/images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate(0);
    }

    return <Container className="border-bottom" fluid>
        <Container>
            <Navbar>
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} alt="brand-logo" height={60} width={60}/>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href='/sell' className="me-5">Cho tặng</Nav.Link>
                    
                    {localStorage.getItem("currentUser") && <NavDropdown title={localStorage.getItem("currentUser")}>
                        <NavDropdown.Item as={Nav.Link} href="/user" className="px-3">
                            Thông tin tài khoản
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout}>
                            Đăng xuất
                        </NavDropdown.Item>
                    </NavDropdown>}

                    {!localStorage.getItem("currentUser") && <Nav.Link href="/login">
                        <FontAwesomeIcon icon={faUser} className="me-3"/>
                        Đăng nhập/Đăng ký
                    </Nav.Link>}
                </Nav>
            </Navbar>
        </Container>
    </Container>;
}
 
export default Header;