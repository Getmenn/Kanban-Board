import React from "react"


export default function InputOrSelect ({visable, name, addValue, dataBefor}){
    if (visable !== 'hidden' && name === "Backlog"){
        return (
            <div className="card-box__task" style={{visibility: visable}}>
                <input type="text" onChange={addValue}/>
            </div>
        )
    }
    else if(visable !== 'hidden' && name !== "Backlog"){
        return (
            <div className="card-box__task" style={{visibility: visable}}>
                <select onChange={addValue}>
                <option></option>
                {dataBefor.map((item,id)=><option key={id}>{item.task}</option>)}
            </select>
            </div>
        )
    } 
}