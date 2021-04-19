import React from 'react'
import AddSubject from '../../../Components/BackEnd/AddSubject'
const SubjectAdd = ({ onAdd, categories}) => {
    return (
        <AddSubject onAdd={onAdd} categories={categories}/>
    )
}
export default SubjectAdd
