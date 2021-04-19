import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"
const UpdateQuestion = ({ subjects, callApiUpdate}) => {
    const [idSubject, setIdSubject] = useState(`${subjects[0].id}`);
    const [listQuestion, setListQuestion] = useState([]);
    const [questionForm, setQuestionForm] = useState();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        const objQuestion = {
            id: questionForm.id,
            subjectId: idSubject,
            question: data.question,
            answer: [data.answer1, data.answer2 ,data.answer3,data.answer4],
            correct: data[data.correct]
        }
        callApiUpdate("Question",objQuestion);
        
    };
    const handleIdSubject = (e) => {
        setIdSubject(e.target.value);
        setQuestionForm();
        reset();
    }
    const handleQuestion = (e) => {
        const itemQuestion = listQuestion.find((element, index) => {
            if (element.id == e.target.value) {
                return true;
            }
        })
        setQuestionForm(itemQuestion);
        reset();
    }
    useEffect(() => {
        const getQuestion = async () => {
            try {
                const response = await fetch(`http://localhost:3005/subject/${idSubject}/Question`);
                const result = await response.json();
                setListQuestion(result);
            }
            catch (error) {
                console.log(error);
            }
        }
        getQuestion();
        reset();
    }, [idSubject])
    return (
        <section id="input-style">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Cập nhật câu hỏi</h4>
                        </div>
                        <div className="card-body">
                            <fieldset className="form-group">
                                <select
                                    className="form-select"
                                    id="basicSelect"
                                    onChange={handleIdSubject}>
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
                            <fieldset className="form-group">
                                <select
                                    className="form-select"
                                    id="basicSelect"
                                    onChange={handleQuestion}>
                                    <option value="" selected>-Chọn câu hỏi-</option>
                                    {
                                        listQuestion.map((element, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={element.id}>{element.question}</option>
                                            )
                                        })
                                    }
                                </select>
                            </fieldset>
                            {
                                questionForm ? <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="roundText">Câu hỏi</label>
                                                <input
                                                    type="text"
                                                    id="roundText"
                                                    defaultValue={questionForm.question}
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
                                                            defaultValue={questionForm.answer[0]}
                                                            {...register("answer1")}
                                                            className="form-control square" />
                                                    </div>
                                                    <div className="col-1">
                                                        <input 
                                                            type="radio"
                                                            defaultValue="answer1"
                                                            {...register("correct")}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-11">
                                                        <input
                                                            type="text"
                                                            id="squareText"
                                                            defaultValue={questionForm.answer[1]}
                                                            {...register("answer2")}
                                                            className="form-control square" />
                                                    </div>
                                                    <div className="col-1">
                                                        <input 
                                                            type="radio"
                                                            defaultValue="answer2"
                                                            {...register("correct")}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-11">
                                                        <input
                                                            type="text"
                                                            id="squareText"
                                                            defaultValue={questionForm.answer[2]}
                                                            {...register("answer3")}
                                                            className="form-control square" />
                                                    </div>
                                                    <div className="col-1">
                                                        <input 
                                                            type="radio"
                                                            defaultValue="answer3"
                                                            {...register("correct")}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-11">
                                                        <input
                                                            type="text"
                                                            id="squareText"
                                                            defaultValue={questionForm.answer[3]}
                                                            {...register("answer4")}
                                                            className="form-control square" />
                                                    </div>
                                                    <div className="col-1">
                                                        <input 
                                                            type="radio"
                                                            defaultValue="answer4"
                                                            {...register("correct")}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        Đáp án đúng: &nbsp;
                                        {questionForm.correct}
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        defaultValue="gửi" />
                                </form> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default UpdateQuestion
