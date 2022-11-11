import React, { useState } from "react";
import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"


let dataBacklog =[
  {iddata: 1, task: "Login page – performance issues", description: "Fix all the bugs of login page" },
  {iddata: 1, task: "Sprint bugfix", description: "Fix all the bugs"}
]
let dataReady = []
let dataInProgress = []
let dataFinished = [] 

function App() {
  const [task, setTask] = useState('');// добавление задачи из input
  const [index, setIndex] = useState('');
    
    const addValue = (event) =>{
        if(event.target.selectedIndex !== null){
            setTask(event.target.value);
            setIndex(event.target.selectedIndex);
        }
        else{
            setTask(event.target.value);
        }
    }
    const addTask = (name, data, item, dataBefor= '') =>{
      let namData;
      switch(name){
        case "Ready":
          namData=2;
          break
        case "In Progress":
          namData=3;
          break
        case "Finished":
          namData=4;
          break
      }
      if (name === 'Backlog')
        {
          data.push({ iddata: 1, task: item, description: "Add description" });
          setTask('');
        }
      else{
          data.push({iddata: namData, task: item, description: "Add description"});
          setTask('');
          delete dataBefor[index-1];
          setIndex('');
          dataBacklog = dataBacklog.filter(element => element != null);
          dataReady = dataReady.filter(element => element != null)
          dataInProgress = dataInProgress.filter(element => element != null)
          dataFinished = dataFinished.filter(element => element != null)
      }
    }

  return (
    <>
      <Header />
      {/* <TaskPage task={'dfsdf'}/> */}
      {/* <Routes>
        <Route path="" element={<Main/>}> 
      </Routes> */}
      <Main 
        dataBacklog = {dataBacklog} 
        dataReady = {dataReady} 
        dataInProgress = {dataInProgress}
        dataFinished = {dataFinished}
        addTask={addTask}
        addValue={addValue}
        task={task}
      />
      <Footer 
        dataReady = {dataReady} 
        dataFinished={dataFinished}
      />
    </>
  );
}

export default App;
