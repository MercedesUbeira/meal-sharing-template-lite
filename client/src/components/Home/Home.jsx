import React from 'react';
import { useNavigate} from 'react-router-dom';
import Background from '../../assets/video/Background.mp4';
import './Home.css';

function Home() {
    const navigate = useNavigate()
    return (
      <div className='home'>
        <video src={Background} autoPlay loop muted/>
        <div className='overlay'>
          <h1>Meal Sharing</h1>
          <h2>"The world is a better place when we share"</h2>
            <button className='start-btn' onClick={() => navigate('/meals')}>Start</button>
        </div>
      </div>
    );
  }

  export default Home;
