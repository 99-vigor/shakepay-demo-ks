import styled from 'styled-components'
import { COLORS } from '../constants'
import { formatCurrencyAmount } from '../helpers'

const Wrapper = styled.div`
    display: flex;
    border: 1px solid black;
    .currency-logo {
        margin-right: 1em;
    }
    .currency-amount {
        margin-left: auto;
        .subtextgroup-main {
            float: right;
        }
    }
    padding: 1.5em;
`
const SubtextGroup = styled.div`
    .subtextgroup-main {
        font-weight: 400;
        font-size: 1.6em;
    }
    .subtextgroup-sub {
        color: ${COLORS.grey};
        font-size: 1.2em;
    }

`

export const CurrencyRow = ({ name, icon, balance, effBalance, rate, currency = '$' }) => {
    return (
        <Wrapper>
            <img src={icon} className='currency-logo'/>
            <SubtextGroup className='currency-name'>
                <div className='subtextgroup-main'>{name}</div>
                <div className='subtextgroup-sub'>
                    {effBalance && formatCurrencyAmount({ amount: effBalance, currency })}
                </div>
            </SubtextGroup>
            <SubtextGroup className='currency-amount'>
                <div className='subtextgroup-main'>{balance && balance.toLocaleString()}</div>
                <div className='subtextgroup-sub'>
                    {rate && formatCurrencyAmount({ amount: rate, currency })}
                </div>
            </SubtextGroup>
        </Wrapper>
    )
}