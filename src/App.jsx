import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImgCripto from './img/imagen-criptos.png'
import Form from './components/Form'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  color: #f5f5f5;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #4AA1DB;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      console.log(monedas)
    }
  }, [monedas])

  return (
    <Container>
        <Image 
          src={ImgCripto}
          alt="img-criptos"
        />
        <div>
            <Heading>Quote the most demanded Cryptocurrencies</Heading>
            <Form
              setMonedas={setMonedas}
            />
        </div>
        
    </Container>
  )
}

export default App
