import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import logo from '../assets/images/logo.png'; 
import { FormControl } from "react-bootstrap";

const Sell = () => {
    const navigate = useNavigate();
    const [UploadedFile, setUploadedFile] = useState(logo);

    const handleUploadFile = (e) => {
        console.log(e.target.files);
        setUploadedFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleFormSubmit = () => {
        navigate('/confirmed');
    }

    return <div>
        <Header />
        <Container className="d-flex justify-content-center p-5">
            <Card style={{ width: '25rem', height: 'fit-content' }} className="p-3 mx-5">
                <Card.Body>
                    <Card.Title className="fs-2">Chụp hình túi đồ bạn muốn cho tặng</Card.Title>
                    <Card.Text>
                        Chỉ cần up hình túi đồ, bạn không cần chụp hình từng sản phẩm
                    </Card.Text>

                    <Card className="text-center bs-dashed cs-pointer">
                        <Card.Body className="p-2 text-center">
                            <img
                                alt=""
                                src={UploadedFile}
                                height="56"
                                className="d-inline-block align-top mb-2"
                            />
                            <input type="file" onChange={handleUploadFile}/>
                            
                        </Card.Body>
                    </Card>
                    
                </Card.Body>
            </Card>
            
            <div>
                <h3>Lựa chọn dịch vụ giao hàng</h3>
                <small style={{maxWidth: '16rem'}}>Bạn chọn hình thức vận chuyển tiện lợi nhất để gửi túi đồ về UpCycle</small>
                <Accordion defaultActiveKey="0" style={{maxWidth: '50rem'}} className="mt-3">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Shipper thu gom tại nhà</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <p>Trọng lượng túi đồ</p>
                                        <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="container-fluid justify-content-between px-0 gap-2">
                                            <ToggleButton value={1} id="tbg-radio-1" style={{fontSize: '12px'}}>
                                                1kg-5kg
                                            </ToggleButton>
                                            <ToggleButton value={2} id="tbg-radio-2" style={{fontSize: '12px'}}>
                                                6kg-10kg
                                            </ToggleButton>
                                            <ToggleButton value={3} id="tbg-radio-3" style={{fontSize: '12px'}}>
                                                11kg-15kg
                                            </ToggleButton>
                                            <ToggleButton value={3} id="tbg-radio-4" style={{fontSize: '12px'}}>
                                                16kg-20kg
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <p>Chọn thời gian shipper lấy hàng</p>
                                        <FormControl type="date"/>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <FloatingLabel
                                            controlId="floatingSelectGrid"
                                            label="Tỉnh/Thành phố"
                                        >
                                        <Form.Select aria-label="Floating label select example">
                                            <option hidden>Chọn</option>
                                            <option>Hà Nội</option>
                                            <option>Hồ Chí Minh</option>
                                            <option>Đà Nẵng</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <FloatingLabel
                                            label="Quận/Huyện"
                                        >
                                            <Form.Select aria-label="Floating label select example">
                                                <option hidden>Chọn</option>
                                                <option>Quận 1</option>
                                                <option>Quận 2</option>
                                                <option>Quận 3</option>
                                                <option>Quận 4</option>
                                                <option>Quận 5</option>
                                                <option>Quận 6</option>
                                                <option>Quận 7</option>
                                                <option>Quận 8</option>
                                                <option>Quận 9</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <FloatingLabel
                                        label="Phường/Xã"
                                    >
                                        <Form.Select aria-label="Floating label select example">
                                            <option hidden>Chọn</option>
                                            <option>Quận 1</option>
                                                <option>Phường 2</option>
                                                <option>Phường 3</option>
                                                <option>Phường 4</option>
                                                <option>Phường 5</option>
                                                <option>Phường 6</option>
                                                <option>Phường 7</option>
                                                <option>Phường 8</option>
                                                <option>Phường 9</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Địa chỉ cụ thể"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text"  />
                                    </FloatingLabel>
                                </Form.Group>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Số điện thoại"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text"/>
                                    </FloatingLabel>
                                </Form.Group>   

                                <Button type="submit" className="container-fluid" onClick={handleFormSubmit}>Xác nhận</Button>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Bạn chọn gửi trực tiếp về kho hoặc gửi về kho qua đơn vị chuyển phát nhanh (người gửi trả phí ship)
                        </Accordion.Header>
                        <Accordion.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Địa chỉ</Form.Label><br/>
                                <Form.Text id="passwordHelpBlock" muted>
                                    256-258 Lý Thường Kiệt, P14, Q10, TP.HCM
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Thời gian</Form.Label><br/>
                                <Form.Text id="passwordHelpBlock" muted>
                                    8h hàng ngày trên HTV3
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phí vận chuyển</Form.Label><br/>
                                <Form.Text id="passwordHelpBlock" muted>
                                    Free luôn em ơi
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit" className="container-fluid" onClick={handleFormSubmit}>Xác nhận</Button>
                        </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
        
        <Container fluid className='border-top mt-4'>
            <Footer />
        </Container>
    </div>;
}
 
export default Sell;