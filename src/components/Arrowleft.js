import React, { useContext } from 'react';
import styled from 'styled-components';
import { AirContext } from '../context/AirContext';

const size = '10px';
const width = '2px';

const ArrowLeftBlock = styled.div`
    display: flex;
    align-items: center;
    float: right;
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
          &.arrow--left:before {
            transform: rotate(-135deg);
            right: 0;
            transition: right 0.3s 0.2s;
          }
          &.arrow--left:hover:before {
            right: 100%;
            transition: right 0.3s;
          }
          &:hover {
            transform: none;
          }
    }
`

const Arrowleft = () => {
    const {count, setCount} = useContext(AirContext)

    const onDecrease = () => {
        if(count === 0) {
          setCount(2)
        } else {
          setCount(count - 1)
        }
    }
    return (
        <ArrowLeftBlock>
            <div className="arrow arrow--left" onClick={onDecrease} >
                <span>Prev</span>
            </div>
        </ArrowLeftBlock>
    );
};

export default Arrowleft;