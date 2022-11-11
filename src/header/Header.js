import React, {useState} from "react";
import "./header.scss"
import avatar from "../icons/person.jpg"
import arrow from "../icons/arrows_bottom_chevron_direction_move_navigation_up_icon_123224.svg"



export default function Header(){
    const [visable, setVisable] = useState('hidden');
    const [active, setActive] = useState('');

    const handleClick = () =>{
        setVisable(visable === 'hidden'? 'unset' : 'hidden')
        setActive(active === '' ? 'active' : '')
    }
    return(
        <header>
            <div className="title">
                <h2>Awesome Kanban Board</h2>
            </div>    
                <div className="personLog" >
                    <img src={avatar} alt="avatar" className="avatar" onClick={handleClick}/>
                    <img src={arrow} alt="arrow" className={`arrow ${active}`} onClick={handleClick}/> 
                </div>
                <div className="dropDownList" style={{visibility: visable}}>
                    <div className="dropDownList_triangle"></div>
                    <p>Profile</p>
                    <p>Log Out</p>
                </div>

                
            
            
        </header>
    )
}