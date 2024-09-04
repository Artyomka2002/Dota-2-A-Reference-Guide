import { useState, useMemo } from 'react';
import cl from './InfotmationAboutTheHeroes.module.css'
import { useSortImagesHeroYouTube } from '../../hooks/useSortImagesYoutube';
// import ErrorScreen from '../../UI/ErrorScreen/ErrorScreen';
import { useParams } from 'react-router-dom';
import Modal from '../../UI/MyModal/modal';
import useFetch from '../../hooks/useFeatch';
// import BoxRightContent from './informationAboutTheHeroesComponents/BoxRightContent';
import BoxRightContent from './informationAboutTheHeroesComponents/BoxRightContent';
import CollapseContainer from './informationAboutTheHeroesComponents/collapseContainer';
import NestedContent from './informationAboutTheHeroesComponents/nestedContend';
import { links } from '../../JsonStorage/objectSort';
import { sort } from '../../common';
// import LoadingScreen from '../../UI/loading/loading';

// название о 1 герое , s
const InformationAboutTheHeroes = () => {
    const { id } = useParams()
    const { dateded } = useSortImagesHeroYouTube()
    const [modal, setModal] = useState(false)
    const { data, loading, error } = useFetch(`https://api.opendota.com/api/heroStats/`)

    const dataSorce = useMemo(() => {
        if (!data && id) return null
        return data.find((i) => i.id == id);
    }, [id, data])

    // if (loading) return <LoadingScreen />
    if (!dataSorce) return null
    // if (error) return <ErrorScreen/>

    return (
        //    <>
        //    <NestedContent dataSorce={dataSorce}/>
        //     {dataSorce.localized_name } , Айди элемента 
        //    </>
        <main className={cl.main}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NestedContent dataSorce={dataSorce} sort={sort(dataSorce, links)} />
                <CollapseContainer dataSorce={dataSorce} dateded={dateded} id={id} />
            </div>
            <BoxRightContent dataSorce={dataSorce} id={id} />
        </main >
    )
}
export default InformationAboutTheHeroes


//    className={cl.containerLim}
//     <Modal setVisible={setModal} visible={modal} cross={'×'}>
//         <img style={{ height: '600px' }} src={sort(dataSorce, links)}></img>
//     </Modal>