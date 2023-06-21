import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import Arrowbottom from '../components/Arrowbottom';

const ThirdTitleBlock = styled.div`
    background: #F07B3F;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    color: white;
    h1 {
        font-size: 72px;
        @media ${props=>props.theme.mobile}{
            font-size: 48px;
        }
    }
`

const ThirdTitle = () => {
    useEffect(()=>{
        Aos.init({
            duration:500,
            once: true,
        })
    })

    return (
        <ThirdTitleBlock>
            <div className='title'>
                <h1 data-aos="fade-in" data-aos-delay="100" data-aos-duration="800" data-aos-once="false">Projects.</h1>
                <Arrowbottom />
            </div>
        </ThirdTitleBlock>
    );
};

export default ThirdTitle;