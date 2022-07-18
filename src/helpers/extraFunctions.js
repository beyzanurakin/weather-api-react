export const celcius = (x) => (x - 273).toFixed()
export const myToast = (toast, title, status, description) =>
  toast({
    title,
    description,
    status,
    duration: 5000,
    isClosable: true,
  })

export const dateFormat = () => {
  const milliseconds = dt * 1000
  let myDate = newDate(milliseconds)
  let date = myDate.toLocaleString('en-GB').split(',')[0]
  let day = myDate.toLocaleString('en-US', { weekday: 'long' })
  return { date, day }
}
