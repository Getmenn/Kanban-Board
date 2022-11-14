import React from "react";
import "./footer.scss"

export default function Footer({dataReady, dataFinished}){
    return(
        <footer>
            <div className="block-task">
                <h2>Active tasks: {dataReady.length}</h2>
                <h2>Finished tasks: {dataFinished.length}</h2>
            </div>
            <div className="block-footer">
                <h2>Kanban board by Artem, 2022</h2>
            </div>
        </footer>
    )
}