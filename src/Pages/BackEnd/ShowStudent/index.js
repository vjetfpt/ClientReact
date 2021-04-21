import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
const ShowStudent = () => {
    const [students,setStudents] = useState([]);
    useEffect(()=>{
        const getStudents = async () => {
            try {
              const response = await fetch(`http://localhost:3005/Student`);
              const data = await response.json();
              setStudents(data);
            }
            catch (error) {
              console.log(error)
            }
        }
        getStudents();
    },[])
    return (
        <>
            <header className="mb-3">
                <a href="#" className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3" />
                </a>
            </header>
            <div className="page-heading" style={{ textAlign: 'left' }}>
                <h3 style={{ textAlign: 'center' }}>Quản lý bài thi</h3>
            </div>
            <div className="page-content">
                <div className="table-responsive">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Số bài thi đã làm</th>
                                <th>Xem chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((element,index)=>{
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{element.id}</td>
                                            <td>{element.name}</td>
                                            <td>{Object.keys(element).length-2}</td>
                                            <td>
                                                <Link to={`/chi-tiet-bai-thi/${element.id}`}>
                                                    Chi tiết
                                                </Link>
                                            </td>
                                        </tr>
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

export default ShowStudent
