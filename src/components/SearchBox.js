import React from 'react'
import { useWeather } from '../context/weatherContext'

const SearchBox = () => {
  const weather = useWeather()

  const handleSubmit = (e) => {
    e.preventDefault()
    weather.fetchData()
  }
  const handleChange = (e) => {
    weather.setSearchCity(e.target.value)
  }
  return (
    <div>
      <div className='flex justify-center'>
        <form className='rounded px-2 pt-2' onSubmit={handleSubmit}>
          <div className='mb-3 xl:w-96'>
            <div className='input-group relative flex flex-wrap items-stretch w-full mb-4'>
              <input
                type='search'
                className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none'
                placeholder='Search here'
                value={weather.searchCity}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchBox
