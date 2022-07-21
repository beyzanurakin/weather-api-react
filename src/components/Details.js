import { Box, Grid, Heading, useToast } from '@chakra-ui/react'
import { NewBox } from './SmallComponents'
import { getWeatherByLocation } from '../redux/actions'
import { getItem } from '../helpers/sessionStorage'
import Forecast from './Forecast'
import Loading from './Loading'
import Error from './Error'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { useEffect } from 'react'

function Details() {
  //shallowequal is used to prevent re-render every property changes
  const {
    isLoading,
    weatherData: data,
    forecastData,
    isError,
  } = useSelector((state) => state, shallowEqual)
  const dispatch = useDispatch()
  const toast = useToast()

  useEffect(() => {
    //fetch data from localstorage
    let weather = getItem('weather')
    //if weather is not on the local storage fetch it from store by function
    !weather && dispatch(getWeatherByLocation(toast))
  }, [])

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : (
    <>
      <Box maxW={'1400px'} m={'30px auto 10px'} p={'20px'} minH={'550px'}>
        <Grid>
          <NewBox>
            <Box color={'#5e82f4'} p={'20px'} textAlign={'center'}>
              <Heading>{data.name}</Heading>
              <Heading fontSize={['100px', '120px', '120px', '100px', '120px']}>
                {/*  convert to celcius */}
                {Math.round(data.main.temp - 273)}
                <sup>o</sup>C
              </Heading>
              <Heading>{data.weather[0].main}</Heading>
            </Box>
          </NewBox>
        </Grid>
        <Grid
          mt={'40px'}
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
            'repeat(5, 1fr)',
            'repeat(8, 1fr)',
          ]}
          gap={'20px'}
        >
          {forecastData.map((e, i) => (
            <Forecast key={i} data={e} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Details
