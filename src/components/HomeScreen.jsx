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
    id,
    name,
    icon,
    balance,
    effBalance,
    rate,
    onRowClick
}) => {
    return {
        icon,
        leftMain: name,
        leftSub: effBalance ? formatCurrencyAmount({ amount: effBalance }) : undefined,
        rightMain: balance,
        rightSub: rate ? formatCurrencyAmount({ amount: rate }) : undefined,
        onClick: onRowClick(id)
    }
}

export const HomeScreen = ({ totalBalance, balanceData, onRowClick }) => {
    return (
        <Background>
            <BalanceDisplay balance={totalBalance} />
            <div>
                {balanceData.map(balance => 
                    <IconRow {...formatBalance({...balance, onRowClick})} />
                )}
            </div>
        </Background>
    )
}