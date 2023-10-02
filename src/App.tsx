import './App.css';
import {useEffect, useState} from "react";
import {HashRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";

import Home from "./pages/Home/Home";
import {Dream} from "./pages/dream/dream";

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  const isMobile = width <= 1100;


  return <div className="App">
    <div className="background"></div>
    <HashRouter>
      <Routes>
        {!isMobile && <>
          <Route path={'/dream'} element={<WithRoute component={<Dream/>}/>}/>
        </>}
        <Route path={'/'} element={<Home isMobile={isMobile}/>}/>
        <Route path={'/*'} element={<Navigate to={'/'}/>}/>
      </Routes>
    </HashRouter>
  </div>
}

const WithRoute = ({component}: {component: JSX.Element}) => {

  const navigate = useNavigate();
  return <>
    <img src={process.env.PUBLIC_URL+'/home.png'} alt="" id="home" width={60} onClick={() => navigate('/')}/>
    {component}
  </>
}

export default App;
