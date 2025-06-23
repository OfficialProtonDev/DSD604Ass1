import React, { useEffect, useState } from 'react';
import { createMaoriPlacenames } from '../assets/maoriPlaceNames.js';
import Select from 'react-select';
import { selectStyles, selectContainerStyle, buttonStyle } from './styles/selectStyles';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const PlaceSelectList = ({ onSelect }) => {
  const [selectData, setSelectData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const MySwal = withReactContent(Swal)
    
  const checkAnswer = () => {
    if (selectedPlace) {
        onSelect(selectedPlace.value);
    }
    else {
        MySwal.fire({
            title: 'Please select a place',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500,
            heightAuto: false,
        })
    }
  }

  useEffect(() => {
    setSelectData(createMaoriPlacenames());
  }, []);

  return (
    <>
    <h2>Choose Māori Name:</h2>
    <div style={selectContainerStyle}>
      <Select 
        options={selectData} 
        styles={selectStyles}
        placeholder="Select translation..."
        onChange={setSelectedPlace}
      />
      <button style={buttonStyle} onClick={checkAnswer}>Check Answer</button>
    </div>
    </>
  );
};

export default PlaceSelectList