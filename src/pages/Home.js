import { useState } from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import Header from "../components/Header";
import Footer from "../components/Footer";

import main1 from '../assets/images/main-content-1.png';
import main2 from '../assets/images/main-content-2.png';

const Home = () => {
    const [cards, setCards] = useState([
        {
            id: "card-1", 
            question: "QUẦN ÁO CỦA TÔI SAU CHO TẶNG SẼ ĐƯỢC SỬ DỤNG VÀO MỤC ĐÍCH GÌ?",
            answer: "Quần áo UPCYCLE nhận được từ mọi người cho tặng sẽ được tiến hành phân loại để xác định lại sản phẩm nào có thể tái sử dụng, không thể tái sử dụng sẽ được xử lý tái chế hoặc xử lý không phát thải có trách nhiệm. Sản phẩm có thể tái sử dụng UPCYCLE sẽ phân phát theo 2 hình thức. Một là bán lại cho shop ký gửi, hai là gửi tặng các tổ chức thiện nguyện.",
            isOpen: false
        },
        {
            id: "card-2", 
            question: "UPCYCLE XỬ LÝ QUẦN ÁO KHÔNG PHÁT THẢI NHƯ THẾ NÀO?",
            answer: "Các sản phẩm quần áo không có thể tái sử dụng hoặc tái chế thì sẽ được UPCYCLE chuyển quá cho đối tác INSEE ECO (https://www.inseeecocycle.com) để xử lý không phát thải CO2, không chôn lấp, không tạo ra xỉ dư thừa thải ra môi trường.",
            isOpen: false
        },
        {
            id: "card-3", 
            question: "UPCYCLE CÓ PHẢI LÀ TỔ CHỨC TỪ THIỆN HAY HOẠT ĐỘNG TỪ THIỆN HAY KHÔNG?",
            answer: "UPCYCLE xác định mình là một doanh nghiệp và định hướng phát triển theo mô hình kinh tế tuần hoàn có trách nhiệm xã hội. UPCYCLE không tổ chức hoạt động từ thiện hay kêu gọi từ thiện mà UPCYCLE thông qua hình thức liên kết, đồng hành và tài trợ cho các Tổ chức, cá nhân hoạt động từ thiện. Các hoạt động liên quan sẽ được UPCYCLE cập nhật và công bố trên các kênh truyền thông Zalo & Fanpage của UPCYCLE.",
            isOpen: false
        },
        {
            id: "card-4", 
            question: "TÔI CÓ PHẢI CHỤP HÌNH TỪNG SẢN PHẨM ĐỂ UP LÊN UPCYCLE KHÔNG?",
            answer: "Đối với dịch vụ Cho tặng bạn chỉ cần chụp túi đồ là được, không cần chụp từng sản phẩm. Mục đích của việc này là để bên vận chuyển ước chừng số lượng mang theo túi vận chuyển phù hợp.            ",
            isOpen: false
        },
        {
            id: "card-5", 
            question: "UPCYCLE NHẬN CHO TẶNG NHỮNG GÌ?",
            answer: "UPCYCLE nhận cho tặng tất cả các sản phẩm thời trang còn sử dụng được bao gồm: quần, áo, giày dép, túi xách,... UPCYCLE không nhận cho tặng quần áo lót, các mặt hàng quá bẩn, quá cũ hoặc đồ nhạy cảm.",
            isOpen: false
        },
        {
            id: "card-6", 
            question: "NẾU TÔI Ở TÌNH THÀNH KHÁC KHÔNG PHẢI Ở THỦ ĐỨC THÌ CÓ CHO TẶNG ĐƯỢC CHO UPCYCLE KHÔNG?",
            answer: "UPCYCLE nhận Cho tặng toàn quốc, nếu bạn không ở Thủ Đức thì phiền bạn gửi ship về UPCYCLE theo địa chỉ Kho UPCYCLE…",
            isOpen: false
        },
        {
            id: "card-7", 
            question: "SAU BAO LÂU KHI TẠO ĐƠN CHO TẶNG THÀNH CÔNG SHIPPER SẼ ĐẾN NHẬN ĐỒ?",
            answer: "Thời gian shipper đến nhận đồ cho tặng tùy thuộc vào khoảng cách của bạn đến Kho UPCYCLE. Trung bình thời gian nhận hàng từ … đến … giờ, shipper sẽ liên hệ bạn để nhận đồ. Các phát sinh hoặc hẹn lịch nhận các shipper sẽ chủ động gọi điện xác nhận cho bạn. ",
            isOpen: false
        },
        {
            id: "card-8", 
            question: "TÔI CÓ THỂ MANG ĐỒ TRỰC TIẾP ĐẾN UPCYCLE ĐƯỢC KHÔNG?",
            answer: "Nếu bạn không phiền có thể mang trực tiếp đến Kho UPCYCLE…",
            isOpen: false
        },
        // {
        //     id: "card-9", 
        //     question: "This is the question for card 9",
        //     answer: "This is the answer for card 9",
        //     isOpen: false
        // },
        // {
        //     id: "card-10", 
        //     question: "This is the question for card 10",
        //     answer: "This is the answer for card 10",
        //     isOpen: false
        // }
    ]);

    const triggerCard = (cardID) => {

        const newCards = cards.map(card => card.id === cardID ? {...card, isOpen: !card.isOpen} : {...card});

        setCards(newCards);
    }

    return <>
        <Header />

        <Container className="py-5">
            <Container className="px-5">
                <Image src={main1} fluid/>
                <Image src={main2} fluid/>
                {/* <Image src={main3} fluid className="mt-5"/>
                <Image src={main4} fluid className="mt-5"/> */}
            </Container>

            <Container className="py-5 text-center">
                <p className="fs-3 mb-0 fw-bold">FAQ</p>
                <p className="fs-3">CÂU HỎI THƯỜNG GẶP</p>
                <Stack direction="horizontal" className="justify-content-between">
                    <Stack direction="vertical" gap={3} className="align-items-center">
                        {cards.slice(0, 3).map((card) => (
                            <Card
                                key={card.id}
                                bg='success'
                                text='white'
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Header 
                                    as={Button} 
                                    variant="success"
                                    onClick={() => {triggerCard(card.id)}}
                                    aria-controls={card.id}
                                    aria-expanded={card.isOpen}
                                    className="fw-bold bg-success bg-gradient"
                                >
                                    {card.question}
                                </Card.Header>
                                <Collapse in={card.isOpen}>
                                    <Card.Body id={card.id}>
                                        <Card.Text><small>{card.answer}</small></Card.Text>
                                    </Card.Body>
                                </Collapse>
                            </Card>        
                        ))}
                    </Stack>
                    <Stack direction="vertical" gap={3} className="align-items-center">
                        {cards.slice(3, 6).map((card) => (
                            <Card
                                key={card.id}
                                bg='success'
                                text='white'
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Header 
                                    as={Button} 
                                    variant="success"
                                    onClick={() => {triggerCard(card.id)}}
                                    aria-controls={card.id}
                                    aria-expanded={card.isOpen}
                                >
                                    {card.question}
                                </Card.Header>
                                <Collapse in={card.isOpen}>
                                    <Card.Body id={card.id}>
                                        <Card.Text>{card.answer}</Card.Text>
                                    </Card.Body>
                                </Collapse>
                            </Card>        
                        ))}
                    </Stack>
                    <Stack direction="vertical" gap={3} className="align-items-center">
                        {cards.slice(6, 8).map((card) => (
                            <Card
                                key={card.id}
                                bg='success'
                                text='white'
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Header 
                                    as={Button} 
                                    variant="success"
                                    onClick={() => {triggerCard(card.id)}}
                                    aria-controls={card.id}
                                    aria-expanded={card.isOpen}
                                >
                                    {card.question}
                                </Card.Header>
                                <Collapse in={card.isOpen}>
                                    <Card.Body id={card.id}>
                                        <Card.Text>{card.answer}</Card.Text>
                                    </Card.Body>
                                </Collapse>
                            </Card>        
                        ))}
                    </Stack>
                    {/* <Stack direction="vertical" gap={3}>
                        {cards.slice(8, 10).map((card) => (
                            <Card
                                key={card.id}
                                bg='success'
                                text='white'
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Header 
                                    as={Button} 
                                    variant="success"
                                    onClick={() => {triggerCard(card.id)}}
                                    aria-controls={card.id}
                                    aria-expanded={card.isOpen}
                                >
                                    {card.question}
                                </Card.Header>
                                <Collapse in={card.isOpen}>
                                    <Card.Body id={card.id}>
                                        <Card.Text>{card.answer}</Card.Text>
                                    </Card.Body>
                                </Collapse>
                            </Card>        
                        ))}
                    </Stack> */}
                </Stack>
            </Container>
        </Container>

        <Footer />
    </>;
}
 
export default Home;