import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"
const AddQuestion = ({ subjects, callApiAdd}) => {
    const [idSubject, setIdSubject] = useState(`${subjects[0].id}`);
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const handleChange = (e) => {
        setIdSubject(e.target.value);
    }
    const onSubmit = (data) =>{
        const id = uuidv4();
        const nameCorrect = data.correct;
        const objQuenstion = {
            id:id,
            subjectId:idSubject,
            question: data.question,
            answer: [data.answer1,data.answer2,data.answer3,data.answer4],
            correct : data[nameCorrect],
        }
        callApiAdd("Question",objQuenstion);
        reset();
    };
    return (
        <section id="input-style">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Thêm câu hỏi</h4>
                        </div>
                        <div className="card-body">
                            <fieldset className="form-group">
                                <select
                                    className="form-select"
                                    id="basicSelect"
                                    onChange={handleChange}>
                                    {
                                        subjects.map((element, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={element.id}>{element.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </fieldset>
                            <div className="row">
                                <div className="col-12">
                                    <p>1 câu hỏi chỉ chọn 1 đáp án đúng</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="roundText">Câu hỏi</label>
                                                <input
                                                    type="text"
                                                    id="roundText"
                                                    {...register("question")}
                                                    className="form-control round" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-11">
                                                        <input
                                                            type="text"
                                                            id="squareText"
                                                            {...register("answer1")}
                                                            className="form-control square" />
                                                    </div>
                                                    <div className="col-1">
                                                        <input
                                                            type="radio"
                                                            defaultValue="answer1"
                                                            {...register("correct")}
                                                            className="form-check-input" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-11">
                                                        <input
                                                            type="text"
                                                            id="squareText"
                                                            {...register("answer2")}
                                                            className="form-control square" />
                                                    </div>
                                                    <div className="col-1">
                                                        <input
                                                            type="radio"
                                                            defaultValue="answer2"
                                                            {...register("correct")}
                                                            className="form-check-input" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-11">
                                                        <input
                                                            type="text"
                                                            id="squareText"
                                                            {...register("answer3")}
                                                            className="form-control square" />
                                                    </div>
                                                    <div className="col-1">
                                                        <input
                                                            type="radio"
                                                            defaultValue="answer3"
                                                            {...register("correct")}
                                                            className="form-check-input" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-11">
                                                        <input
                                                            type="text"
                                                            id="squareText"
                                                            {...register("answer4")}
                                                            className="form-control square" />
                                                    </div>
                                                    <div className="col-1">
                                                        <input
                                                            type="radio"
                                                            defaultValue="answer4"
                                                            {...register("correct")}
                                                            className="form-check-input" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        defaultValue="gửi" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AddQuestion
