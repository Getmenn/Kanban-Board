import React, { useState } from "react"


export default function InputOrSelect ({visable, name, addValue}){

    if (visable !== 'hidden' && name === "Backlog"){
        return (
        <div className="card-box__task" style={{visibility: visable}}>
            <input type="text" onChange={addValue}/>
        </div>
        )
    }
    else if(visable !== 'hidden' && name !== "Backlog"){
        return (
            <select >
                <option>JavaScript</option>
                <option>Java</option>
                <option>C#</option>
                <option>C++</option>
            </select>
        )
    } 
}