import styled from '@emotion/styled'

const Container = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #E3E3E3;
    display: flex;
    align-items: center;
    gap: 1em;
`
const Img = styled.img`
    display: block;
    width: 90px;

    @media (max-width: 465px) {
        width: 70px;
    }
`

const Txt = styled.p`
    font-size: 18px;
    margin-bottom: 5px;
    span{
        font-weight: 700;
        color: #FFFFFF;
    }
    @media (max-width: 465px) {
        font-size: 16px;
    }

    @media (max-width: 430px) {
        font-size: 14px;
    }
`

const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  
  return (
    <Container>
        <Img 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="img crypto" 
        />
        <div>
            <Txt>Price: <span>{PRICE}</span></Txt>
            <Txt>Higher price in the day: <span>{HIGHDAY}</span></Txt>
            <Txt>Lower price in the day: <span>{LOWDAY}</span></Txt>
            <Txt>Variation in last 24 hours: <span>{CHANGEPCT24HOUR} %</span></Txt>
            <Txt>Last update: <span>{LASTUPDATE}</span></Txt>
        </div>
        
    </Container>
  )
}

export default Resultado