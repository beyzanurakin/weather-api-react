import React, { useContext, createContext } from 'react'
import { useState } from 'react'
import { getWeatherDataForCity, getWeatherDataForLocation } from '../api'

const WeatherContext = createContext(null)

export const useWeather = () => {
    return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);


    const fetchData = async () => {
        console.log(searchCity)
        const response = await getWeatherDataForCity(searchCity);
        setData(response)
    }
    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then((data) => setData(data))
        })
    }

    return (
        <WeatherContext.Provider value={{
            searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocationData,
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}