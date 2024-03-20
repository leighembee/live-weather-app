import { useState } from 'react';
import './styles.css';
import Header from './Components/Header';
import InputCity from './Components/InputCity';

// add state for city name
// handle input and handle submit

const App = () => {
  const [inputCity, setInputCity] = useState('New York');
  const [cityName, setCityName] = useState('New York');
  const inputHandler = (e) => setInputCity(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    setCityName(inputCity);
  };

  return (
    <div>
      <Header />
      <InputCity
        city={inputCity}
        onInputHandler={inputHandler}
        onSubmitHandler={submitHandler}
      />
    </div>
  );
};

export default App;
