import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import '../assets/css/Login.css';

import logo from '../assets/images/logo.png';
import { CloseButton } from "react-bootstrap";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogIn = () => {
        localStorage.setItem('currentUser', username);
        navigate('/');
    }

    const handleUsernameInputChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordInputChange = (e) => {
        setPassword(e.target.value);
    }

    return <div className="wrapper d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center bg-white p-3 rounded">
            <CloseButton className="ms-auto"/>
            <img src={logo} alt="brand-logo" height={60} width={60}/>
            <p className="fs-5 mt-3 px-5">THAM GIA CÙNG UPCYCLE</p>
            <Form className='container-fluid mt-3'>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Nhập tên tài khoản" value={username} onChange={handleUsernameInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Nhập mật khẩu" value={password} onChange={handlePasswordInputChange}/>
                </Form.Group>

                <Button variant="primary" className='container mb-2' onClick={handleLogIn}>
                    Submit
                </Button>
            </Form>
        </div>
    </div>
}
 
export default Login;