import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import cl from './modal.module.css'


const Modal = ({ children, visible, setVisible, cross }) => {
    const rootClasses = [cl.modal]
    if (visible === true) {
        rootClasses.push(cl.modalactive)
    }
    return (
        <>
            <div style={{zIndex:2}} onClick={() => setVisible(false)} className={rootClasses.join('  ')}>
                <div onClick={(e) => e.stopPropagation()} className={cl.modalContent}>
                    <div className={cl.containerCross}>
                        <div onClick={() => setVisible(false)} className={cl.closeModal}>{cross}</div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Modal

//<> -- Работает быстрее чем div

// </div>
