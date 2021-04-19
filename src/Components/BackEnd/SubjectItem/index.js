import React from 'react'
import { Link } from "react-router-dom"
const SubjectItem = ({ data, index, onDelete}) => {
    return (
        <tr>
            <td className="text-bold-500">{index+1}</td>
            <td>{data.name}</td>
            <td className="text-bold-500">
                <img src={data.image} alt={data.name} width={150}/>
            </td>
            <td>
                {data.nameCategory}
            </td>
            <td>
                {data.time+" phút"}
            </td>
            <td style={{ width: "100px" }}>
                <Link
                    to={`/admin/cap-nhat-mon-thi/${data.id}`}
                    className="btn btn-warning"
                    style={{ width: "100%" }}
                >Sửa</Link>
            </td>
            <td style={{ width: "100px" }}>
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        let confirm = window.confirm("Bạn có chắc chắn muốn xóa không ?");
                        if (confirm) {
                            onDelete(data.id);
                        }
                    }}
                    style={{ width: "100%" }}>Xóa</button>
            </td>
        </tr>
    )
}

export default SubjectItem
