import React from 'react'
import { Link } from 'react-router-dom'
const CategoryItem = ({data,onDelete}) => {
    return (
        <tr>
            <td className="text-bold-500">{data.id}</td>
            <td>{data.name}</td>
            <td className="text-bold-500">
                <Link to={`/admin/xem-mon-thi-danh-muc/${data.id}`}>Xem ngay</Link>
            </td>
            <td style={{ width: "100px" }}>
                <Link 
                    to={`/admin/cap-nhat-danh-muc/${data.id}`}
                    className="btn btn-warning" 
                    style={{ width: "100%" }}
                    >Sửa</Link>
            </td>
            <td style={{ width: "100px" }}>
                <button 
                    className="btn btn-danger"
                    onClick={()=> {
                        let confirm= window.confirm("Bạn có chắc chắn muốn xóa không ?");
                        if(confirm){
                            onDelete(data.id);
                        }
                    }} 
                    style={{ width: "100%" }}>Xóa</button>
            </td>
        </tr>
    )
}

export default CategoryItem
