import React, { useEffect, useState } from 'react';
import { createMaoriPlacenames } from '../assets/maoriPlaceNames.js';
import Select from 'react-select';
import { selectStyles, selectContainerStyle, buttonStyle } from './styles/selectStyles';

const PlaceSelectList = ({ onSelect }) => {
  const [selectData, setSelectData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
    
  const checkAnswer = () => {
    if (selectedPlace) {
        onSelect(selectedPlace.value);
    }
    else {
        alert('Please select a place');
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