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
import FormControl from "react-bootstrap/FormControl";

import Map from "../components/Map";

import logo from '../assets/images/logo.png'; 
// import MapComponent from "../components/MapComponent";

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
                <Accordion defaultActiveKey="0" style={{width: '52rem'}} className="mt-3">
                    
                <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Bạn chọn gửi trực tiếp về kho hoặc gửi về kho qua đơn vị chuyển phát nhanh (người gửi trả phí ship)
                        </Accordion.Header>
                        <Accordion.Body>
                            <Map />
                            <Form className="mt-3">
                                <Form.Group className="mb-3">
                                    <FloatingLabel
                                        label="Chọn TPBank LiveBank gần nhất"
                                    >
                                        <Form.Select>
                                            <option>Địa chỉ LiveBank 1</option>
                                            <option>Địa chỉ LiveBank 2</option>
                                            <option>Địa chỉ LiveBank 3</option>
                                            <option>Địa chỉ LiveBank 4</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <FloatingLabel
                                        label="Thời gian dự kiến bạn đến gửi hàng"
                                    >
                                        <Form.Control type="time" />
                                    </FloatingLabel>
                                </Form.Group>
                                <Button type="submit" className="container-fluid" onClick={handleFormSubmit}>Xác nhận</Button>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Shipper thu gom tại nhà</Accordion.Header>
                        <Accordion.Body as={Form}>
                            <Form.Group className="mb-3">
                                <Form.Label>Trọng lượng túi đồ</Form.Label>
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="container-fluid justify-content-between px-0 gap-3">
                                    <ToggleButton value={1} id="tbg-radio-1">
                                        1kg-5kg
                                    </ToggleButton>
                                    <ToggleButton value={2} id="tbg-radio-2">
                                        6kg-10kg
                                    </ToggleButton>
                                    <ToggleButton value={3} id="tbg-radio-3">
                                        11kg-15kg
                                    </ToggleButton>
                                    <ToggleButton value={3} id="tbg-radio-4">
                                        16kg-20kg
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <FloatingLabel
                                    label="Chọn thời gian shipper lấy hàng"
                                >
                                    <Form.Select aria-label="Floating label select example">
                                        <option>0h - 1h</option>
                                        <option>1h - 2h</option>
                                        <option>2h - 3h</option>
                                        <option>3h - 4h</option>
                                        <option>4h - 5h</option>
                                        <option>5h - 6h</option>
                                        <option>6h - 7h</option>
                                        <option>7h - 8h</option>
                                        <option>8h - 9h</option>
                                        <option>9h - 10h</option>
                                        <option>10h - 11h</option>
                                        <option>11h - 12h</option>
                                        <option>12h - 13h</option>
                                        <option>13h - 14h</option>
                                        <option>14h - 15h</option>
                                        <option>15h - 16h</option>
                                        <option>16h - 17h</option>
                                        <option>17h - 18h</option>
                                        <option>18h - 19h</option>
                                        <option>19h - 20h</option>
                                        <option>20h - 21h</option>
                                        <option>21h - 22h</option>
                                        <option>22h - 23h</option>
                                        <option>23h - 0h</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Địa chỉ cụ thể"
                                >
                                    <Form.Control type="text" placeholder="01 Võ Văn Ngân, Linh Chiểu, Thủ Đức"  />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <FloatingLabel
                                    label="Chọn TPBank LiveBank gần nhất"
                                >
                                    <Form.Select>
                                        <option>Địa chỉ LiveBank 1</option>
                                        <option>Địa chỉ LiveBank 2</option>
                                        <option>Địa chỉ LiveBank 3</option>
                                        <option>Địa chỉ LiveBank 4</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Button type="submit" className="container-fluid" onClick={handleFormSubmit}>Xác nhận</Button>
                            {/* <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} xs={8}>
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
                                        <FloatingLabel
                                            label="Chọn thời gian shipper lấy hàng"
                                        >
                                            <Form.Select aria-label="Floating label select example">
                                                <option>0h - 1h</option>
                                                <option>1h - 2h</option>
                                                <option>2h - 3h</option>
                                                <option>3h - 4h</option>
                                                <option>4h - 5h</option>
                                                <option>5h - 6h</option>
                                                <option>6h - 7h</option>
                                                <option>7h - 8h</option>
                                                <option>8h - 9h</option>
                                                <option>9h - 10h</option>
                                                <option>10h - 11h</option>
                                                <option>11h - 12h</option>
                                                <option>12h - 13h</option>
                                                <option>13h - 14h</option>
                                                <option>14h - 15h</option>
                                                <option>15h - 16h</option>
                                                <option>16h - 17h</option>
                                                <option>17h - 18h</option>
                                                <option>18h - 19h</option>
                                                <option>19h - 20h</option>
                                                <option>20h - 21h</option>
                                                <option>21h - 22h</option>
                                                <option>22h - 23h</option>
                                                <option>23h - 0h</option>
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
                            </Form> */}
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