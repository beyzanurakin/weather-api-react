import React, { useState } from 'react'
import { Button, Center, Flex, Icon, Input, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getWeatherByCity, getWeatherByLocation } from '../redux/actions'
import { HiLocationMarker } from 'react-icons/hi'

function Navbar() {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const toast = useToast()
  const handleChange = () => {
    dispatch(getWeatherByCity(city, toast))
  }

  const handleLocationData = () => {
    dispatch(getWeatherByLocation(toast))
  }
  return (
    <Flex>
      <Center>
        <Input
          onInput={(e) => {
            setCity(e.target.value)
          }}
          value={city}
          borderRadius={'15px 0px  0px 15px'}
          bg={'white'}
          _focus={{ border: 'none' }}
          placeholder='city'
        ></Input>
        <Button
          onClick={handleChange}
          borderRadius={'0px 15px 0px 15px'}
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
