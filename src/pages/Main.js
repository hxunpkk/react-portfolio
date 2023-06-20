import Aos from 'aos';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MainBlock = styled.div`
    background-color: #111111;
    margin: 0;
    padding: 0;
    height: 100%;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
    .bg {
        position: absolute;
        top: -50%;
        left: -50%;
        right: -50%;
        bottom: -50%;
        width: 200%;
        height: 200vh;
        background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
        background-repeat: repeat;
        animation: bg-animation .2s infinite;
        opacity: .9;
        visibility: visible;
    }
    .bg_text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        h1 {
            font-size: 60px;
            @media ${props=>props.theme.tabletS}{
                font-size: 32px;
            }
            &::after{
                border-right: 3px solid yellow;
                content: '';
                animation: typing 0.7s linear infinite;
            }
        }
        p {
            font-weight: bold;
            font-size: 36px;
            @media ${props=>props.theme.tabletS}{
                font-size: 16px;
            }
            span {
                position: relative;
                font-size: 60px;
                @media ${props=>props.theme.tabletS}{
                    font-size: 32px;
                }
                &:after{
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -10px;
                    width: 0px;
                    height: 4px;
                    margin: 5px 0 0;
                    transition: all 0.2s ease-in-out;
                    transition-duration: 0.3s;
                    background-color: yellow;
                    animation: lineFade 0.7s 2.8s linear forwards; 
                }
            }
        }
    }

    .mouse {
        position: absolute;
        bottom: 5%;
        left: 49.5%;
        transform: translate(-50%, 0);
        font-size: 24px;
        animation: bounce 0.5s linear infinite;
        @media ${props=>props.theme.tabletS}{
            display: none;
        }
    }

    .scroll_text {
        position: absolute;
        bottom: 5%;
        left: 50%;
        font-weight: bold;
        transform: translate(-50%, -50%);
        font-size: 18px;
        @media ${props=>props.theme.tabletS}{
            font-size: 14px;
        }
    }

    
    @keyframes lineFade {
        0% {
          width: 0%;
        }
        50% {
          width: 50%;
        }
        100% {
          width: 100%;
        }
    }

    @keyframes bounce {
        0% {
            transfrom: translateY(-100%);
        }
        50% {
            transform: translateY(20%);
        }
        100% {
            transform: translateY(0);
        }
    }
    
    @keyframes typing {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes bg-animation {
        0% { transform: translate(0,0) }
        10% { transform: translate(-5%,-5%) }
        20% { transform: translate(-10%,5%) }
        30% { transform: translate(5%,-10%) }
        40% { transform: translate(-5%,15%) }
        50% { transform: translate(-10%,5%) }
        60% { transform: translate(15%,0) }
        70% { transform: translate(0,10%) }
        80% { transform: translate(-15%,0) }
        90% { transform: translate(10%,5%) }
        100% { transform: translate(5%,0) }
    }
`

const Main = () => {
    const txt = "CONST HXUNPKK"
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        Aos.init({
            duration:500,
            once: true,
            // disable: function() {
            //     var maxWidth = 768;
            //     return window.innerWidth < maxWidth;
            //   }
        })

        const interval = setInterval(()=>{
            setText(text + txt[count]);
            setCount(count + 1);
        }, 100);
        if (count === txt.length) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    })

    return (
        <MainBlock>
            <div className="bg"></div>
            <div className='bg_text'>
                <h1>{text}</h1>
                <p data-aos="fade-up" data-aos-delay="1600" data-aos-duration="600" data-aos-once="false">언제나 배우고 성장하는</p>
                <p data-aos="fade-up" data-aos-delay="2200" data-aos-duration="600" data-aos-once="false"><span>박현우</span>입니다.</p>
            </div>
            <div className='scroll_text'><p data-aos="fade" data-aos-delay="3000" data-aos-duration="600">스크롤을 내려주세요.</p></div>
            <FontAwesomeIcon data-aos="fade" data-aos-delay="3000" data-aos-duration="600" icon="fa-computer-mouse" className="mouse"/>
        </MainBlock>
    );
};

export default Main;