import './App.css'
import { useState, useEffect } from 'react'
import GetPlaceButton from './components/GetPlaceButton'
import PlaceSelectList from './components/PlaceSelectList'
import { maoriPlaceNamesData } from './assets/maoriPlaceNames.js'
import AnswerList from './components/AnswerList.jsx'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {
  const [englishPlace, setEnglishPlace] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [hint, setHint] = useState('');

  const MySwal = withReactContent(Swal)

  const getPlace = () => {
    const randomIndex = Math.floor(Math.random() * maoriPlaceNamesData.length);
    const randomPlace = maoriPlaceNamesData[randomIndex];
    setEnglishPlace(randomPlace);
    setHint(randomPlace.Components);
  };

  const checkAnswer = (selectedPlace) => {
    const answerInfo = {
      meaning: englishPlace.Meaning,
      selected: selectedPlace,
      isCorrect: selectedPlace === englishPlace.Placename
    };

    if (answerInfo.isCorrect) {
      MySwal.fire({
        title: 'Correct!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
      })
    } else {
      MySwal.fire({
        title: 'Wrong!',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
      })
    }
    setAnswers([...answers, answerInfo]);
    getPlace();
  };

  useEffect(() => {
    getPlace();
  }, []);

  return (
    <div className="app">
      <div className='mainSection'>
        <h1>Māori Place Name Quiz</h1>
        <p>English Translation: <b>{englishPlace?.Meaning}</b></p>
        <GetPlaceButton onClick={getPlace}/>
        <PlaceSelectList onSelect={checkAnswer}/>
        <AnswerList answers={answers}/>
      </div>
      <div className='hintSection'>
        <h3>Hint:</h3>
        <p>{hint}</p>
        <a href= {`https://www.google.com/search?q=new+zealand+map+${englishPlace?.Placename}`} target="_blank" rel="noopener noreferrer"><u>Learn more about this place</u></a>
      </div>
    </div>
  )
}

export default App
