import React, { useEffect, useState } from 'react'
import { useParams, Link} from "react-router-dom"
const ShowSubjectCate = () => {
    const [listSubject, setListSubject] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        const getListSubject = async () => {
            const response = await fetch(`http://localhost:3005/categorySubject/${id}/subject`);
            const list = await response.json();
            setListSubject(list);
        }
        getListSubject();
    })
    return (
        <>
            <div className="page-heading" style={{ textAlign: 'left' }}>
                <Link to="/admin/danh-muc">
                    <i className="ti-angle-double-left"></i>
                    Quay lại
                </Link>
            </div>
            <h4>Danh dách môn thi</h4>
            <table className="table table-lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên môn thi</th>
                        <th>Thời gian làm bài</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listSubject.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.name}</td>
                                    <td>{element.time}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ShowSubjectCate
