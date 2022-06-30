import React, { useContext, createContext } from 'react'
import { useState } from 'react'
import { getWeatherDataForCity, getWeatherDataForLocation } from '../api'

const WeatherContext = createContext(null)

export const useWeather = () => {
  return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
  const [data, setData] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [loading, setLoading] = useState(false)

  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  const fetchData = async () => {
    setLoading(true)
    const response = await getWeatherDataForCity(searchCity)
    setData(response)
    setLoading(false)
  }
  const fetchCurrentUserLocationData = () => {
    setLoading(true)
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data))
    })
    setLoading(false)
  }

  return (
    <WeatherContext.Provider
      value={{
        loading,
        searchCity,
        data,
        dateBuilder,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  )
}
