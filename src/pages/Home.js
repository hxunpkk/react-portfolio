import React from 'react';
import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
import Main from './Main';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import "aos/dist/aos.css";

const HomeSectionBlock = styled.div`
  .slide-navigation {
    display: none;
  }
  /*.slide-navigation button:nth-child(1) {
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
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 0px;
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
                    <About />
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