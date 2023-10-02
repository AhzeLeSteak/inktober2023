import './Home.css'
import {useNavigate} from "react-router-dom";
import gh from './gh.png';

function Home({isMobile}){
    const navigate = useNavigate();

    const themes = [
        'dream',
        'spiders',
        'path',
        'dodge'
    ];
    themes.length = 1;

    return <>
        <div id="main-menu">
            <img id="logo" src={process.env.PUBLIC_URL + '/inktober_logo.png'} width={367} height={160} alt=""/>

            <div id="themes">
                {themes.map((th, i) => <span className="card" onClick={() => navigate(`/${th}`)}>
              {i+1}.{th.toUpperCase()}
          </span>)}
            </div>
        </div>
        <img src={gh} alt="" id="home" width={60} onClick={() => window.location.replace('https://github.com/AhzeLeSteak/inktober2023')}/>
    </>;
}

export default Home;
