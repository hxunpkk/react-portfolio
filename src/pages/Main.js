import Aos from 'aos';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MainBlock = styled.div`
    margin: 0;
    padding: 0;
    background: black;
    height: 100%;
    color: white;
    text-align: center;
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        h1 {
            font-size: 60px;
        }
        p {
            font-weight: bold;
            font-size: 36px;
            span {
                position: relative;
                font-size: 60px;
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
        font-size: 25px;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%, 0);
        animation: bounce 0.5s linear infinite;
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
            transfrom: translateY(-100%;)
        }
        50% {
            transform: translateY(20%);
        }
        100% {
            transform: translateY(0);
        }
    }
    
`

const Main = () => {
    const txt = "CONST HXUNPKK"
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        Aos.init({
            duration:500
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
            <div>
                <h1>{text}</h1>
                <p data-aos="fade-up" data-aos-delay="1600" data-aos-duration="600">언제나 배우고 성장하는</p>
                <p data-aos="fade-up" data-aos-delay="2200" data-aos-duration="600"><span>박현우</span>입니다.</p>
            </div>
            <FontAwesomeIcon data-aos="fade" data-aos-delay="3000" icon="fa-computer-mouse" data-aos-duration="600" className="mouse"/>
        </MainBlock>
    );
};

export default Main;