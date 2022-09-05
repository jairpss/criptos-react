import React from 'react'
import styled from '@emotion/styled'

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
    transition: background-color .3s ease-in-out;
    &:hover{
        background-color: #3c41cc;
        cursor: pointer;
    }
`

const Form = () => {
  return (
    <form>
        <InputSubmit 
            type="submit"
            value="Cotizar"
        />
    </form>
  )
}

export default Form