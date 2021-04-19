import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
const UpdateCategory = ({category}) => {
    let { id } = useParams();
    const [itemCategory,setItemCategory]= useState({});
    useEffect(()=>{
        const item = category.find(element=>element.id == id);
        setItemCategory(item);
    },[])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data=>console.log(data);
    return (
        <div className="row">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-10">
                        <div className="form-group">
                            <label htmlFor="roundText">Nhập tên danh mục</label>
                            <input
                                type="text"
                                id="roundText"
                                name="name"
                                defaultValue={itemCategory.name}
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
    )
}

export default UpdateCategory
