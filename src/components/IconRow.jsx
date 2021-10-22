import styled from 'styled-components'
import { COLORS } from '../constants'

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

export const IconRow = ({ name, icon, leftMain, leftSub, rightMain, rightSub }) => {
    return (
        <Wrapper>
            <img src={icon} className='currency-logo' />
            <SubtextGroup className='currency-name'>
                <div className='subtextgroup-main'>{leftMain}</div>
                <div className='subtextgroup-sub'>{leftSub}</div>
            </SubtextGroup>
            <SubtextGroup className='currency-amount'>
                <div className='subtextgroup-main'>{rightMain}</div>
                <div className='subtextgroup-sub'>{rightSub}</div>
            </SubtextGroup>
        </Wrapper>
    )
}