import { useState } from 'react'
import bitcoinLogo from './images/currency btc.svg'
import ethereumLogo from './images/currency eth.svg'
import cadLogo from './images/currency cad.svg'
import './App.css';
import { HomeScreen } from './components/HomeScreen'
import { WalletScreen } from './components/WalletScreen';

const balanceData = [
  {
    id: 'CAD',
    name: 'Dollars',
    icon: cadLogo,
    balance: 1856.34,
  },
  {
    id: 'BTC',
    name: 'Bitcoin',
    icon: bitcoinLogo,
    balance: 0.4946,
    effBalance: 12516.84,
    rate: 6187.99
  },
  {
    id: 'ETH',
    name: 'Ethereum',
    icon: ethereumLogo,
    balance: 2.9429,
    effBalance: 271.90,
    rate: 800.08
  }
]

const VIEWS = {
  home: 'VIEWS_HOME',
  wallet: 'VIEWS_WALLET'
}

function App() {
  const [totalBalance, setTotalBalance] = useState(8844.42)
  const [view, setView] = useState(VIEWS.home)
  const [transactionCurrency, setTransactionCurrency] = useState(null)

  const handleCurrencyRowClick = id => () => {
    setView(VIEWS.wallet)
    setTransactionCurrency(id)
  }
  const handleWalletBackClick = () => {
    setView(VIEWS.home)
  }

  switch(view) {
    case VIEWS.wallet:
      return (
        <WalletScreen
          currency={transactionCurrency}
          onBackClick={handleWalletBackClick}
        />
      )
    default:
      return (
        <HomeScreen
          totalBalance={totalBalance}
          balanceData={balanceData}
          onRowClick={handleCurrencyRowClick}
        />
      )
  }
}

export default App;
