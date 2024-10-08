import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // 'react-router' заменен на 'react-router-dom'
import Layout from "./src/layout/layout";
import HeroMas from "./src/pages/HeroListPage/testApi/HeroListPageComponents/HeroMas";
import useFetch from "./src/hooks/useFeatch";
import HeroListPage from "./src/pages/HeroListPage/testApi/HeroListPage";
import InformationAboutTheHeroes from "./src/pages/InformationAboutTheHeroes/InformationAboutTheHeroes";
import LoadingSpinner from "./src/UI/Loading/Loading";
function App() {
  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HeroListPage />} />
            <Route path=":id" element={<InformationAboutTheHeroes />} />
            <Route path="loading2" element={<LoadingSpinner />} />
          </Route>
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
