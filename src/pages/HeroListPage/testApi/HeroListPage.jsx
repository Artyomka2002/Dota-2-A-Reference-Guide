import { useState, useEffect, useMemo } from "react";
// import cl from "./HeroListPage.module.css";
// import HeroMas from "./HeroListPageComponents/HeroMas";
// import HeroListFilter from "./HeroListPageComponents/HeroListFilterContainer";
import useFetch from "../../../hooks/useFeatch";
import { sort } from "../../../common";
import HeroMas from "./HeroListPageComponents/HeroMas";
import { sortAtr, links, sortRoles } from "../../../JsonStorage/objectSort"
import HeroListFilter from "./HeroListPageComponents/HeroListFilter";
import LoadingSpinner from "../../../UI/Loading/Loading";
// import { links } from "../../../JsonStorage/objectSort";
// import LoadingScreen from "../../../UI/loading/loading";
// import TextAnimation from "../../../UI/textAnimation/textAnimation";
const HeroListPage = () => {
    const { data, loading, error } = useFetch(`https://api.opendota.com/api/heroStats/`)
    const [selectedSort, setSelectedSort] = useState([]);
    const [selectedAttribute, setSelectedAttribute] = useState('');

    const sorterdPost = useMemo(() => {
        if (!data) return null;
        return data.filter(post => {
            const sortAttr = sortAtr.find(attr => attr.id === selectedAttribute);
            const matchRoles = selectedSort.length > 0 ? selectedSort.every(role => post.roles.includes(role)) : true;
            const matchAttribute = sortAttr ? post.primary_attr === sortAttr.id : true;
            return matchAttribute && matchRoles;
        });
    }, [data, selectedSort, selectedAttribute])

    const handleRoleSort = (role) => {
        setSelectedSort(prevSort => {
            return prevSort.includes(role) ? prevSort.filter(item => item !== role) : [...prevSort, role];
        });
    }
    const sortClose = () => {
        setSelectedAttribute([])
        setSelectedSort([])
    }

    if (loading) return <LoadingSpinner/> 
    if (!sorterdPost) return null

    //Можно вынести в хук состояния .. Пересмотреть 17-20 строки , возможно сделать бзе тернарника
    return (
        <>
            {/* <TextAnimation > Приветствую.Данный проект представляет собой "Мини-Библиотеку", c подробными данными о герое, имеющихся на сервере.
                Проект бы реальзован и придуман мной.Суть проекта была в реализации данных с бесплатного сервера 'openDota'.
                На данный момент в проекте используется бесплатный Api, в связи с чем доработка проекта откладывается до момента написания мной собственного сервера на технологии Node.js.
            </TextAnimation >  */}
            {/* <div className={cl.mainContainerHeight}>
                <div className={cl.mainBlock}>
                    <div className={cl.toPannelBottom}>*/}
            <HeroListFilter
                handleRoleSort={handleRoleSort}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                selectedAttribute={selectedAttribute}
                setSelectedAttribute={setSelectedAttribute}
                sortAtr={sortAtr}
                sortRoles={sortRoles}
                sortClose={sortClose}
            />
            <div style={{ display: 'flex', justifyContent: 'space-bettwen' }}>
                <HeroMas posts={sorterdPost} sort={sort} />
            </div>
            {/* </div> */}
            {/* // </div>  */}
            {/* // </div>  */}
        </>
    );
};
export default HeroListPage


















