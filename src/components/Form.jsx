import React from 'react'
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

  const [ SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas)
  SelectMonedas()

  return (
    <form>
        <SelectMonedas />
        <InputSubmit 
            type="submit"
            value="Cotizar"
        />
    </form>
  )
}

export default Form