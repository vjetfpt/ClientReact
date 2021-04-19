import CategoryItem from '../CategoryItem';
import { Link } from 'react-router-dom'
const ShowCategory = ({ data, onDelete}) => {
    return (
        <>
            <header className="mb-3">
                <a href="#" className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3" />
                </a>
            </header>
            <div className="page-heading" style={{ textAlign: 'left' }}>
                <h3 style={{ textAlign: 'center' }}>Quản lý danh mục</h3>
                <Link to="/admin/them-danh-muc" className="btn btn-primary rounded-pill">Thêm danh mục</Link>
            </div>
            <div className="page-content">
                <div className="table-responsive">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TÊN DANH MỤC</th>
                                <th>CÁC MÔN HIỆN CÓ</th>
                                <th colSpan="2">CHỨC NĂNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((element, index) => {
                                    return (
                                        <CategoryItem 
                                            key={element.id} 
                                            data={element} 
                                            onDelete={onDelete}
                                            />
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

export default ShowCategory
