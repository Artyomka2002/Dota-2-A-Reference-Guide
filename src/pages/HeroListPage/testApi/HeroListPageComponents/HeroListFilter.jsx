import React from 'react';
import Select from '../../../../UI/Select/Select'
import cl from "./HeroListFilterContainer.module.css"
const HeroListFilter = ({ handleRoleSort, selectedSort, selectedAttribute, setSelectedAttribute, sortRoles, sortAtr, sortClose }) => {
    return (
        <div className={cl.containerFilter}>
            <div className={cl.rightFilter}>
                <span className={cl.spanFirstOpen}>Быстрый поиск по ролям :</span>
                <div className={cl.leftFilter}>
                    {sortRoles.map((item) => (
                        <button
                            className={cl.filterRoles}
                            onClick={() => handleRoleSort(item.roles)}
                            style={{ backgroundColor: selectedSort.includes(item.roles) ? 'rgb(0 0 0)' : 'rgb(81, 81, 81)' }}
                            key={item.id}
                        >
                            {item.roles}
                        </button>
                    ))}
                </div>
            </div>
            <div className={cl.filterAttr}>
                <span className={cl.spanFirstOpen}>Быстрый поиск по атрибуту :</span>
                <Select
                    value={selectedAttribute}
                    onChange={setSelectedAttribute}
                    defaultValue={'Выберите атрибут'}
                    options={sortAtr.map(attr => ({ value: attr.id, label: attr.name }))}
                />
                <button className={cl.closeBut} onClick={sortClose}>Сбросить фильтры</button>
            </div>
        </div>
    );
}

export default HeroListFilter;