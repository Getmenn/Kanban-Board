import React, { useState } from "react";
import InputOrSelect from "./InputOrSelect";

export default function Card({name, dataTask, addValue, task, addTask}){
    const [visable, setVisable] = useState('hidden'); //видимые и невидимые блоки
    const [active, setActive] = useState(''); //добавление кнопке класса
    
    const handleClick = () =>{
        setVisable(visable === 'hidden' ? 'unset': 'hidden')
        setActive(active === '' ? 'active' : '')
        if(task !== '' && visable === 'unset'){
            addTask(task)
        }    
    }

    return(
        <div className="card">
            <h3>{name}</h3>
            <div className="card-box">
                {dataTask !== '' ? dataTask.map((item,id) => <div className="card-box__task" key={id}><p>{item.task}</p> </div>) : null}
                <InputOrSelect visable={visable} name={name} addValue={addValue}/>
                <button onClick={handleClick} className={`button ${active}`}>
                    {visable === 'hidden'? '+ Add card' : 'Submit'}
                </button>  
            </div>
        </div>
    )
}

