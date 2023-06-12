import React from 'react';
import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
import Main from './Main';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const HomeSectionBlock = styled.div`
    .controlPanel {
        display: none;
    }
`

const Home = () => {
    return (
        <HomeSectionBlock>
            <FullPage controls controlsProps={{className: 'controlPanel'}}>
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