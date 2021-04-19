import React from 'react'
import { Link } from "react-router-dom"
import SubjectItem from '../SubjectItem'
const ShowSubject = ({ data, onDelete}) => {
    return (
        <>
            <header className="mb-3">
                <a href="#" className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3" />
                </a>
            </header>
            <div className="page-heading" style={{ textAlign: 'left' }}>
                <h3 style={{ textAlign: 'center' }}>Quản lý môn thi</h3>
                <Link to="/admin/them-mon-thi" className="btn btn-primary rounded-pill">Thêm môn thi</Link>
            </div>
            <div className="page-content">
                <div className="table-responsive">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>TÊN MÔN THI</th>
                                <th>ẢNH</th>
                                <th>TÊN DANH MỤC</th>
                                <th>THỜI GIAN LÀM BÀI THI</th>
                                <th colSpan="2">CHỨC NĂNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((element,index)=>{
                                    return (
                                        <SubjectItem
                                            index={index} 
                                            key={element.id}
                                            data={element}
                                            onDelete={onDelete}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ShowSubject
