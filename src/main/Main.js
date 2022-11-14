import React from "react";
import Card from "./components/Card";
import "./main.scss"

export default function Main({dataBacklog, dataReady, dataInProgress, dataFinished, addTask, addValue, task, index}){
    return(
        <main>
            <Card name="Backlog" dataTask={dataBacklog} addValue={addValue} task={task} addTask={addTask} index={index}/>
            <Card name="Ready" dataTask={dataReady} dataBefor={dataBacklog} addValue={addValue} task={task} addTask={addTask} index={index}/>
            <Card name="InProgress" dataTask={dataInProgress} dataBefor={dataReady} addValue={addValue} task={task} addTask={addTask} index={index}/>
            <Card name="Finished" dataTask={dataFinished} dataBefor={dataInProgress} addValue={addValue} task={task} addTask={addTask} index={index}/>
        </main>
    )
}