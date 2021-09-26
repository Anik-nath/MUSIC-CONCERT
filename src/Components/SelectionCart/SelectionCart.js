import React from 'react';
import './SelectionCart.css'
const SelectionCart = (props) => {

    const {selectedMusician} = props;
    let total = 0;
    for(const selected of selectedMusician){
        total = total + selected.costToHire;
    }

    return (
        <div>
            <h3>Selected Musician : {props.selectedMusician.length} </h3>
            <p>{total}</p>
            {
                selectedMusician.map(select => <p className="selectedSinger">{select.name}</p>)
            }
        </div>
    );
};

export default SelectionCart;