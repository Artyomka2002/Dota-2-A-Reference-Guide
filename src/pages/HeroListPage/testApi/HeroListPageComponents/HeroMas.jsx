import cl from './HeroMas.module.css'
import { links } from '../../../../JsonStorage/objectSort'
import { Link } from 'react-router-dom'
const HeroMas = ({ posts, sort }) => {
    if (!posts) return null
    return (
        <>
            <div className={cl.iconHeroes}>
                {posts.map((item) => (
                    <div key={item.id} className={cl.heroItem}>
                        <img src={sort(item, links)} alt={item.localized_name} className={cl.imgHeroes} />
                        {/* <div className={cl.nameHeroes}></div> */}
                        <Link  to={`${item.id}`} key={item.id}>{item.localized_name}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}
export default HeroMas