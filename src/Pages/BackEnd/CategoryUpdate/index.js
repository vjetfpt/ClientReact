import React, { useEffect, useState } from 'react'
import UpdateCategory from '../../../Components/BackEnd/UpdateCategory'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
const CategoryUpdatePage = ({ category, onUpdate}) => {
    let history = useHistory();
    let { id } = useParams();
    const [infoItem, setInfoItem] = useState({});
    const { register , handleSubmit, formState: { errors }, reset}= useForm();
    const onSubmit= (data)=>{
        const newItem={
            ...infoItem,
            ...data
        }
        onUpdate(newItem);
        history.push("/admin/danh-muc");
    };
    useEffect(() => {
        const item = category.find(element=>element.id == id);
        setInfoItem(item);
        reset();
    }, [])
    return (
        <div className="container">
            <h2>Sửa danh mục</h2>   
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <input 
                        {...register("name", {
                            required: "Chưa nhập tên danh mục",
                            minLength: { value: 4, message: "Ký tự tối thiếu là 4 ký tự" }
                        })}
                        key="key1"
                        className="form-control"
                        defaultValue={infoItem.name}
                    />
                    {errors.name && <span className="message-notification">{errors.name.message}</span>}
                </div>
                <button type="submit" className="btn btn-success" >Sửa danh mục</button>
            </form>
        </div>
    )
}

export default CategoryUpdatePage
