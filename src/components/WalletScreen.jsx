import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { COLORS } from "../constants"
import { IconRow } from "./IconRow"
import debitIcon from '../images/cashin.svg'
import creditIcon from '../images/cashout.svg'
import exchangeIcon from '../images/exchange.svg'

const Background = styled.div`
  background-color: ${COLORS.white};
  padding: 2em;
  display: flex;
  flex-direction: column;
  .balance-display {
    margin: 0em auto 2em auto;
  }
  .wallet-header {
      font-size: 1.5em;
  }
  .back-button {
      cursor: pointer;
      margin-right: 2em;
      font-size: 2em;
      font-weight: bold;
  }
`
const currencyCodeToName = code => {
    switch (code) {
        case 'ETH': return 'Ethereum'
        case 'BTC': return 'Bitcoin'
        case 'CAD': return 'Dollars'
        default: return ''
    }
}

const mapTransactionToIconRow = ({ createdAt, currency, amount, to, direction }) => {
    const date = new Date(createdAt)
    const leftSub = date.toLocaleDateString('default', { month: 'long', day: '2-digit', year: 'numeric'})
    
    let icon, leftMain, effAmount
    if(direction === 'debit') {
        icon = creditIcon
        leftMain = 'Withdrawal'
        effAmount = -amount
    } else if(direction === 'credit') {
        icon = debitIcon
        leftMain = 'Deposit'
        effAmount = amount
    } else {
        // Exchange
        icon = exchangeIcon
        const toCurrency = to.currency
        leftMain = `Bought ${currencyCodeToName(toCurrency).toLowerCase()}`
        effAmount = to.currency === currency ? amount : -amount
    }
    const rightMain = currency === 'CAD' ? effAmount.toLocaleString('default', { style: 'currency', currency: 'CAD' }) : effAmount
    return { icon, leftMain, leftSub, rightMain}
}

const calculateBalance = (txs, currency) => {
    let balance = 0
    txs.forEach(tx => {
        const { amount } = tx
        if(tx.direction === 'debit') {
            balance -= amount
        } else if(tx.direction === 'credit') {
            balance += amount
        } else if(tx.direction === null) {
            const { from, to } = tx
            if(from.currency === currency) {
                balance -= from.amount
            } else if(to.currency === currency) {
                balance += to.amount
            }
        }
    })
    return balance
}

export const WalletScreen = ({ currency, onBackClick }) => {
    const [transactionList, setTransactionList] = useState([])
    const [balance, setBalance] = useState(0)
    useEffect(() => {
        axios
            .get('https://shakepay.github.io/programming-exercise/web/transaction_history.json')
            .then(res => {
                const filteredData = res.data.filter(item => item.currency === currency)
                setTransactionList(filteredData)
                setBalance(calculateBalance(filteredData, currency))
            })
    })
    return (
        <Background>
            <div className='wallet-header'>
                <div>
                    <span className='back-button' onClick={onBackClick}>{'<'}</span>
                    <span>{currencyCodeToName(currency)}</span>
                </div>
                <div>
                    Balance {currency === 'CAD' ? balance.toLocaleString('default', { style: 'currency', currency: 'CAD' }) : balance.toFixed(2)}
                </div>
                <div>
                    Transactions
                </div>
            </div>
            <div>
                {transactionList.map(tx => <IconRow {...mapTransactionToIconRow(tx)} />)}
            </div>
        </Background>
    )
}