import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #4f54f5;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 22px;
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: .4px;
    border-radius: 10px;
    margin-top: 30px;
    transition: background-color .3s ease-in-out;
    &:hover{
        background-color: #3c41cc;
        cursor: pointer;
    }
`

const Form = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [ moneda, SelectMonedas ] = useSelectMonedas('Choose your coin', monedas)
  const [ cripto, SelectCripto ] = useSelectMonedas('Choose your Crypto', criptos)

  SelectMonedas()
  SelectCripto()

  useEffect(() => {
    const consultarAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        const arrayCriptos = resultado.Data.map(cripto => {
            const objeto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }
            return objeto
        })
        setCriptos(arrayCriptos)
    }
    consultarAPI()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if([moneda, cripto].includes('')) {
        setError(true)
        return
    }
    setError(false)
    setMonedas({
        moneda,
        cripto
    })
  }

  return (
    <>
        {error && <Error>Please fill all the fields</Error>}

        <form
            onSubmit={handleSubmit}
        >
            <SelectMonedas />
            <SelectCripto />

            <InputSubmit 
                type="submit"
                value="Quote"
            />
        </form>
    </>
    
  )
}

export default Form