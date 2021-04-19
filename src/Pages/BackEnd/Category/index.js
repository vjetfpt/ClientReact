import React from 'react'
import ShowCategory from "../../../Components/BackEnd/ShowCategory"
const CategoryPage = ({ data, onDelete}) => {
    return (
        <ShowCategory data={data} onDelete={onDelete}/>
    )
}

export default CategoryPage
