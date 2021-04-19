// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import SideBar from './Components/BackEnd/SideBar';
import Footer from './Components/BackEnd/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import HomeBackEnd from './Pages/BackEnd/Home'
import CategoryPage from "./Pages/BackEnd/Category"
import CategoryAddPage from './Pages/BackEnd/CategoryAdd';
import CategoryUpdatePage from './Pages/BackEnd/CategoryUpdate';
import Subject from './Pages/BackEnd/Subject';
import SubjectAdd from './Pages/BackEnd/SubjectAdd';
import SubjectUpdate from './Pages/BackEnd/SubjectUpdate';
import SubjectCate from "./Pages/BackEnd/SubjectCate"
import Question from './Pages/BackEnd/Question';
import QuestionUpdate from './Pages/BackEnd/QuestionUpdate';
function App() {
  const [category, setCategories] = useState([]);
  const [subject, setSubject] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3005/categorySubject`);
        const data = await response.json();
        setCategories(data);
      }
      catch (error) {
        console.log(error)
      }
    }
    const getSubject = async () => {
      try {
        const response = await fetch(`http://localhost:3005/subject`);
        const data = await response.json();
        setSubject(data);
      }
      catch (error) {
        console.log(error)
      }
    }
    getCategory();
    getSubject();
  }, []);
  /*api*/
  const callApiAdd = async (table, value) => {
    try {
      const response = await fetch(`http://localhost:3005/${table}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      });
      return await response.json()
    }
    catch (error) {
      console.log(error);
    }
  }
  const callApiUpdate = async (table, item) => {
    try {
      await fetch(`http://localhost:3005/${table}/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
    } catch (error) {
      console.log(error);
    }
  }
  const callApiDelete = async (table, id) => {
    try {
      if (id) {
        try {
          await fetch(`http://localhost:3005/${table}/${id}`, {
            method: "DELETE"
          })
        } catch (error) {
          console.log("error: ", error);
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  /**/
  const onAddCategory = async (value) => {
    const data = await callApiAdd("categorySubject", value);
    setCategories([
      ...category,
      data
    ])
  }
  const onUpdateCategory = (item) => {
    callApiUpdate("categorySubject", item);
    const newCategory = category.map(cate => cate.id === item.id ? item : cate);
    setCategories(newCategory);
  }
  const onDeleteCategory = (id) => {
    callApiDelete("categorySubject", id);
    const newCategory = category.filter((element, index) => {
      if (element.id != id) {
        return true;
      }
    })
    setCategories(newCategory);
  }
  const onAddSubject = async (value) => {
    const data = await callApiAdd("subject", value);
    setSubject([
      ...subject,
      data
    ])
  }
  const onDeleteSubject = (id) => {
    callApiDelete("subject", id);
    const newSubject = subject.filter((element, index) => {
      if (element.id != id) {
        return true;
      }
    })
    setSubject(newSubject);
  }
  const onUpdateSubject = (item) =>{
    console.log("update sb",item)
    callApiUpdate("subject",item);
    const newSubject= subject.map( sub=> sub.id === item.id ? item: sub);
    setSubject(newSubject);
  }
  return (
    <Router>
      <div className="App">
        <div id="app">
          <SideBar />
          <div id="main">
            <Switch>
              <Route exact path="/" component={() => <HomeBackEnd />} />
              <Route path="/admin/danh-muc">
                <CategoryPage data={category} onDelete={onDeleteCategory} />
              </Route>
              <Route path="/admin/them-danh-muc">
                <CategoryAddPage onAdd={onAddCategory} />
              </Route>
              <Route path="/admin/cap-nhat-danh-muc/:id">
                <CategoryUpdatePage onUpdate={onUpdateCategory} category={category} />
              </Route>
              <Route path="/admin/mon-thi">
                <Subject data={subject} category={category} onDelete={onDeleteSubject}/>
              </Route>
              <Route path="/admin/them-mon-thi">
                <SubjectAdd onAdd={onAddSubject} categories={category}/>
              </Route>
              <Route path="/admin/cap-nhat-mon-thi/:id">
                <SubjectUpdate categories={category} subjects={subject} onUpdate={onUpdateSubject}/>
              </Route>
              <Route path="/admin/xem-mon-thi-danh-muc/:id">
                <SubjectCate />
              </Route>
              <Route path="/admin/them-cau-hoi">
                <Question subjects={subject} callApiAdd={callApiAdd}/>
              </Route>
              <Route path="/admin/cap-nhat-cau-hoi">
                <QuestionUpdate subjects={subject} callApiUpdate={callApiUpdate}/>
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
