import React from "react";
import { Home } from "./Routing";
import { Route, Routes, NavLink} from "react-router-dom";

function TaskPage({object, item}){

    const addDescription = (e) => {
        item.description = e.target.value;
    }

    return(
        <div className="taskpage">
            <NavLink to="/" >
                    <p>Х</p> 
            </NavLink>
            <Routes>
                <Route path="/" element={<Home/>}/> 
            </Routes>
            <h1>{item.task}</h1>
            <textarea name="" id="" cols="30" rows="10" onChange={addDescription} defaultValue={item.description}/>
        </div>
    )
}

export default TaskPage