import React, {useContext} from 'react';
import styled from 'styled-components';
import { AirContext } from '../context/AirContext';

const size = '10px';
const width = '2px';

const ArrowRightBlock = styled.div`
    display: flex;
    align-items: center;
    .arrow {
        color: #fff;
        display: block;
        align-items: flex-start;
        text-transform: uppercase;
        position: relative;
        transition: transform 0.3s;
        font-family: Righteous;
        span {
            display: block;
            width: 3em;
            opacity: 0;
            transition: opacity 0.3s 0s;
            padding: 0 0.5em;
          }
          &:hover span {
            opacity: 1;
            transition: opacity 0.3s 0.1s;
            @media ${props=>props.theme.mobile}{
              opacity: 0;
            }
          }
          &:before {
            content: '';
            display: block;
            border: solid #fff;
            border-width: ${width} ${width} 0 0;
            position: absolute;
            top: 4px;
            width: ${size};
            height: ${size};
          }
          &.arrow--right {
            text-align: right;
          }
          &.arrow--right:before {
            left: 0;
            transform: rotate(45deg);
            transition: left 0.3s 0.2s;
          }
          &.arrow--right:hover:before {
            left: 100%;
            transition: left 0.3s;
            @media ${props=>props.theme.mobile}{
              left: 0;
              transition: 0;
            }
          }
          &:hover {
            transform: none;
          }
    }
`

const Arrowright = () => {
  const {count, setCount} = useContext(AirContext)

  const onIncrease = () => {
    if(count === 3) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }
    
    return (
        <ArrowRightBlock>
            <div className="arrow arrow--right" onClick={onIncrease}>
                <span>Next</span>
            </div>
        </ArrowRightBlock>
    );
};

export default Arrowright;