import React, { useState} from "react";
import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"
import LocalStorageSet from "./localStorage/LocaStorage";


function App() {
  const [task, setTask] = useState('');// добавление задачи из input
  const [index, setIndex] = useState('');
   
  LocalStorageSet();

  let dataBacklog = JSON.parse(localStorage.getItem('dataBacklog')) ;
  let dataReady = JSON.parse(localStorage.getItem('dataReady')) ;
  let dataInProgress = JSON.parse(localStorage.getItem('dataInProgress')) ;
  let dataFinished = JSON.parse(localStorage.getItem('dataFinished')) ;  

  const addValue = (event) =>{
      if(event.target.selectedIndex !== null){
          setTask(event.target.value);
          setIndex(event.target.selectedIndex);
      }
      else{
          setTask(event.target.value);
      }
  }
  
  const addTask = (data, name, item, dataBefor= '') =>{
    console.log(  data, 'data');
    let namData;
    let nameDataBefore;
    switch(name){
      case "Ready":
        namData=2;
        nameDataBefore = 'dataBacklog';
        break
      case "InProgress":
        namData=3;
        nameDataBefore = 'dataReady';
        break
      case "Finished":
        namData=4;
        nameDataBefore = 'dataInProgress';
        break
    }
    if (name === 'Backlog')
      {
        data.push({ iddata: 1, task: item, description: "Add description" });
        localStorage.setItem('dataBacklog', JSON.stringify(data));
        setTask('');
      }
    else{
        data.push({iddata: namData, task: item, description: "Add description"});
        localStorage.setItem(`data${name}`, JSON.stringify(data));
        setTask('');
        delete dataBefor[index-1];
        dataBefor = dataBefor.filter(element => element != null);
        localStorage.setItem(`${nameDataBefore}`, JSON.stringify(dataBefor));
        setIndex('');
    }
  } 

  return (
    <>
      <Header />
      <Main 
        dataBacklog = {dataBacklog} 
        dataReady = {dataReady} 
        dataInProgress = {dataInProgress}
        dataFinished = {dataFinished}
        addTask={addTask}
        addValue={addValue}
        task = {task}
        index = {index}
      />
      <Footer 
        dataReady = {dataReady} 
        dataFinished={dataFinished}
      />
    </>
  );
}

export default App;
