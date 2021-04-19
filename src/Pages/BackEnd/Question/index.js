import React from 'react'
import AddQuestion from '../../../Components/BackEnd/AddQuestion'

const Question = ({ subjects, callApiAdd}) => {
    return (
        <AddQuestion subjects={ subjects } callApiAdd={callApiAdd}/>
    )
}

export default Question
