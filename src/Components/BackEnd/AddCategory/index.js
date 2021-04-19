import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
const AddCategory = ({ onAdd }) => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data) {
            onAdd(data);
            history.push("/admin/danh-muc");
        }
    };
    return (
        <>
            <div className="page-heading" style={{ textAlign: 'left' }}>    
                <Link to="/admin/danh-muc">
                    <i className="ti-angle-double-left"></i>
                    Quay lại
                </Link>
            </div>
            <div className="row">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="form-group">
                                <h5 htmlFor="roundText">Nhập tên danh mục</h5>
                                <input
                                    type="text"
                                    id="roundText"
                                    name="name"
                                    {...register("name", {
                                        required: "Chưa nhập tên danh mục",
                                        minLength: { value: 4, message: "Ký tự tối thiếu là 4 ký tự" }
                                    })}
                                    className="form-control round" />
                                {errors.name && <span className="message-notification">{errors.name.message}</span>}
                            </div>
                        </div>
                        <div className="col-sm-2" style={{ lineHeight: "80px", padding: "0px" }}>
                            <button type="submit" className="btn btn-success">Thêm</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCategory
