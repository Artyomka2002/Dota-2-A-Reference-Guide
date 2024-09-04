import cl from './nestedContend.module.css'
import { sort } from '../../../common'
import { links } from '../../../JsonStorage/objectSort'
const NestedContent = ({ setModal, dataSorce}) => {
    return (
        <div className={cl.nestedCont} >
            <div className={cl.contInfoRight}>
                <img src={sort(dataSorce, links)} onClick={() => {
                    // setModal(true)
                }} className={cl.imgHeroesURL} />
                <label>{dataSorce.localized_name}</label>
            </div>
            <div className={cl.conteinerInfoLeft}>
                <span className={cl.spanHero}>О герое:</span>
                <div className={cl.ptext}>
                    <p style={{ color: '#bdbdbd' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex libero facilis cupiditate eligendi numquam debitis tempora nobis esse necessitatibus nisi nulla maiores blanditiis modi, reprehenderit quaerat eveniet quisquam pariatur dolorum!
                    </p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
export default NestedContent