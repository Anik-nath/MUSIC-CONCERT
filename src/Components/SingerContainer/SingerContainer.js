import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import './SingerContainer.css';
import SelectionCart from '../SelectionCart/SelectionCart';

const SingerContainer = () => {
    const [singer,setSinger] = useState([]);
    const [selectedMusician,setSelectedMusician] = useState([]);

    useEffect(()=>{
        fetch('./musician.JSON')
        .then(res => res.json())
        .then(data => setSinger(data))
    },[]);

    const handleMusician = (musician) => {
        if(!selectedMusician.includes(musician)){
            const newMusician = [...selectedMusician, musician];
            setSelectedMusician(newMusician);
        }
       
    };

    return (
        <div>
            <div className="container">
                <div className="singers">
                    {
                        singer.map(element => <Profile element={element} key={element.name} handleMusician={handleMusician}></Profile> )
                    }
                </div>
                <div>
                    <SelectionCart selectedMusician={selectedMusician}></SelectionCart>
                </div>
            </div>
        </div>
    );
};

export default SingerContainer;