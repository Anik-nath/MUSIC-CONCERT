import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import './SingerContainer.css';

const SingerContainer = () => {
    const [singer,setSinger] = useState([]);
    
    useEffect(()=>{
        fetch('./musician.JSON')
        .then(res => res.json())
        .then(data => setSinger(data))
    },[]);

    return (
        <div>
            <div className="container">
                <div className="singers">
                    {
                        singer.map(element => <Profile key={element.name} name={element.name} age={element.age}></Profile> )
                    }
                </div>
                <div className="selectedSinger">
                    <h3>hi</h3>
                </div>
            </div>
        </div>
    );
};

export default SingerContainer;