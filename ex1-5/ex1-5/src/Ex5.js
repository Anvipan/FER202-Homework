import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/Usercard'; // Đổi tên thành ProductCard nhưng file vẫn là Usercard.js

export default function Exercise5() {
  // Dữ liệu đầu vào đề bài cung cấp
  const products = [
    { id: 1, name: "Laptop ASUS", inputPrice: 15000, outPrice: 18500, stock: 5 },
    { id: 2, name: "Chuột", inputPrice: 300, outPrice: 450, stock: 0 },
    { id: 3, name: "Bàn phím", inputPrice: 800, outPrice: 1200, stock: 10 },
    { id: 4, name: "Màn hình Dell", inputPrice: 3500, outPrice: 4200, stock: 2 }
  ];

  // State để lưu trữ kết quả tính toán
  const [analysis, setAnalysis] = useState({
    maxPriceProduct: null,
    minPriceProduct: null,
    sortedByProfit: [],
  });

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
    // Dùng spread operator [...] để tạo mảng mới, tránh thay đổi mảng productsWithProfit gốc
    const sortedByProfit = [...productsWithProfit].sort((a, b) => b.profit - a.profit);

    console.log("3. Danh sách sản phẩm theo lợi nhuận giảm dần:");
    console.table(sortedByProfit);

    // Cập nhật state để React render ra màn hình
    setAnalysis({
      maxPriceProduct,
      minPriceProduct,
      sortedByProfit,
    });

  }, []); // Mảng rỗng để useEffect chỉ chạy 1 lần

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1>Bài 5: Quản lý sản phẩm</h1>
        <p className="lead">Hiển thị kết quả phân tích và danh sách sản phẩm</p>
      </div>

      {/* YÊU CẦU 2: HIỂN THỊ SẢN PHẨM GIÁ CAO NHẤT/THẤP NHẤT */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <h2 className="mb-3">Phân tích giá bán</h2>
          <div className="card">
            <div className="card-body">
              {analysis.maxPriceProduct && (
                <p className="card-text fs-5">
                  <strong>Giá cao nhất:</strong> {analysis.maxPriceProduct.name} -
                  <span className="text-success fw-bold"> {analysis.maxPriceProduct.outPrice.toLocaleString()} VNĐ</span>
                </p>
              )}
              {analysis.minPriceProduct && (
                <p className="card-text fs-5">
                  <strong>Giá thấp nhất:</strong> {analysis.minPriceProduct.name} -
                  <span className="text-danger fw-bold"> {analysis.minPriceProduct.outPrice.toLocaleString()} VNĐ</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* YÊU CẦU 3: HIỂN THỊ DANH SÁCH SẮP XẾP THEO LỢI NHUẬN */}
      <div className="mb-5">
        <h2 className="mb-3">Sắp xếp theo lợi nhuận (giảm dần)</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá nhập</th>
              <th scope="col">Giá bán</th>
              <th scope="col">Lợi nhuận</th>
            </tr>
          </thead>
          <tbody>
            {analysis.sortedByProfit.map((product, index) => (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.inputPrice.toLocaleString()} VNĐ</td>
                <td>{product.outPrice.toLocaleString()} VNĐ</td>
                <td className="fw-bold text-primary">{product.profit.toLocaleString()} VNĐ</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* YÊU CẦU 1: HIỂN THỊ DANH SÁCH SẢN PHẨM */}
      <div>
        <h2 className="mb-3">Danh sách sản phẩm (Grid View)</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}