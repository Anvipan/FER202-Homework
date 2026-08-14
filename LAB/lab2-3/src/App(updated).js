import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useReducer, useMemo, useRef, useEffect } from "react";
import { initialAttendances } from "./data";

// =====================================================================
// REDUCER: Xử lý logic Đổi trạng thái và Xóa bản ghi
// =====================================================================
const attendanceReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, status: item.status === "PRESENT" ? "ABSENT" : "PRESENT" }
          : item
      );
    case "DELETE_RECORD":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

// Khởi tạo state từ LocalStorage (nếu có), nếu không có thì lấy data mặc định
const initData = () => {
  const savedData = localStorage.getItem("attendanceData");
  return savedData ? JSON.parse(savedData) : initialAttendances;
};

function App() {
  // KHAI BÁO CÁC HOOKS
  const [attendances, dispatch] = useReducer(attendanceReducer, null, initData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const searchRef = useRef(null);

  // Lưu xuống LocalStorage mỗi khi mảng attendances thay đổi
  useEffect(() => {
    localStorage.setItem("attendanceData", JSON.stringify(attendances));
  }, [attendances]);

  // Lắng nghe phím "/" để focus vào ô tìm kiếm
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        searchRef.current.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // LỌC DỮ LIỆU (Search + Filter bằng useMemo)
  const filteredAttendances = useMemo(() => {
    return attendances.filter((item) => {
      const matchName = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === "" || item.status === statusFilter;
      return matchName && matchStatus;
    });
  }, [attendances, searchTerm, statusFilter]);

  // THỐNG KÊ (Tính toán từ mảng đã lọc bằng useMemo thay vì tính trực tiếp trong HTML)
  const stats = useMemo(() => {
    const totalRecords = filteredAttendances.length;
    const presentCount = filteredAttendances.filter((a) => a.status === "PRESENT").length;
    const absentCount = totalRecords - presentCount;
    const attendancePercentage = totalRecords > 0 ? (presentCount / totalRecords) * 100 : 0;
    
    return { totalRecords, presentCount, absentCount, attendancePercentage };
  }, [filteredAttendances]);

  // Hàm Reset bộ lọc
  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("");
  };

  return (
    // Giữ nguyên toàn bộ khung UI của ông
    <div className="Container">
      <div className="Container">
        <h1>Hệ thống quản lý điểm danh lớp học</h1>
      </div>
      
      {/* Thêm chút gap-2 (khoảng cách) để ô input và select không dính chặt vào nhau */}
      <div className="Container d-flex flex-row gap-2 mb-3">
        <input
          ref={searchRef} // Gắn ref để focus
          type="text"
          className="form-control"
          placeholder="Tìm kiếm theo tên sinh viên"
          style={{ maxWidth: "300px" }}
          value={searchTerm} // Ràng buộc state
          onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật state khi gõ
        />
        <select 
          className="form-select" 
          style={{ maxWidth: "200px" }}
          value={statusFilter} // Ràng buộc state
          onChange={(e) => setStatusFilter(e.target.value)} // Cập nhật state khi chọn
        >
          <option value="">Tất cả trạng thái</option>
          <option value="PRESENT">Có mặt (PRESENT)</option>
          <option value="ABSENT">Vắng mặt (ABSENT)</option>
        </select>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset bộ lọc
        </button>
      </div>
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Render thông số từ object stats đã tính toán ở trên */}
        <p className="text-muted mb-0">
          Tổng số bản ghi: {stats.totalRecords} | Có mặt: {stats.presentCount} | Vắng mặt:{" "}
          {stats.absentCount} | Tỷ lệ đi học: {stats.attendancePercentage.toFixed(2)}%
        </p>
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
              <th>Thao tác</th> {/* Đã thêm cột Thao tác theo yêu cầu */}
            </tr>
          </thead>
          <tbody>
            {/* Đổi initialAttendances thành filteredAttendances để bảng hiển thị theo bộ lọc */}
            {filteredAttendances.map((attendance, index) => (
              <tr key={attendance.id}>
                <td>{index + 1}</td>
                <td>{attendance.classId}</td>
                <td>{attendance.name}</td>
                <td>{new Date(attendance.date).toLocaleDateString()}</td>
                
                {/* Gộp 2 thẻ <td> cũ của ông lại thành 1 thẻ chứa nút trạng thái, gắn sự kiện onClick */}
                <td>
                  <span 
                    className={`btn btn-sm ${attendance.status === "PRESENT" ? "btn-success" : "btn-danger"}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch({ type: "TOGGLE_STATUS", payload: attendance.id })}
                  >
                    {attendance.status}
                  </span>
                </td>
                
                {/* Cột Nút Xóa mới */}
                <td>
                  <button 
                    className="btn btn-sm btn-secondary"
                    onClick={() => {
                      if (window.confirm("Bạn có chắc chắn muốn xóa bản ghi này?")) {
                        dispatch({ type: "DELETE_RECORD", payload: attendance.id });
                      }
                    }}
                  >
                    Xóa
                  </button>
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