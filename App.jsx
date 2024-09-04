import React from 'react';
import { Route, Routes } from 'react-router-dom'; // 'react-router' заменен на 'react-router-dom'
import Layout from './src/layout/layout';
import HeroMas from './src/pages/HeroListPage/testApi/HeroListPageComponents/HeroMas';
import useFetch from './src/hooks/useFeatch';
import HeroListPage from './src/pages/HeroListPage/testApi/HeroListPage';
import InformationAboutTheHeroes from './src/pages/InformationAboutTheHeroes/InformationAboutTheHeroes';
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='Error' element={<HeroListPage/>} />
                    <Route path='Error/:id' element={<InformationAboutTheHeroes/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;