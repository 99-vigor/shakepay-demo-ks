import { useState } from 'react'
import styled from 'styled-components'
import bitcoinLogo from './images/currency btc.svg'
import ethereumLogo from './images/currency eth.svg'
import cadLogo from './images/currency cad.svg'
import './App.css';
import { CurrencyRow } from './components/IconRow';
import { BalanceDisplay } from './components/BalanceDisplay';
import { COLORS } from './constants';
import { HomeScreen } from './components/HomeScreen'

const balanceData = [
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
    <HomeScreen totalBalance={totalBalance} balanceData={balanceData}/>
  );
}

export default App;
