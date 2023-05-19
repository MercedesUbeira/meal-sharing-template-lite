import React from 'react';
import './AppWrapper.css'
import Background from '../../../assets/video/Background.mp4';

const AppWrapper = ({children}) => {
 return (
    <div className='App'>
    <video src={Background} autoPlay loop muted/>
    <div className='overlay'>
    </div>
    {children}
    </div>
 )
}

export default AppWrapper;