import cl from './BoxRightContent.module.css'
import imgAttack from '../img/icon_damage.png'
import imgTimeAttack from '../img/icon_attack_time.png'
import imgRadAttacks from '../img/icon_attack_range.png'
import imgVision from '../img/icon_vision.png'
import imgBron from '../img/icon_armor.png'
import imgMageResist from '../img/icon_magic_resist.png'
import imgTimeAttacks from '../img/icon_turn_rate.png'
import imgSpeed from '../img/icon_movement_speed.png'
import imgStr from '../img/hero_strength.png'
import { sortAtr } from '../../../JsonStorage/objectSort'
import { Link, useNavigate, useParams } from 'react-router-dom';

const BoxRightContent = ({ dataSorce, id }) => {
    const navigate = useNavigate();


    const sortAttrIcon = sortAtr.find(arr => arr.id === dataSorce.primary_attr)

    return (
        <>
            <div className={cl.rightInfo}>
                <h2 className={cl.h2Attr}>Основные характеристики героя</h2>
                <div className={cl.blockLeftMainInfo}>
                    <div className={cl.contSpan}>
                        <span>Базовый интелект: {dataSorce.base_int}</span>
                        <span>Базовая ловкость: {dataSorce.base_str}</span>
                    </div>
                    <div className={cl.attrOne}>
                        <span>Базовая сила: {dataSorce.base_agi}</span>
                        <span>Прирост за уровень: {dataSorce.agi_gain}</span>
                    </div>
                </div>
                <main className={cl.mainTwo}>
                    <h2 className={cl.attrHerosSpan}>
                        Базовые характеристики героя
                    </h2>
                    <div className={cl.contBotInfo}>
                        <div className={`${cl.containerTopImg} ${cl.conainetLeftTopImg}`}>
                            <label>Базовая атака</label>
                            <div>
                                <img src={imgAttack} alt="MISSING JPG" />
                                <p>{dataSorce.base_attack_min}/{dataSorce.base_attack_max}</p>
                            </div>
                            <label>Интервал атаки</label>
                            <div>
                                <img src={imgTimeAttack} alt="MISSING JPG" />
                                <p>{dataSorce.attack_point}</p>
                            </div>
                            <label>Радиус атаки</label>
                            <div>
                                <img src={imgRadAttacks} alt="MISSING JPG" />
                                <p>{dataSorce.attack_range}</p>
                            </div>
                            <label>Обзор</label>
                            <div>
                                <img src={imgVision} alt="MISSING JPG" />
                                <p>{dataSorce.day_vision}/{dataSorce.night_vision}</p>
                            </div>
                            <label>Базовая броня</label>
                            <div>
                                <img src={imgBron} alt="MISSING JPG" />
                                <p>{dataSorce.base_armor}</p>
                            </div>
                        </div>
                        <div className={cl.containerTopImg}>
                            <label>Сопротивление магии</label>
                            <div>     <img src={imgMageResist} alt="MISSING JPG" />
                                <p>{dataSorce.base_mr + '%'}</p></div>
                            <label>Скорость атаки</label>
                            <div>     <img src={imgTimeAttacks} alt="MISSING JPG" />
                                <p>{dataSorce.base_attack_time}</p></div>
                            <label>Скорость передвижения</label>
                            <div>     <img src={imgSpeed} alt="MISSING JPG" />
                                <p>{dataSorce.move_speed}</p></div>
                            <label>Основной атрибут</label>
                            <div>
                                <img style={{ height: '32px' }} src={imgStr} alt="MISSING JPG" />
                                <p>{dataSorce.primary_attr === sortAttrIcon.id ? sortAttrIcon.name : 'Не нашел'}</p>
                            </div>
                            <label>Скорость атаки</label>
                            <div>      <img src={imgBron} alt="MISSING JPG" />
                                <p>TEXT</p></div>
                        </div>
                    </div>
                </main>
                <div className={cl.HeatManaContainer}>
                    <div className={cl.Health} >
                        <span></span>
                        <span>{dataSorce.base_health}</span>
                        <span>{'+' + dataSorce.base_health_regen}</span>
                    </div>
                    <div className={cl.Manapul} >
                        <span></span>
                        <span>{dataSorce.base_mana}</span>
                        <span>{'+' + dataSorce.base_mana_regen + ',00'}</span>
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                        const nextId = parseInt(id, 10) - 1;
                        navigate(`${nextId}`);
                    }}>Предыдущий герой</button>
                    <button onClick={() => {
                        const nextId = parseInt(id, 10) + 1;
                        navigate(`${nextId}`);
                    }}>Следущий герой</button>
                </div>
            </div>
        </>
    )
}

export default BoxRightContent