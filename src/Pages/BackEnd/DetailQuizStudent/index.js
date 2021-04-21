import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
const DetailQuizStudent = () => {
    let { id } = useParams();
    const [Student , setStudent ]= useState([]);
    useEffect(()=>{
        const getStudent = async () => {
            try {
              const response = await fetch(`http://localhost:3005/Student/${id}`);
              const data = await response.json();
              delete data.id;
              delete data.name;
              let listSubjects = [];
              for( const element in data){
                  listSubjects.push(data[element]);
              }
              setStudent(listSubjects);
            }
            catch (error) {
              console.log(error)
            }
        }
        getStudent();
    },[])
    return (
        <>
            <header className="mb-3">
                <a href="#" className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3" />
                </a>
            </header>
            <div className="page-heading" style={{ textAlign: 'left' }}>
                <h3 style={{ textAlign: 'center' }}>Chi tiết các bài thi</h3>
            </div>
            <div className="page-content">
                <div className="table-responsive">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên môn thi</th>
                                <th>Điểm</th>
                                <th>Trang thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Student.map((element,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{element.name}</td>
                                        <td>{element.name}</td>
                                        <td>{element.totalPoint}</td>
                                        <td>{element.totalPoint>=5?"Đạt":"Không đạt"}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DetailQuizStudent
