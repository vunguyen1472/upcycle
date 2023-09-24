import Footer from "../components/Footer";
import Header from "../components/Header";

import responsibility from '../assets/images/responsibility.png'

const Responsibility = () => {
    return <>
        <Header />

        <div>
            <img 
                src={responsibility} 
                alt="responsibility of upcycle" 
                style={{
                    width: '100%',
                }}
            />
        </div>

        <Footer />
    </>;
}
 
export default Responsibility;