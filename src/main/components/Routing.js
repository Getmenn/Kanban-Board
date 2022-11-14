import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import TaskPage from "./TaskPage";


export function Home(){return(<></>)}

export function Routing({dataTask, name}){
    const renderTask = () =>{ //генерация  ссылок на задачи
        if(dataTask.length > 0)
        {
            return dataTask.map((element, id, mass) => 
                <Route exact path={`/tasks/${id}${element.iddata}/*`} key={id} element={<TaskPage mass={mass} element={element} name={name}/>}/>
            )   
        }  
    }

    return (
        <>
            {dataTask.map((item,id) => 
                <NavLink to={`/tasks/${id}${item.iddata}`} key={id}>
                    <div className="card-box__task" >
                        <p>{item.task}</p>
                    </div> 
                </NavLink>
            )}
            <Routes>  
                <Route path="/*" element={<Home/>}/>
                {renderTask()}  
            </Routes>
        </>
    )
}