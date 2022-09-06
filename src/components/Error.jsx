import styled from '@emotion/styled'

const Msj = styled.div`
    background-color: rgb(228, 69, 69);
    color: #FFFFFF;
    padding: 10px;
    font-size: 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    text-align: center;
    border-radius: 4px;
`

const Error = ({children}) => {
  return (
    <Msj>{children}</Msj>
  )
}

export default Error