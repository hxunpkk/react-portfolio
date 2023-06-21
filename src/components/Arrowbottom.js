import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';

const ArrowbottomBlock = styled.div`
#mouse-scroll {
    style: block;
  }
  #mouse-scroll {
    position: absolute;
    margin: auto;
    left: 50%;
    bottom: 20%;
    -webkit-transform: translateX(-50%);
    z-index: 9999;
  }
  #mouse-scroll span{
    display: block;
    width: 5px; 
    height: 5px;
    -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
         transform: rotate(45deg);
         transform: rotate(45deg);
    border-right: 2px solid #fff; 
    border-bottom: 2px solid #fff;
    margin: 0 0 3px 5px;
  }
  #mouse-scroll .mouse {
    height: 21px;
    width: 14px;
    border-radius: 10px;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    border: 2px solid #ffffff;
    top: 170px;
  }
  #mouse-scroll .down-arrow-1 {
    margin-top: 6px;
  }
  #mouse-scroll .down-arrow-1, #mouse-scroll .down-arrow-2, #mouse-scroll .down-arrow-3 {
    -webkit-animation: mouse-scroll 1s infinite; 
      -moz-animation: mouse-scroll 1s infinite:
  }
  #mouse-croll .down-arrow-1 {
     -webkit-animation-delay: .1s; 
     -moz-animation-delay: .1s;
     -webkit-animation-direction: alternate;
  }
  #mouse-scroll .down-arrow-2 {
    -webkit-animation-delay: .2s; 
    -moz-animation-delay: .2s;
    -webkit-animation-direction: alternate;
  }
  #mouse-scroll .down-arrow-3 {
     -webkit-animation-delay: .3s;
     -moz-animation-dekay: .3s;
     -webkit-animation-direction: alternate;
  }
  #mouse-scroll .mouse-in {
    height: 5px;
    width: 2px;
    display: block; 
    margin: 5px auto;
    background: #ffffff;
    position: relative;
  }
  #mouse-scroll .mouse-in {
   -webkit-animation: animated-mouse 1.2s ease infinite;
    moz-animation: mouse-animated 1.2s ease infinite;
  }
  
  @-webkit-keyframes animated-mouse {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
       opacity: 0;
      -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
      transform: translateY(6px);
    }
  }
  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    } 
  }
  @keyframes mouse-scroll {
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
`

const Arrowbottom = () => {
    useEffect(()=>{
        Aos.init({
            duration:500,
            once: true,
        })
    })
    return (
        <ArrowbottomBlock>
            <div id="mouse-scroll" data-aos="fade-in" data-aos-delay="550" data-aos-duration="800" data-aos-once="false" >
                <div class="mouse">
                    <div class="mouse-in"></div>
                </div>
                <div>
                    <span class="down-arrow-1"></span>
                    <span class="down-arrow-2"></span>
                    <span class="down-arrow-3"></span>
                </div>
            </div>
        </ArrowbottomBlock>
    );
};

export default Arrowbottom;