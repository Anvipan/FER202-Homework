import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid p-0">
      <div style={{ backgroundColor: "#c5c6c6" }} className="text-white p-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start">
              <h5 className="fw-bold">Student</h5>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Student Name: Trần Nguyễn Thiên An
              </p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                <i className="stuID"></i> Student ID: HE191229
              </p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                <i className="className"></i> Class Name: BL5
              </p>
              <p
                className="mb-0"
                style={{ fontSize: "14px", color: "#1572b6" }}
              >
                <i className="email"></i> thienan18112005@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
