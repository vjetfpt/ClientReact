import React from 'react'
import ShowSubject from '../../../Components/BackEnd/ShowSubject'
const Subject = ({ data, category, onDelete}) => {
    data.forEach(element => {// lấy tên danh mục của môn thi
        for(let i=0;i<category.length;i++){
            if (element.categorySubjectId == category[i].id) {
                delete element.idCategory;
                element.nameCategory = category[i].name;
            }
        }
    });
    return (
        <ShowSubject data={data} onDelete={onDelete}/>
    )
}

export default Subject
