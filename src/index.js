import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
)
