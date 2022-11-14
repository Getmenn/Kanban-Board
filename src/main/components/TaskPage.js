import React from "react";
import { Home } from "./Routing";
import { Route, Routes, NavLink} from "react-router-dom";

function TaskPage({mass, element, name}){
    const addDescription = (e) => {
        element.description = e.target.value;
        localStorage.setItem(`data${name}`, JSON.stringify(mass))  // добавление обьекта с описанием
    }

    return(
        <div className="taskpage">
            <NavLink to="/" >
                    <p>Х</p> 
            </NavLink>
            <Routes>
                <Route path="/" element={<Home/>}/> 
            </Routes>
            <h1>{element.task}</h1>
            <textarea name="" id="" cols="30" rows="10" onChange={addDescription} defaultValue={element.description}/>
        </div>
    )
}

export default TaskPage