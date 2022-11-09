import React, {useState} from "react";
import Card from "./components/Card";
import "./main.scss"

const dataBacklog =[
    {task: "Login page – performance issues"},
    {task: "Sprint bugfix"}
]
const dataReady = []
const dataInProgress = []
const dataFinished = []

export default function Main(){
    const [task,setTask] = useState('');// добавление задачи из input
    
    const addValue = (event) =>{
        if(event.target.value){
            setTask(event.target.value);
        }
    }

    const addTask = (item) =>{
        dataBacklog.push({task: item});
        setTask('')
    }

    return(
        <main>
            <Card name="Backlog" dataTask={dataBacklog} addValue={addValue} task={task} addTask={addTask}/> {/* //task эксперементально */}
            <Card name="Ready" dataTask={dataReady}/>
            <Card name="In Progress" dataTask={dataInProgress}/>
            <Card name="Finished" dataTask={dataFinished}/>
        </main>
    )
}