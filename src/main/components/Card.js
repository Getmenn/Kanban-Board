import React, { useState } from "react";
import InputOrSelect from "./InputOrSelect";
import {Routing} from "./Routing";

export default function Card({name, dataTask, dataBefor, addValue, task, addTask, index}){
    const [visable, setVisable] = useState('hidden'); //видимые и невидимые блоки
    const [active, setActive] = useState(''); //добавление кнопке класса
    
    const handleClick = () =>{
        setVisable(visable === 'hidden' ? 'unset': 'hidden')
        setActive(active === '' ? 'active' : '')
        if(name === 'Backlog' && task !== '' && visable === 'unset'){
            addTask(dataTask, name, task);  //для Backlog
        }
        else if(task !== '' && visable === 'unset'){
            addTask(dataTask, name, task, dataBefor); 
        }  
    }

    return(
        <div className="card">
            <h3>{name}</h3>
            <div className="card-box">
                <Routing dataTask={dataTask} />
                <InputOrSelect visable={visable} name={name} addValue={addValue} dataBefor={dataBefor}/>
                <button onClick={handleClick} className={`button ${active}`}>
                    {visable === 'hidden'? '+ Add card' : 'Submit'}
                </button>  
            </div>
        </div>
    )
}

