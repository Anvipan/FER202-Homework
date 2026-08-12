import React from "react";

export default function Ex8() {
  return (
    <div className="container mt-5 p-4 border text-start" style={{ maxWidth: '600px', backgroundColor: '#fff' }}>
      
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <h1 className="mb-4 fw-bold" style={{ color: '#333' }}>Form đặt vé máy bay</h1>

      <form>
        <div className="mb-3">
          <label className="form-label">Họ tên</label>
          <div className="input-group">
            <span className="input-group-text bg-light text-secondary">
              <i className="fa-regular fa-user"></i>
            </span>
            <input type="text" className="form-control" placeholder="Họ tên" />
            <span className="input-group-text bg-light text-secondary">vnđ</span>
          </div>
          <div className="form-text text-muted" style={{ fontSize: '0.8rem' }}>
            Phải nhập 5 ký tự, in hoa....
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Địa chỉ</label>
          <input type="text" className="form-control" />
          <div className="form-text text-muted" style={{ fontSize: '0.8rem' }}>
            Phải nhập 5 ký tự, in hoa....
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Đi từ</label>
            <select className="form-select text-secondary">
              <option>Hà nội</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Đến</label>
            <select className="form-select text-secondary">
              <option>Hà nội</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label mb-2">Chọn chiều đi (Khứ hồi)</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="chieuDi" />
            <label className="form-check-label" htmlFor="chieuDi">Đi</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="chieuVe" />
            <label className="form-check-label" htmlFor="chieuVe">Về</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
          Đặt vé
        </button>
      </form>
      
    </div>
  );
}