import logo from './logo.svg';
import './App.css';
import backgrounds from './backgrounds'
import { useState } from 'react';
import toboggan from './img/toboggan.jpg'
import yeti_village from './img/yeti-village.jpg'
import bunny from './img/bunny-ears.mp4'
import outer from './img/outer-space.mp4'
import super_hero from './img/superhero-yeti.mp4'

function App() {
  const [selectedBackground, setBackground] = useState('')
  const handleChange = (event) => {
    setBackground(event.target.value);
    console.log(event.target.value);
  }

  let values = '';

  if (selectedBackground === 'bunny-ears') {
    values = <video src={bunny} loop autoPlay muted  ></video>
  }

  else if (selectedBackground === 'outer-space') {
    values = <video src={outer} loop autoPlay muted  ></video>
  }

  else if (selectedBackground === 'superhero-yeti') {
    values = <video src={super_hero} loop autoPlay muted  ></video>
  }

  else if (selectedBackground === 'toboggan') {
    values = <img src={toboggan} alt="logo" />
  }
  else if (selectedBackground === 'yeti-village') {
    values = <img src={yeti_village} alt="logo" />
  }

  else {
    values = <img src={logo} alt="logo" />
  }

  return (
    <div className="App-header">
      {values}

      <select name="select-bg" id="select-bg" onChange={handleChange}>
        <option value="" disabled selected hidden>
          Please Select One Background
          </option>
        {
          backgrounds.map((items, index) => (
            <option key={index} value={items.name}>{items.name}</option>))
        }
      </select>
    </div>
  );
}

export default App;
