import React from 'react';
import styled from 'styled-components';

const AboutBlock = styled.div`
    background: black;
    height: 100%;
    position: relative;
    .article {
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        border-radius: 5px;
    }
`

const About = () => {
    return (
        <AboutBlock>
            <div className="article">
                <div>이름</div>
                <div>경력</div>
            </div>
        </AboutBlock>
    );
};

export default About;