import React from 'react'
import UpdateQuestion from '../../../Components/BackEnd/UpdateQuestion'

const QuestionUpdate = ({ subjects, callApiUpdate}) => {
    return (
        <UpdateQuestion subjects={subjects} callApiUpdate={callApiUpdate}/>
    )
}

export default QuestionUpdate
