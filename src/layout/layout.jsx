import { useEffect } from 'react'
import cl from '../layout/layout.module.css'
import { NavLink, Link, Outlet } from "react-router-dom"
// import svgDota2img from '../layout/sotasvg.png'
import TextAnimation from '../UI/textAnimation/textAnimation'
const Layout = () => {

    return (
        <>
            <header>
                <div className={cl.toPannel}>
                    <div className={cl.headerText}>
                        <div className={cl.headerLeftContent}>
                            <span>Dota 2 : A Reference Guide</span>
                        </div>
                    </div>
                    <div className={cl.headerRightContent}>
                        <div className={cl.rightSpanContainer}>
                            <NavLink style={{ textDecoration: 'none', color: '#F6D265' }} to='/'><span>Герои</span></NavLink >
                            <NavLink style={{ textDecoration: 'none', color: '#F6D265' }} to='Error'> <span>Летсплеи</span></NavLink >
                        </div>
                        <div>
                            <img className={cl.svgDota} />
                            {/* src={svgDota2img} */}
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
            <footer className={cl.footerCont}>
                <div className={cl.footerLinkContainer}>
                    <div>
                        FOOTERCONTENT
                    </div>
                    <a  className={cl.footerLink} href='https://artyomka2002.github.io/AboutMe/'>Вернуться к портфолио</a>
                </div>
            </footer>
        </>
    )
}
export default Layout 