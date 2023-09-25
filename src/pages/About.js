import '../assets/css/About.css'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";

import { 
    Container
} from "react-bootstrap";

const About = () => {
    return <>
        <Header />

        <Container className="py-5">
            <div>
                <h4 className="text-center">Giới thiệu về UpCycle</h4>
                <div 
                    className="mt-3"
                    style={{
                        fontSize: '1.25rem',
                    }}
                >
                    <p>Câu chuyện bắt đầu từ một nhóm sinh viên trẻ đến từ trường Đại học Sư phạm kỹ thuật thành phố Hồ Chí Minh với niềm đam mê với thời trang xanh.</p>
                    <p>“Tôi là một người rất yêu thích thời trang và việc bảo vệ môi trường. Vì vậy, tôi lựa chọn thời trang XANH”.</p>
                    <p>"Thật phí phạm khi cứ để những bộ áo quần treo không trên móc, tôi sẽ thấy vui và hạnh phúc hơn nếu có ai đó mặc thay tôi".</p>
                    <p>"Chúng ta thật may mắn khi vẫn còn sống trên đời, và sẽ thật may mắn hơn khi ta còn có thể cho đi".</p>
                    <p>"Tôi đang tập sống theo lối sống tối giản, tôi luôn muốn tối ưu không gian sống của mình, với những món đồ đang còn sử dụng được tôi không muốn lãng phí và cũng không muốn vứt đi, đặc biệt là những bộ quần áo. Vì thế khi tìm được UPCYCLE, tôi đã giải quyết được vấn đề của mình"</p>
                    <p>Vâng, thực tế không chỉ một, mà là một vài lý do, như bạn đã thấy. Những nguyên nhân này chính là nguồn động viên mạnh mẽ đằng sau quyết định của một nhóm bạn vô cùng tham vọng và lạc quan quyết định hình thành nên UPCYCLE.</p>
                    <p>Và đây là năm 2023.</p>
                    <p>Tương tự như tất cả người dân Việt Nam khác, chúng tôi mang trong mình nhiều ước mơ và quyết tâm. Mỗi ngày, chúng tôi không ngừng tự đặt câu hỏi về những khó khăn trong cuộc sống hàng ngày và cách vượt qua chúng. Đồng thời, mỗi ngày trôi qua, niềm tin của chúng tôi vào một tương lai với sự xuất hiện của UPCYCLE cũng ngày càng tăng lên.</p>
                </div>
            </div>
            <div className="mt-5">
                <h4 className="text-center">Thông tin về công ty</h4>
                <p 
                    className="mt-3"
                    style={{
                        fontSize: '1.25rem',
                    }}
                >
                    Địa chỉ: 01 Võ Văn Ngân, Linh Chiểu, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
                </p>
            </div>
            <div className="mt-5">
                <h4 className="text-center">Văn phòng UpCycle</h4>
                <div
                    className="mt-3"
                    style={{
                        fontSize: '1.25rem',
                    }}
                >
                    <Map />
                </div>
            </div>
            
        </Container>

        <Footer />
    </>;
}
 
export default About;