export const formatCurrencyAmount = ({ amount, currency='$' }) => {
    return `${currency}${amount.toLocaleString()}`
}