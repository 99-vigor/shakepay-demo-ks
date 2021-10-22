import styled from "styled-components"
import { COLORS } from "../constants"
import { formatCurrencyAmount } from "../helpers"
import { BalanceDisplay } from "./BalanceDisplay"
import { IconRow } from "./IconRow"

const Background = styled.div`
  background-color: ${COLORS.white};
  padding: 2em;
  display: flex;
  flex-direction: column;
  .balance-display {
    margin: 0em auto 2em auto;
  }
`

const formatBalance = ({
    name,
    icon,
    balance,
    effBalance,
    rate
}) => {
    return {
        icon,
        leftMain: name,
        leftSub: effBalance ? formatCurrencyAmount({ amount: effBalance }) : undefined,
        rightMain: balance,
        rightSub: rate ? formatCurrencyAmount({ amount: rate }) : undefined
    }
}

export const HomeScreen = ({ totalBalance, balanceData }) => {
    return (
        <Background>
            <BalanceDisplay balance={totalBalance} />
            <div>
                {balanceData.map(balance => <IconRow {...formatBalance(balance)} />)}
            </div>
        </Background>
    )
}