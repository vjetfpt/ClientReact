import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import firebase from "../../../firebase"
import { v4 as uuidv4 } from 'uuid'
const UpdateSubject = ({ categories, subject, onUpdate }) => {
    let history = useHistory();
    const [textDes, setTextDes] = useState(subject.description);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const timeSubject = [
        { name: "15 phút", value: 15 },
        { name: "20 phút", value: 20 },
        { name: "25 phút", value: 25 }
    ]
    const onSubmit = (data) => {
        var check = 0;
        let object = {
            ...subject,
            ...data
        };
        if (textDes == "") {
            document.querySelector("#mess-des").style.display = "block";
            check++;
        } else {
            document.querySelector("#mess-des").style.display = "none";
        }
        if (!check) {
            object.description = textDes;
            let file = data.image[0];
            if (file) {
                let storageRef = firebase.storage().ref(`imageReact/${file.name}`);
                storageRef.put(file).then(function () {
                    storageRef.getDownloadURL().then((url) => {
                        object.image = url;
                        onUpdate(object);
                        history.push("/admin/mon-thi");
                    })
                });
            }
            else {
                object.image = subject.image;
                onUpdate(object);
                // console.log(object);
                history.push("/admin/mon-thi");
            }
        }
    };
    const handleChangeCk = (e, editor) => {
        const data = editor.getData();
        setTextDes(data);
    }
    return (
        <>
            <section className="section">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Sửa môn thi</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="basicInput">Sửa môn thi</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="basicInput"
                                            defaultValue={subject.name}
                                            {...register("name")} />
                                        {errors.name && <span className="message-notification">{errors.name.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Lựa chọn danh mục</label>
                                        <select
                                            className="form-select"
                                            id="basicSelect"
                                            {...register("categorySubjectId")}>
                                            {
                                                categories.map((element, index) => {
                                                    if (element.id == subject.categorySubjectId) {
                                                        return (
                                                            <option
                                                                selected
                                                                value={element.id}
                                                                key={index}>{element.name}</option>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <option
                                                                value={element.id}
                                                                key={index}>{element.name}</option>
                                                        )
                                                    }
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Lựa chọn thời gian làm bài</label>
                                        <select
                                            className="form-select"
                                            id="basicSelect"
                                            {...register("time")}>
                                            {
                                                timeSubject.map((element) => {
                                                    if (element.value == subject.time) {
                                                        return (
                                                            <option selected value={element.value}>
                                                                {element.name}
                                                            </option>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <option value={element.value}>
                                                                {element.name}
                                                            </option>
                                                        )
                                                    }
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="disabledInput">Thêm ảnh</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="formFile"
                                            {...register("image")} />
                                        <div>
                                            <img src={subject.image} width={100} alt="Chưa có ảnh" />
                                        </div>
                                        <span id="mess-image"
                                            style={{ display: "none" }}
                                            className="message-notification">Bạn chưa chọn ảnh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group" style={{ textAlign: 'left' }}>
                                <label> Thêm mô tả</label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    onChange={handleChangeCk}
                                    data={subject.description} />
                                <span
                                    id="mess-des"
                                    className="message-notification"
                                    style={{ display: "none" }}>Bạn chưa nhập mô tả</span>
                            </div>
                            <div className="form-group" style={{ textAlign: 'left' }}>
                                <button
                                    type="submit"
                                    className="btn btn-primary">Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpdateSubject
