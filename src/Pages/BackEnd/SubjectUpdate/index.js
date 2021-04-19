import React from 'react'
import { useParams } from 'react-router'
import UpdateSubject from '../../../Components/BackEnd/UpdateSubject'

const SubjectUpdate = ({ categories, subjects, onUpdate}) => {
    const { id } = useParams();
    const subject = subjects.find(element => element.id== id);// lấy item subject theo id
    return (
        <UpdateSubject categories={categories} subject={subject} onUpdate={onUpdate}/>
    )
}

export default SubjectUpdate
