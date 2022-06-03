import React, { useState } from 'react';

function CityFun(props) {

    const [CityName, setCityName] = useState('Surat');

    const ChangeCity = () => {
        setCityName ('Gandinagar');
    }

    return (
        <div>
            <p>{CityName}</p>
            <button onClick = {() => ChangeCity()}>Change City</button>
        </div>
    );
}

export default CityFun;