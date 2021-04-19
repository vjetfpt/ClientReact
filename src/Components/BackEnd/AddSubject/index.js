import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import firebase from "../../../firebase"
import { v4 as uuidv4 } from 'uuid'
const AddSubject = ({ onAdd, categories }) => {
    let history = useHistory();
    const [textDes, setTextDes] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        var check = 0;
        if (textDes == "") {
            document.querySelector("#mess-des").style.display = "block";
            check++;
        } else {
            document.querySelector("#mess-des").style.display = "none";
        }
        let file = data.image[0];
        if (!file) {
            document.querySelector("#mess-image").style.display = "block";
            check++;
        } else {
            document.querySelector("#mess-image").style.display = "none";
        }
        if (!check) {
            data.description = textDes;
            const object = data;
            let storageRef = firebase.storage().ref(`imageReact/${file.name}`);
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    object.id = uuidv4();
                    object.image = url;
                    onAdd(object);
                    history.push("/admin/mon-thi");
                })
            });
        }
    };
    const handleChangeCk = (e, editor) => {
        const data = editor.getData();
        setTextDes(data);
    }
    return (
        <section className="section">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Thêm môn thi</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="basicInput">Tên môn thi</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="basicInput"
                                        placeholder=""
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
                                                return (
                                                    <option value={element.id} key={index}>{element.name}</option>
                                                )
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
                                        {...register("time", {
                                            required: "Bạn chưa nhập tên môn thi"
                                        })}>
                                        <option value="15">15 Phút</option>
                                        <option value="20">20 Phút</option>
                                        <option value="25">25 Phút</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="disabledInput">Thêm ảnh</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="formFile"
                                        {...register("image")} />
                                    <span id="mess-image"
                                        style={{ display: "none" }}
                                        className="message-notification">Bạn chưa chọn ảnh</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <label> Thêm mô tả</label>
                            <CKEditor
                                editor={ClassicEditor} onChange={handleChangeCk} />
                            <span
                                id="mess-des"
                                className="message-notification"
                                style={{ display: "none" }}>Bạn chưa nhập mô tả</span>
                        </div>
                        <div className="form-group" style={{ textAlign: 'left' }}>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Thêm môn thi</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddSubject
