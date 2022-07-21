import React from 'react'
import { Container, Image } from '@chakra-ui/react'

function Loading() {
  return (
    <Container mt={['200px', '100px']}>
      <Image src='/images/loading.gif' />
    </Container>
  )
}

export default Loading
