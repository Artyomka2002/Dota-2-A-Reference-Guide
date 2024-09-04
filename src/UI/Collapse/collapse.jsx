import React from "react"
import cl from '../Collapse/Collapse.module.css'
import { useState } from "react"
const Collapse = ({ children, contentInfo, boolean }) => {
    const [classAct, setClassAct] = useState( boolean)
    return ( 
        <div>
            <div onClick={() => {
                setClassAct(boolean => ! boolean)
            }} className={`${classAct ? cl.visionBlickCl : cl.visionBlickCl_active}`} >{contentInfo}</div>
            <div style={{zIndex:1}} className={`${classAct ? cl.active_i : ''} ${cl.collapseBlockVis}`}>
                {children}
            </div>
        </div>
    )
}
export default Collapse
//item - boolean значение , переименовать