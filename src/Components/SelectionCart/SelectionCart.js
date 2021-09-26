import React from 'react';
import './SelectionCart.css'
const SelectionCart = (props) => {

    // total cost calculation
    const {selectedMusician} = props;
    let total = 0;
    for(const selected of selectedMusician){
        total = total + selected.costToHire;
    }

    return (
        <div className="selectedSinger">
            <h3>Selected Musician : {props.selectedMusician.length} </h3>
            <p>Total Cost : $ {total}</p>
            {
                selectedMusician.map(select => <p key={select.age} className="show">{select.name}</p>)
            }
            <button className="confirm">Confirm</button>
        </div>
    );
};

export default SelectionCart;