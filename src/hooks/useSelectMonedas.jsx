import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 22px;
    font-family: 'Space Grotesk', sans-serif;
    display: block;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;
    color: gray;
    font-weight: 500;
    padding: 14px;
    border-radius: 10px;
`

const useSelectMonedas = (label, opciones) => {
    
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select>
                <option value="">Coin</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

    return [ SelectMonedas ]
}

export default useSelectMonedas