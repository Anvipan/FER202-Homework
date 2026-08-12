import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Toast, ToastContainer } from "react-bootstrap";
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';
// Import mảng data giả từ file data.js và đổi tên thành initialProducts
import { product as initialProducts } from "./data"; 

function App() {
  // 1. State lưu trữ danh sách sản phẩm (để trừ đi số lượng tồn kho)
  const [products, setProducts] = useState(initialProducts);
  
  // 2. State lưu số lượng hiển thị trên giỏ hàng góc trên cùng
  const [cartCount, setCartCount] = useState(0);
  
  // 3. State điều khiển thông báo Toast bật/tắt
  const [toast, setToast] = useState({ show: false, productName: "" });

  // Hàm xử lý chung khi người dùng bấm "Add to cart" ở thẻ sản phẩm
  const handleAddToCart = (productId) => {
    // Duyệt qua mảng sản phẩm, tìm đúng ID để trừ stock
    const updatedProducts = products.map((item) => {
      if (item.id === productId && item.stock > 0) {
        // Bật thông báo Toast góc phải dưới
        setToast({ show: true, productName: item.name });
        // Trừ stock đi 1
        return { ...item, stock: item.stock - 1 };
      }
      return item; // Giữ nguyên các sản phẩm khác không bị bấm
    });

    // Cập nhật lại UI bằng state mới
    setProducts(updatedProducts);
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      {/* Ném số lượng cartCount xuống cho Header */}
      <Header cartCount={cartCount} />
      <HeroBanner />
      
      {/* Ném data đã cập nhật và hàm xử lý xuống cho ProductList */}
      <ProductList products={products} onAddToCart={handleAddToCart} />
      
      <Footer />

      {/* Cấu hình Toast Notification */}
      <ToastContainer position="bottom-end" className="p-3" style={{ position: 'fixed', zIndex: 9999 }}>
        <Toast onClose={() => setToast({ ...toast, show: false })} show={toast.show} delay={3000} autohide bg="success">
          <Toast.Header>
            <strong className="me-auto text-success">Thành công</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Đã thêm <strong>{toast.productName}</strong> vào giỏ hàng!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default App;