import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
`
const SubtitleGroup = styled.div`
    
`

export const CurrencyRow = ({ name, icon, balance, effBalance, rate}) => {
    return (
        <Wrapper>
            <img src={icon}/>
            <SubtitleGroup>
                {name}
                {effBalance}
            </SubtitleGroup>
            <SubtitleGroup>
                {balance}
                {rate}
            </SubtitleGroup>

        </Wrapper>
    )
}