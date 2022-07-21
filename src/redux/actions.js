import axios from 'axios'
import { weatherAppAPI } from '../helpers/API'
import { myToast } from '../helpers/extraFunctions'
import { setItem } from '../helpers/sessionStorage'
import {
  GET_DATA_ERROR,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from './actionTypes'

export const getDataLoading = () => {
  return { type: GET_DATA_LOADING }
}
export const getDataError = () => {
  return { type: GET_DATA_ERROR }
}
export const getDataSuccess = (payload) => {
  return { type: GET_DATA_SUCCESS, payload }
}

export const getWeatherByLocation = (toast) => (dispatch) => {
  const success = async (position) => {
    try {
      let { latitude, longitude } = position.coords
      dispatch(getDataLoading())
      let weatherData = await axios.get(
        `/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAppAPI}`
      )
      weatherData = weatherData.data
      let forecastData = await axios.get(
        `/onecall?lat=${latitude}&lon=${longitude}&exlude=hourly,minutely&units=metric&appid=${weatherAppAPI}`
      )
      forecastData = forecastData.data.daily
      let payload = { weatherData, forecastData }
      dispatch(getDataSuccess(payload))
      setItem('weather', payload)
      myToast(toast, 'Your location weather updated', 'success')
    } catch (err) {
      console.log(err)
      dispatch(getDataError())
    }
  }
  const error = (err) => {
    console.warn(`ERROR(${err.code}):${err.message}`)
    myToast(toast, 'Please turn on your location', 'error')
  }
  navigator.geolocation.getCurrentPosition(success, error)
}
export const getWeatherByCity = (city, toast) => async (dispatch) => {
  try {
    dispatch(getDataLoading())
    let weatherData = await axios.get(
      `/weather?q=${city}&appid=${weatherAppAPI}`
    )
    weatherData = weatherData.data
    let { lon, lat } = weatherData.coord
    let forecastData = await axios.get(
      `/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${weatherAppAPI}`
    )
    forecastData = forecastData.data.daily
    let payload = { weatherData, forecastData }
    dispatch(getDataSuccess(payload))
    setItem('weather', payload)
    myToast(toast, 'city weather data updated', 'success')
  } catch (err) {
    console.log(err)
    dispatch(getDataError())
    myToast(toast, 'city weather data doesnt exist', 'error')
  }
}
