import React from 'react'
import { useWeather } from '../context/weatherContext'
import Loading from './Loading'
import SearchBox from './SearchBox'

const Card = () => {
  const { loading, data, dateBuilder } = useWeather()
  console.log(data)
  if (loading) {
    console.log(loading)
    return <Loading />
  }
  return (
    <div className='main grid place-items-center h-screen'>
      <img
        className='h-32'
        src='https://media.giphy.com/media/H2yU2zUuTbbZpLIhTO/giphy.gif'
        alt=''
      />
      <h3 class='font-medium leading-tight text-3xl mt-0 mb-2 text-green-800'>
        React Weather API
      </h3>

      <SearchBox />
      {data && (
        <div className='card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl'>
          <div className='mx-auto py-2 w-96'>
            <img
              src={
                data.main.temp > 25
                  ? 'https://media.giphy.com/media/gb9SFsccKF0Zy/giphy.gif'
                  : 'https://media.giphy.com/media/nFFguNjdeotwc/giphy.gif'
              }
              alt='profile'
            />
          </div>

          <div className='name text-gray-800 text-2xl font-medium mt-4 '>
            <h2>{Math.round(data.main.temp)} °c</h2>
          </div>
          <div className='username text-gray-500'>
            <h5>{data.weather[0].main}</h5>
          </div>
          <div className='date'>{dateBuilder(new Date())}</div>

          <div className='work text-gray-700 mt-4'>
            <h5>
              {data.name} , {data.sys.country}
            </h5>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
