import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Condition = () => {
    return <>
        <Header />

        <Container className="py-5">
            <h3>Điều kiện Ký gửi và Cho tặng</h3>

            <div className="mt-5" style={{fontSize: '1.2rem'}}>
                <h4>1. Những lưu ý về sản phẩm</h4>
                <p className="mt-3">Quần áo cho tặng: Chúng tôi không đặt yêu cầu về thương hiệu, và bạn có thể đóng góp bất kỳ sản phẩm thời trang nào mà bạn muốn tặng đi.</p>
                <p>Ngoài quần áo UPCYCLE còn có thể nhận các sản phẩm khác nếu bạn cần UPCYCLE xử lý chúng.</p>
            </div>

            <div className="mt-5" style={{fontSize: '1.2rem'}}>
                <h4>2. Điều khoản bắt buộc</h4>
                <p className="mt-3">Tất cả các sản phẩm đã được gửi cho UPCYCLE sẽ được sử dụng bởi UPCYCLE cho các mục đích khác mà không cần thông báo hoặc sự đồng ý từ phía người đóng góp.</p>
                <p>UPCYCLE có quyền từ chối nhận sản phẩm khi kiểm tra xác định rằng chúng không phù hợp với tiêu chí cho việc nhận sản phẩm quy định ở trên.</p>
            </div>
        </Container>
        
        <Footer />
    </>;
}
 
export default Condition;