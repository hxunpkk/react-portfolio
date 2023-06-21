import React from 'react';
import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
import Main from './Main';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';
import FirstTitle from './FirstTitle';
import SecondTitle from './SecondTitle';
import ThirdTitle from './ThirdTitle';
import "aos/dist/aos.css";

const HomeSectionBlock = styled.div`
  font-family: 'NEXON Lv2 Gothic';
  .slide-navigation {
    display: none;
  }
  /*.slide-navigation button:nth-child(2) {
    display: none;
  }

  .slide-navigation button:nth-child(1) {
    display: none;
  }
  
  .slide-navigation button:nth-last-child(1) {
    display: none;
  }
  
  .slide-navigation button {
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    width: 5px;
    height: 15px;
    margin: 0 5px;
    font-size: 0px;
    cursor: pointer;
  }
  
  .slide-navigation {
    position: fixed;
    float: left;
    bottom: 50%;
    z-index:99999;
  }
  
  .slide-navigation button:disabled {
    background-color: black;
    border: 1px solid white;
  }*/
`

const Home = () => {
    return (
        <HomeSectionBlock>
            <FullPage controls 
            controlsProps={{className: 'slide-navigation'}}>
                <Slide>
                    <Main />
                </Slide>
                <Slide>
                    <FirstTitle />
                </Slide>
                <Slide>
                    <About />
                </Slide>
                <Slide>
                    <SecondTitle />
                </Slide>
                <Slide>
                    <Skills />
                </Slide>
                <Slide>
                    <ThirdTitle />
                </Slide>
                <Slide>
                    <Project />
                </Slide>
                <Slide>
                    <Contact />
                </Slide>
            </FullPage>
        </HomeSectionBlock>
    );
};

export default Home;