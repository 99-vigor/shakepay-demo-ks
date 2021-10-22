import { useState } from 'react'
import styled from 'styled-components'
import bitcoinLogo from './images/currency btc.svg'
import ethereumLogo from './images/currency eth.svg'
import cadLogo from './images/currency cad.svg'
import './App.css';
import { CurrencyRow } from './components/CurrencyRow';
import { BalanceDisplay } from './components/BalanceDisplay';
import { COLORS } from './constants';

const Background = styled.div`
  background-color: ${COLORS.white};
  padding: 2em;
  display: flex;
  flex-direction: column;
  .balance-display {
    margin: 0em auto 2em auto;
  }
`

const rows = [
  {
    name: 'Dollars',
    icon: cadLogo,
    balance: 1856.34,
  },
  {
    name: 'Bitcoin',
    icon: bitcoinLogo,
    balance: 0.4946,
    effBalance: 12516.84,
    rate: 6187.99
  },
  {
    name: 'Ethereum',
    icon: ethereumLogo,
    balance: 2.9429,
    effBalance: 271.90,
    rate: 800.08
  }
]


function App() {
  const [totalBalance, setTotalBalance] = useState(8844.42)
  return (
    <Background>
      <BalanceDisplay balance={totalBalance}/>
      <div>
        { rows.map(row => <CurrencyRow {...row}/>)}
      </div>
    </Background>
  );
}

export default App;
