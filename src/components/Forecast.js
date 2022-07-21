import React from 'react'
import { Box, Icon, Text, useDisclosure } from '@chakra-ui/react'
import { ForecastBox } from './SmallComponents'
import { ImSun } from 'react-icons/im'
import { MdOutlineNightsStay } from 'react-icons/md'
//buraya bişey gelicekk
import { dateFormat } from '../helpers/extraFunctions'

function Forecast({ data }) {
  const { date, day } = dateFormat(data.dt)
  //custom hook from chakra that helps modal scenarios
  const { onOpen } = useDisclosure()

  return (
    <Box>
      <ForecastBox>
        <Box p={'5px'} bg={'#5e82f4'}>
          <Text fontWeight={500} color={'white'} fontSize={'18px'}>
            {date}
          </Text>
          <Text fontWeight={500} color={'white'} fontSize={'18px'}>
            {day}
          </Text>
        </Box>
        <Box onClick={onOpen} cursor={'pointer'} mt={'10px'}>
          <Text color={'#5e82f4'} fontWeight={500} fontSize={'27px'}>
            <Icon as={ImSun} /> {Math.round(data.temp.day)}
            <sup>o</sup> C
          </Text>
          <Text color={'#5e82f4'} fontWeight={500} fontSize={'27px'}>
            <Icon as={MdOutlineNightsStay} /> {Math.round(data.temp.night)}
            <sup>o</sup> C
          </Text>
          <Text color={'#5e82f4'} fontWeight={500} fontSize={'20px'}>
            {data.weather[0].main}
          </Text>
        </Box>
      </ForecastBox>
    </Box>
  )
}

export default Forecast
