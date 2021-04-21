import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo" /></a>
                        </div>
                        <div className="toggler">
                            <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle" /></a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-item">
                            <Link to="/admin/danh-muc" className='sidebar-link'>
                                <i className="bi bi-grid-fill"></i>
                                <span>Danh mục</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/admin/mon-thi" className='sidebar-link'>
                                <i className="ti-book"></i>
                                <span>Các môn thi</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/admin/them-cau-hoi" className='sidebar-link'>
                                <i className="ti-write"></i>
                                <span>Câu hỏi</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/admin/cap-nhat-cau-hoi" className='sidebar-link'>
                                <i className="ti-write"></i>
                                <span>Cập nhật câu hỏi</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/admin/quan-ly-bai-thi" className='sidebar-link'>
                                <i className="ti-write"></i>
                                <span>Quản lý bài thi</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="sidebar-toggler btn x"><i data-feather="x" /></button>
            </div>
        </div>
    )
}

export default SideBar
