import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import TaskPage from "./TaskPage";


export function Home(){return(<></>)}

export function Routing({dataTask}){
    const renderTask = () =>{ //генерация  ссылок на задачи
        if(dataTask.length > 0)
        {
            return dataTask.map((item, id, object) => 
                <Route exact path={`/tasks/${id}${item.iddata}/*`} key={id} element={<TaskPage object={object} item={item}/>}/>
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