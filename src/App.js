import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import fetchWeather from './api/fetchWeather'
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap'



function App() {
  const [query, setQuery] = useState('')
  const [weathers, setWeathers] = useState({})

const search = async (e) => {
  if(e.key === 'Enter') {
    const data = await fetchWeather(query)
    setWeathers(data.data)
    setQuery('')
  }
}


useEffect(() => {

}, [])

  return (
    <div className="App">
      <header className="App-header">
    <h2>Weather App</h2>
        <InputGroup className='w-50'>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" 
        type="text"
        className="search mb-3"
        placeholder='Search a town...'
        value={query}
        onChange={(e) => setQuery (e.target.value)}
        onKeyPress={search}  
        />
  </InputGroup>
        {weathers.main&& (
          <div className="card w-75 text-dark mt-5 py-4 px-3">
            <h2>
              <span>{weathers.name}</span>{' '}
              <sup className="bg-info rounded-pill p-2">{weathers.sys.country}</sup>

            </h2>
             
          <div className="">
              {Math.round(weathers.main.temp)}
            <sup>°C</sup>
            </div>
          <div className="fs-6">
              <sup>
              feels like {Math.round(weathers.main.feels_like)}
            <sup>°C</sup>
              </sup>
            </div>

            <div>
              <img src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`} alt={weathers.weather[0].description}/>
              <p>{weathers.weather[0].description}</p>
              <Row>
          <Col className='p-0'>

             <p className=''><img src='https://img.icons8.com/glyph-neue/25/02bfe3/wind.png' alt='wind' /> {(weathers.wind.speed*1.852).toFixed(2)} km/h</p>
          </Col>
          <Col className='p-0'>
             <p className=''><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/24/000000/external-drop-medical-kiranshastry-gradient-kiranshastry.png" alt="humidity"/> {weathers.main.humidity}%</p>
          </Col>
              </Row>
              </div>
           
          </div>
            
        )}
      </header>
    </div>
  )
}

export default App
