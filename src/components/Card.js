import React from 'react'
import { useWeather } from '../context/weatherContext'


const Card = () => {
 const weather = useWeather()
 console.log(weather)
 return (
  <div className="card">
   <h2>{weather.data?.main.temp}. C</h2>
   <h5>
    {weather.data?.name}

   </h5>
  </div>
 )
}

export default Card