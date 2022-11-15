
export default function Input ({visable, addValue}){
    return (
        <div className="card-box__task" style={{visibility: visable}}>
                <input type="text" onChange={addValue}/>
            </div>
    )
}
