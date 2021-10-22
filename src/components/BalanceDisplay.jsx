import styled from "styled-components"

import mainLogo from '../images/logo.svg'

const Wrapper = styled.div`
    border: 1px solid black;
    width: min-content;
    .balance-display-logo {
        display: flex;
    }
    .balance-display-logo-img {
        margin: auto;
    }
    .balance-display-amount {
        display: flex;
    }
    .balance-display-amount-currency {
        font-weight: 400;
        font-size: 2em;
        margin-right: 0.5em;
        margin-top: 0.5em;
    }
    .balance-display-amount-number {
        font-weight: 400;
        font-size: 4em;
    }
`

export const BalanceDisplay = ({ balance, currency='$' }) => {
    return (
        <Wrapper>
            <div className='balance-display-logo'>
                <img src={mainLogo} className='balance-display-logo-img' />
            </div>
            <div className='balance-display-amount'>
                <span className='balance-display-amount-currency'>{currency}</span>
                <span className='balance-display-amount-number'>{balance}</span>
            </div>
        </Wrapper>
    )
}