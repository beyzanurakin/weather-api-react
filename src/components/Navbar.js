import React, { useState } from 'react'
import {
  Button,
  Center,
  Flex,
  Icon,
  Input,
  useToast,
  Select,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getWeatherByCity, getWeatherByLocation } from '../redux/actions'
import { HiLocationMarker } from 'react-icons/hi'
import cityjson from '../cities.json'

function Navbar() {
  const [city, setCity] = useState('')
  const [cities, setCities] = useState(cityjson.data)
  const dispatch = useDispatch()
  const toast = useToast()
  const handleChange = () => {
    dispatch(getWeatherByCity(city, toast))
  }
  console.log(cities)

  const handleLocationData = () => {
    dispatch(getWeatherByLocation(toast))
  }
  const handleSelectChange = (e) => {
    let selectedCity = e.target.value
    dispatch(getWeatherByCity(selectedCity, toast))
    console.log(selectedCity.toLowerCase())
    // dispatch(getWeatherByCity())
  }
  return (
    <Flex
      p={'10px'}
      minH={'70px'}
      bg={'#d7defa'}
      justifyContent={'center'}
      flexDirection={['column', 'row']}
      gap={['10px', '20px']}
    >
      <Center>
        <Select
          onChange={handleSelectChange}
          placeholder='Select city'
          borderRadius={'15px'}
          bg={'white'}
        >
          {cities.map((c, i) => {
            return (
              <option key={c.id} value={c.name}>
                {c.name.toLowerCase()}
              </option>
            )
          })}
        </Select>
      </Center>
      <Center>
        <Input
          onInput={(e) => {
            setCity(e.target.value)
          }}
          value={city}
          borderRadius={'15px'}
          bg={'white'}
          _focus={{ border: 'none' }}
          placeholder='city'
        ></Input>
        <Button
          onClick={handleChange}
          borderRadius={'15px'}
          color={'white'}
          bg={'#5e83f4'}
          _hover={{ bg: '5e82f4' }}
        >
          Search
        </Button>
      </Center>
      <Center>
        <Button
          bg={'#5e82f4'}
          _hover={{ bg: '#5e82f4' }}
          color={'white'}
          w={'100%'}
          borderRadius={'15px'}
          leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}
          onClick={handleLocationData}
        >
          Your Location Weather
        </Button>
      </Center>
    </Flex>
  )
}

export default Navbar
