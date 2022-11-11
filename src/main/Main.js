import React from "react";
import Card from "./components/Card";
import "./main.scss"
//import { Outlet } from "react-router-dom";

/* let dataBacklog =[
    {task: "Login page – performance issues"},
    {task: "Sprint bugfix"}
]
let dataReady = []
let dataInProgress = []
let dataFinished = [] */

export default function Main({dataBacklog, dataReady, dataInProgress, dataFinished, addTask, addValue, task}){
    return(
        <main>
            <Card name="Backlog" dataTask={dataBacklog} addValue={addValue} task={task} addTask={addTask}/>
            <Card name="Ready" dataTask={dataReady} dataBefor={dataBacklog} addValue={addValue} task={task} addTask={addTask}/>
            <Card name="In Progress" dataTask={dataInProgress} dataBefor={dataReady} addValue={addValue} task={task} addTask={addTask}/>
            <Card name="Finished" dataTask={dataFinished} dataBefor={dataInProgress} addValue={addValue} task={task} addTask={addTask}/>
        </main>
    )
}