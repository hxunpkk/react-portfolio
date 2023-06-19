import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';

const SkillsBlock = styled.div`
    background: #111;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    color: white;
    .skills__title {
        margin: 40px 20%;
        height: 20%;
        h1 {
            @media ${props=>props.theme.mobile}{
                margin: 0;
            }
        }
        @media ${props=>props.theme.tabletS}{
            margin: 15px 20%;
            height: 15%;
        }
        @media ${props=>props.theme.mobile}{
            margin: 0 5px 20px 5px;
            height: 12%;
        }
        .skills__title__text {
            text-align: left;
            font-family: Montserrat;
            font-weight: 800;
        }
        .skills__title__list {
            img { 
                margin: 0.5rem;
                @media ${props=>props.theme.tabletS}{
                    margin: 0;
                }
            }
        }
    }
    .skills__desc {
        margin: 0 20% 2rem 20%;
        height: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media ${props=>props.theme.mobile}{
            margin: 0;
            height: 85%;
        }
        .skills__desc__article {
            width: 40%;
            border: 0.2rem solid rgb(190, 150, 0);
            border-radius: 2rem;
            text-align: left;
            position: relative;
            padding: 1rem;
            margin: 1rem;
            padding-bottom: 0;
            @media ${props=>props.theme.tabletS}{
                font-size: 14px;
                width: 80%;
            }
            @media ${props=>props.theme.mobile}{
                font-size: 12px;
                height: 15%;
                margin: 1rem 0 0 0;
            }
            .name {
                font-family: Montserrat;
                font-weight: 800;
                transform: rotate(-10deg);
                position: absolute;
                left: -1.5rem;
                top: -1.5rem;
                border: 0.2rem solid rgb(238, 238, 238);
                padding: 0.5rem 1rem;
                background: #111;
            }
            .content {
                font-family: Jua;
                p {
                    @media ${props=>props.theme.tabletS}{
                        margin: 0.2rem;
                    }
                    @media ${props=>props.theme.mobile}{
                        margin: 0;
                    }
                }
            }
        }
    }

    
`

const Skills = () => {
    useEffect(()=>{
        Aos.init({
            duration:500,
            once: true,
        })
    })

    return (
        <SkillsBlock>
            <div className='skills__title'>
                <div className='skills__title__text' data-aos="zoom-in-up" data-aos-duration="700" data-aos-once="false">
                    <h1>Skills</h1>
                </div>
                <div className='skills__title__list' data-aos="fade-right" data-aos-delay="700" data-aos-duration="800" data-aos-once="false">
                    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white" alt='html'/>
                    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white" alt='css'/>
                    <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=flat&logo=JavaScript&logoColor=white" alt='javascript'/>
                    <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jQuery&logoColor=white" alt='jquery'/>
                    <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=Vue.js&logoColor=white" alt='vuejs'/>
                    <img src="https://img.shields.io/badge/Vuetify-1867C0?style=flat&logo=Vuetify&logoColor=white" alt='vuetify'/>
                    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt='react'/>
                    <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white" alt='figma'/>
                </div>
            </div>
            <div className='skills__desc'>
                <div className='skills__desc__article' data-aos="fade-down-right" data-aos-delay="1500" data-aos-duration="500" data-aos-once="false">
                    <div className='name'>HTML/CSS</div>
                    <div className='content'>
                        <p>간단한 HTML/CSS 활용 웹 페이지 스타일링 경험이 있습니다.</p>
                        <p>미디어쿼리를 활용한 반응형 홈페이지 구현한 경험이 있습니다.</p>
                        <p>keyframe을 활용한 애니메이션 기법을 활용한 경험이 있습니다.</p>
                        <p>styled-component 를 활용한 경험이 있습니다.</p>
                        <p>SCSS 문법을 활용할 수 있습니다.</p>
                    </div>
                </div>
                <div className='skills__desc__article' data-aos="fade-down-left" data-aos-delay="2000" data-aos-duration="500" data-aos-once="false">
                    <div className='name'>JavaScript</div>
                    <div className='content'>
                        <p>기초적인 if, switch case, for, while 문을 활용할 수 있습니다.</p>
                        <p>비동기 요청을 통한 api 데이터를 활용한 경험이 있습니다.</p>
                        <p>이벤트 동작을 제어하여 홈페이지 구현 경험이 있습니다.</p>
                        <p>콘솔 동작 확인을 통한 기능 보완 경험이 있습니다.</p>
                    </div>
                </div>
                <div className='skills__desc__article' data-aos="fade-up-right" data-aos-delay="2500" data-aos-duration="500" data-aos-once="false">
                    <div className='name'>Vue</div>
                    <div className='content'>
                        <p>간단한 모바일 반응형 웹 페이지 스타일링 구현 경험이 있습니다.</p>
                        <p>Vuex 사용 경험이 있습니다.</p>
                        <p>Vuetify 를 활용한 페이지 스타일링 구현 경험이 있습니다.</p>
                    </div>
                </div>
                <div className='skills__desc__article' data-aos="fade-up-left" data-aos-delay="3000" data-aos-duration="500" data-aos-once="false">
                    <div className='name'>React</div>
                    <div className='content'>
                        <p>React 를 활용 간단한 웹 페이지 스타일링 구현 경험이 있습니다.</p>
                    </div>
                </div>
            </div>
            
        </SkillsBlock>
    );
};

export default Skills;