import React from 'react'
import { useWeather } from '../context/weatherContext'


const SearchBox = () => {
 const weather = useWeather();

 const handleSubmit = (e) => {
  e.preventDefault();
  weather.fetchData()
 }
 const handleChange = (e) => {
  weather.setSearchCity(e.target.value)

 }
 return (
  <div>
   <form onSubmit={handleSubmit}>
    <input placeholder='Search here'
     value={weather?.searchCity}
     onChange={handleChange}
    />
   </form>mugla
  </div>
 )
}

export default SearchBox