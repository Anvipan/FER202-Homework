import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Exercise5() {
  return (
    <div className="container-fluid p-0">
      {/* =====================================================================
          GIAO DIỆN 1: LET'S TEST THE GRID (Test hệ thống Grid cơ bản)
          ===================================================================== */}
      <div className="bg-light p-4 mb-4">
        <h1 className="mb-4">Let's test the grid!</h1>
        {/* Container dùng để giới hạn chiều rộng của grid */}
        <div className="container border bg-secondary bg-opacity-25 p-0">
          {/* Hàng 1: 2 cột bằng nhau */}
          <div className="row g-0 border-bottom border-dark">
            <div className="col border-end border-dark p-2">First col</div>
            <div className="col p-2">Second col</div>
          </div>
          {/* Hàng 2: 3 cột bằng nhau */}
          <div className="row g-0 border-bottom border-dark">
            <div className="col border-end border-dark p-2">col</div>
            <div className="col border-end border-dark p-2">col</div>
            <div className="col p-2">col</div>
          </div>
          {/* Hàng 3: 4 cột bằng nhau */}
          <div className="row g-0">
            <div className="col border-end border-dark p-2">col</div>
            <div className="col border-end border-dark p-2">col</div>
            <div className="col border-end border-dark p-2">col</div>
            <div className="col p-2">col</div>
          </div>
        </div>
        {/* Footer của grid 1 */}
        <div className="text-center bg-secondary bg-opacity-50 mt-4 p-2">
          <h2>Created by ABC!</h2>
        </div>
      </div>

      <hr className="my-5 border-5 border-primary" />

      {/* =====================================================================
          GIAO DIỆN 2: MY FIRST BOOTSTRAP PAGE (3 Cột chứa Logo HTML5, CSS3, Bootstrap)
          Sử dụng FontAwesome Icon size khổng lồ thay cho ảnh tải về
          ===================================================================== */}
      <div className="bg-light p-4 text-center mb-4">
        <h2 className="mb-5">My First Bootstrap Page</h2>
        <div className="container">
          <div className="row justify-content-center">
            {/* Logo HTML5 màu cam */}
            <div className="col-md-3">
              <img src="images/html5.png" alt="HTML5 Logo" height="150" />
            </div>
            {/* Logo CSS3 màu xanh */}
            <div className="col-md-3">
              <img src="images/css3.png" alt="CSS3 Logo" height="150" />
            </div>
            {/* Logo Bootstrap màu tím */}
            <div className="col-md-3">
              <img src="images/bootstrap.png" alt="Bootstrap Logo" height="150" />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5 border-5 border-primary" />

      {/* =====================================================================
          GIAO DIỆN 3: NAVBAR + GRID (Nav Links + Bảng Grid lặp lại)
          ===================================================================== */}
      <div className="bg-light p-4 mb-4">
        <h1 className="mb-4">Let's test the grid!</h1>
        {/* Navigation list chuẩn Bootstrap 5 */}
        <ul className="nav mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        {/* Copy lại Grid của Giao diện 1 */}
        <div className="container border bg-secondary bg-opacity-25 p-0">
          <div className="row g-0 border-bottom border-dark">
            <div className="col border-end border-dark p-2">First col</div>
            <div className="col p-2">Second col</div>
          </div>
          <div className="row g-0 border-bottom border-dark">
            <div className="col border-end border-dark p-2">col</div>
            <div className="col border-end border-dark p-2">col</div>
            <div className="col p-2">col</div>
          </div>
          <div className="row g-0">
            <div className="col border-end border-dark p-2">col</div>
            <div className="col border-end border-dark p-2">col</div>
            <div className="col border-end border-dark p-2">col</div>
            <div className="col p-2">col</div>
          </div>
        </div>
        <div className="text-center bg-secondary bg-opacity-50 mt-4 p-2">
          <h2>Created by ABC!</h2>
        </div>
      </div>

      <hr className="my-5 border-5 border-primary" />

      {/* =====================================================================
          GIAO DIỆN 4: FPT UNIVERSITY ABOUT PAGE
          ===================================================================== */}
      <div className="mb-4">
        {/* Header màu cam chứa Logo và menu */}
        <div
          style={{ backgroundColor: "#f37021" }}
          className="text-center py-4 text-white"
        >
          <div className="bg-white d-inline-block p-3 mb-2">
            <img
              src="images/fpt.png"
              height="150"
            />
          </div>
          <div>
            <span className="mx-2">Home</span>
            <span className="mx-2">About</span>
            <span className="mx-2">Contact</span>
          </div>
        </div>

        {/* Nội dung trang About & Contact */}
        <div className="container text-center py-5">
          <h2 className="fw-bold mb-3">About</h2>
          <p className="mb-5">This is the about section of the website.</p>

          <h2 className="fw-bold mb-3">Contact</h2>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </div>

        {/* Footer */}
        <div
          style={{ backgroundColor: "#f8c87b" }}
          className="text-center py-4 text-white"
        >
          © 2023 Website. All rights reserved.
        </div>
      </div>

      <hr className="my-5 border-5 border-primary" />

      {/* =====================================================================
          GIAO DIỆN 5: FPT STUDENTS DETAIL PAGE (Giao diện phức tạp nhất)
          ===================================================================== */}
      <div>
        {/* 5.1 Navbar màu cam */}
        <div
          style={{ backgroundColor: "#f37021" }}
          className="d-flex justify-content-between align-items-center p-2 text-white"
        >
          <div className="d-flex align-items-center">
            {/* Logo SVG nhỏ góc trái */}
            <img
              src="images/fpt-logo.png"
              alt="FPT Logo"
              height="30"
              className="me-3"
            />
            <div className="d-flex gap-3" style={{ fontSize: "14px" }}>
              <span>
                <i className="fa fa-home"></i> Trang chủ
              </span>
              <span>
                <i className="fa fa-info-circle"></i> Ngành học
              </span>
              <span>
                <i className="fa fa-address-book"></i> Tuyển sinh
              </span>
              <span>
                <i className="fa fa-list"></i> Sinh viên
              </span>
            </div>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ fontSize: "14px" }}
          >
            <span className="me-2">Search:</span>
            <input
              type="text"
              className="form-control form-control-sm"
              style={{ width: "150px" }}
            />
          </div>
        </div>

        {/* 5.2 Ảnh Banner (Dùng link ảnh sinh viên FPT online) */}
        <div
          className="w-100"
          style={{ backgroundColor: "#f37021", paddingBottom: "20px" }}
        >
          <img
            src="images/stu-group-banner.png"
            height="200"
          />
        </div>

        {/* 5.3 Breadcrumb */}
        <div className="bg-light py-2 px-4 mb-4">
          <span className="text-warning">Home</span>{" "}
          <span className="text-muted">/ Students</span>
        </div>

        {/* 5.4 Tiêu đề chính */}
        <h2 className="text-center mb-4 fw-bold">Students Detail</h2>

        {/* 5.5 Danh sách sinh viên (Grid System 2 cột) */}
        <div className="container mb-5">
          <div className="row g-4">
            {/* Sinh viên 1 */}
            <div className="col-md-6">
              <div className="card text-center shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="card-img-top"
                  alt="Student"
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="fw-bold mb-1">DE160182</p>
                  <div className="d-flex justify-content-between px-3 mb-3">
                    <span>Nguyễn Hữu Quốc Khánh</span>
                    <span>DaNang</span>
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="attend1"
                        id="absent1"
                      />
                      <label className="form-check-label" htmlFor="absent1">
                        Absent
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="attend1"
                        id="present1"
                      />
                      <label className="form-check-label" htmlFor="present1">
                        Present
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-warning text-white px-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* Sinh viên 2 */}
            <div className="col-md-6">
              <div className="card text-center shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  className="card-img-top"
                  alt="Student"
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="fw-bold mb-1">DE160377</p>
                  <div className="d-flex justify-content-between px-3 mb-3">
                    <span>Choy Vĩnh Thiên</span>
                    <span>QuangNam</span>
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="attend2"
                        id="absent2"
                      />
                      <label className="form-check-label" htmlFor="absent2">
                        Absent
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="attend2"
                        id="present2"
                      />
                      <label className="form-check-label" htmlFor="present2">
                        Present
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-warning text-white px-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* Sinh viên 3 */}
            <div className="col-md-6">
              <div className="card text-center shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  className="card-img-top"
                  alt="Student"
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="fw-bold mb-1">DE160547</p>
                  <div className="d-flex justify-content-between px-3 mb-3">
                    <span>Đỗ Nguyên Phúc</span>
                    <span>QuangNam</span>
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="attend3"
                        id="absent3"
                      />
                      <label className="form-check-label" htmlFor="absent3">
                        Absent
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="attend3"
                        id="present3"
                      />
                      <label className="form-check-label" htmlFor="present3">
                        Present
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-warning text-white px-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            {/* Sinh viên 4 */}
            <div className="col-md-6">
              <div className="card text-center shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/men/60.jpg"
                  className="card-img-top"
                  alt="Student"
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="fw-bold mb-1">DE170049</p>
                  <div className="d-flex justify-content-between px-3 mb-3">
                    <span>Lê Hoàng Minh</span>
                    <span>DaNang</span>
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="attend4"
                        id="absent4"
                      />
                      <label className="form-check-label" htmlFor="absent4">
                        Absent
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="attend4"
                        id="present4"
                      />
                      <label className="form-check-label" htmlFor="present4">
                        Present
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-warning text-white px-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5.6 Footer trang chi tiết sinh viên */}
        <div style={{ backgroundColor: "#f37021" }} className="text-white p-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-start">
                <h5 className="fw-bold">Our Address</h5>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  Khu đô thị FPT Đà Nẵng
                </p>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  <i className="fa fa-phone"></i> +84023111111
                </p>
                <p className="mb-0" style={{ fontSize: "14px" }}>
                  <i className="fa fa-fax"></i> +852 8765 4321
                </p>
                <p
                  className="mb-0"
                  style={{ fontSize: "14px", color: "#1572b6" }}
                >
                  <i className="fa fa-envelope"></i> fptudn@fpt.edu.vn
                </p>
              </div>
              <div className="col-md-6 text-end fs-4 gap-3 d-flex justify-content-end align-items-center">
                <i className="fa-brands fa-google-plus-g cursor-pointer"></i>
                <i className="fa-brands fa-facebook-f cursor-pointer"></i>
                <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
                <i className="fa-brands fa-twitter cursor-pointer"></i>
                <i className="fa-brands fa-youtube cursor-pointer"></i>
                <i className="fa-regular fa-envelope cursor-pointer"></i>
              </div>
            </div>
            <div className="text-center mt-3" style={{ fontSize: "14px" }}>
              © Copyright 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
