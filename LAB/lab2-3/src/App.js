import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useReducer } from "react";
import { initialAttendances } from "./data";
import { Dropdown } from "bootstrap";
// sử dụng useReducer để lấy data từ data.js, hiển thị lên bảng ở dưới với các cột STT, Student Name, Class ID, Date, và Status tương ứng



function App() {
  return (
    <div className="Container">
      <div className="Container">
        <h1>Hệ thống quản lý điểm danh lớp học</h1>
      </div>
      <div className="Container d-flex flex-row">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm theo tên sinh viên"
          style={{ maxWidth: "300px" }}
        />
        <select className="form-select" style={{ maxWidth: "200px" }}>
          <option value="">Tất cả trạng thái</option>
          <option value="PRESENT">Có mặt (PRESENT)</option>
          <option value="ABSENT">Vắng mặt (ABSENT)</option>
        </select>
        <button className="btn btn-secondary">Reset bộ lọc</button>
      </div>
    <div className="d-flex justify-content-between align-items-center mb-3">
        {(() => {
          const totalRecords = initialAttendances.length;
          const presentCount = initialAttendances.filter(
            (a) => a.status === "PRESENT"
          ).length;
          const absentCount = initialAttendances.filter(
            (a) => a.status === "ABSENT"
          ).length;
          const attendancePercentage =
            totalRecords > 0 ? (presentCount / totalRecords) * 100 : 0;

          return (
            <p className="text-muted mb-0">
              Tổng số bản ghi: {totalRecords} | Có mặt: {presentCount} | Vắng mặt:{" "}
              {absentCount} | Tỷ lệ đi học: {attendancePercentage.toFixed(2)}%
            </p>
          );
        })()}
      </div>

        
      <div className="container mt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã lớp</th>
              <th>Tên sinh viên</th>
              <th>Ngày</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {initialAttendances.map((attendance, index) => (
              <tr key={attendance.id}>
                <td>{index + 1}</td>
                <td>{attendance.classId}</td>
                <td>{attendance.name}</td>
                <td>{new Date(attendance.date).toLocaleDateString()}</td>
                <td>
                  <span className={`btn btn-sm ${attendance.status === "PRESENT" ? "btn-success" : "btn-danger"}`}>
                    {attendance.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
