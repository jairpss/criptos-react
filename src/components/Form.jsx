import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #4f54f5;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20px;
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: .8px;
    border-radius: 10px;
    margin-top: 30px;
    transition: background-color .3s ease-in-out;
    &:hover{
        background-color: #3c41cc;
        cursor: pointer;
    }
`

const Form = () => {
  const [criptos, setCriptos] = useState([])

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas)
  const [ cripto, SelectCripto ] = useSelectMonedas('Elige tu Criptomoneda', criptos)

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

  return (
    <form>
        <SelectMonedas />
        <SelectCripto />

        <InputSubmit 
            type="submit"
            value="Cotizar"
        />
    </form>
  )
}

export default Form