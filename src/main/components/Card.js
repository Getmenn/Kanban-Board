import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import {Routing} from "./Routing";

function InputOrSelect ({visable, name, addValue, dataBefor}){
    if (visable !== 'hidden' && name === "Backlog"){
        return <Input visable={visable} addValue={addValue} />  
    }
    else if(visable !== 'hidden' && name !== "Backlog"){
        return <Select visable={visable} addValue={addValue} dataBefor={dataBefor} />
    } 
}

export default function Card({name, dataTask, dataBefor = '', addValue, task, addTask, index}){
    const [visable, setVisable] = useState('hidden'); //видимые и невидимые блоки
    const [active, setActive] = useState(''); //добавление кнопке класса

    const handleClick = () =>{
        if(dataBefor.length === 0 && name !== 'Backlog')(
            alert(`Передыдущий блок не содержит данных, добавьте их`)
        )
        else{
            setVisable(visable === 'hidden' ? 'unset': 'hidden')
            setActive(active === '' ? 'active' : '')
            if(name === 'Backlog' && task !== '' && visable === 'unset'){
                addTask(dataTask, name, task);  //для Backlog
            }
            else if(task !== '' && visable === 'unset'){
                addTask(dataTask, name, task, dataBefor); 
            }  
        }
    }
    

    return(
        <div className="card">
            <h3>{name}</h3>
            <div className="card-box">
                <Routing dataTask={dataTask} name={name}/>
                <InputOrSelect visable={visable} addValue={addValue} dataBefor={dataBefor} name={name}/> 
                <button onClick={handleClick} className={`button ${active}`}>
                    {visable === 'hidden'? '+ Add card' : 'Submit'}
                </button>  
            </div>
        </div>
    )
}

