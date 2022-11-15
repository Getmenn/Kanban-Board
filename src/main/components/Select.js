
export default function Select ({visable, addValue, dataBefor}){
    
    return(
        <div className="card-box__task" style={{visibility: visable}}>
                <select onChange={addValue}>
                <option></option>
                {dataBefor.map((item,id)=><option key={id}>{item.task}</option>)}
            </select>
        </div>
    )
}