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
            question: "This is the question for card 1",
            answer: "This is the answer for card 1",
            isOpen: false
        },
        {
            id: "card-2", 
            question: "This is the question for card 2",
            answer: "This is the answer for card 2",
            isOpen: false
        },
        {
            id: "card-3", 
            question: "This is the question for card 3",
            answer: "This is the answer for card 3",
            isOpen: false
        },
        {
            id: "card-4", 
            question: "This is the question for card 4",
            answer: "This is the answer for card 4",
            isOpen: false
        },
        {
            id: "card-5", 
            question: "This is the question for card 5",
            answer: "This is the answer for card 5",
            isOpen: false
        },
        {
            id: "card-6", 
            question: "This is the question for card 6",
            answer: "This is the answer for card 6",
            isOpen: false
        },
        {
            id: "card-7", 
            question: "This is the question for card 7",
            answer: "This is the answer for card 7",
            isOpen: false
        },
        {
            id: "card-8", 
            question: "This is the question for card 8",
            answer: "This is the answer for card 8",
            isOpen: false
        },
        {
            id: "card-9", 
            question: "This is the question for card 9",
            answer: "This is the answer for card 9",
            isOpen: false
        },
        {
            id: "card-10", 
            question: "This is the question for card 10",
            answer: "This is the answer for card 10",
            isOpen: false
        }
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
                    <Stack direction="vertical" gap={3}>
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
                    <Stack direction="vertical" gap={3}>
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
                    <Stack direction="vertical" gap={3}>
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
                    <Stack direction="vertical" gap={3}>
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
                    </Stack>


                    
                </Stack>
            </Container>
        </Container>

        <Footer />
    </>;
}
 
export default Home;