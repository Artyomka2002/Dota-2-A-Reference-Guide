import Collapse from "../../../UI/Collapse/collapse"
import { sortGrafics } from "../../../JsonStorage/objectSort"
import cl from '../informationAboutTheHeroesComponents/collapseContainer.module.css'
import Grapfics from "../../../UI/grapfics/grapfics"
import { win } from "../../../common"
const CollapseContainer = ({ dataSorce, dateded, id }) => {
    const sortVid = (dateded, id) => {
        return dateded.find(atr => atr.name == id)
    }
    const sortsVid = sortVid(dateded, id)
    if (!sortsVid) return null
    return (
        <div className={cl.colapseContainer}>
            <Collapse id="collapse1" contentInfo={'Статистика героя за сутки'}>
                <div style={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    padding: '20px'
                    
                }}>
                    <div className={cl.containerGraficsItem}>
                        {sortGrafics(dataSorce, win).map((item) => {
                            return (
                                <div className={cl.GrInfo} key={item.id || index}>
                                    <h3>{item.name}</h3>
                                    <Grapfics dated={dataSorce} indexs={item.prop} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className={cl.pBottom}>Данные взяты из открытого API источника и не имеют ничего общего с реальностью</p>
            </Collapse>
            <Collapse id="collapse2"  boolean={true} contentInfo={'Обзор героя'}>
                <div className={cl.videoContantContainer}>
                    <span>Популярные обзоры</span>
                    <div className={cl.videoContant}>
                        {sortsVid.src.map((item) => {
                            return (
                                <div>
                                    <iframe style={{ width: 'inherit', height: 'inherit' }} src={item} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                </div>
                            )
                        })}
                    </div>
                    <p className={cl.pBottom} >Для загрузки видео , подключите VPN(YouTube)</p>
                </div>
            </Collapse>
            <Collapse id="collapse3"  boolean={true} contentInfo={'Collapse контент 3'}>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus necessitatibus sapiente, quo illo quam rerum dolorem iusto aliquam maiores laboriosam, accusamus qui exercitationem optio magnam repudiandae totam nemo saepe eum.</Collapse>
        </div >


    )
}
export default CollapseContainer