import React, { useEffect } from 'react';

export default function Exercise5() {
  // Dữ liệu đầu vào đề bài cung cấp
  const products = [
    { id: 1, name: "Laptop ASUS", inputPrice: 15000, outPrice: 18500, stock: 5 },
    { id: 2, name: "Chuột", inputPrice: 300, outPrice: 450, stock: 0 },
    { id: 3, name: "Bàn phím", inputPrice: 800, outPrice: 1200, stock: 10 },
    { id: 4, name: "Màn hình Dell", inputPrice: 3500, outPrice: 4200, stock: 2 }
  ];

  useEffect(() => {
    console.log("=== BÀI 5: XỬ LÝ MẢNG SẢN PHẨM ===");

    // ---------------------------------------------------------
    // YÊU CẦU 1: Hiển thị danh sách kèm trạng thái Còn hàng / Hết hàng
    // Dùng hàm map() để lặp qua mảng và thêm một thuộc tính 'status' mới
    // ---------------------------------------------------------
    const productsWithStatus = products.map(product => ({
      ...product,
      status: product.stock > 0 ? "Còn hàng" : "Hết hàng"
    }));
    console.log("1. Danh sách sản phẩm kèm trạng thái:");
    console.table(productsWithStatus);


    // ---------------------------------------------------------
    // YÊU CẦU 2: Tìm sản phẩm có giá bán lớn nhất và nhỏ nhất
    // Dùng hàm reduce() để duyệt qua mảng và so sánh tìm max/min
    // ---------------------------------------------------------
    const maxPriceProduct = products.reduce((max, product) => 
      product.outPrice > max.outPrice ? product : max
    , products[0]); // Lấy sản phẩm đầu tiên làm mốc so sánh ban đầu

    const minPriceProduct = products.reduce((min, product) => 
      product.outPrice < min.outPrice ? product : min
    , products[0]);

    console.log("2. Sản phẩm giá bán cao nhất:", maxPriceProduct.name, `(${maxPriceProduct.outPrice})`);
    console.log("   Sản phẩm giá bán thấp nhất:", minPriceProduct.name, `(${minPriceProduct.outPrice})`);


    // ---------------------------------------------------------
    // YÊU CẦU 3: Sắp xếp theo lợi nhuận giảm dần
    // Công thức: Lợi nhuận (profit) = Giá bán (outPrice) - Giá nhập (inputPrice)
    // ---------------------------------------------------------
    // Tính lợi nhuận và nhét vào mảng mới
    const productsWithProfit = products.map(product => ({
      ...product,
      profit: product.outPrice - product.inputPrice
    }));

    // Dùng sort() để sắp xếp mảng vừa tính giảm dần
    // b.profit - a.profit: Giảm dần | a.profit - b.profit: Tăng dần
    const sortedByProfit = productsWithProfit.sort((a, b) => b.profit - a.profit);
    
    console.log("3. Danh sách sản phẩm theo lợi nhuận giảm dần:");
    console.table(sortedByProfit);

  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Bài 5: Quản lý sản phẩm</h2>
      <p>Mở Console để xem kết quả</p>
    </div>
  );
}