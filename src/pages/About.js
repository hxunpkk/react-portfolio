import React from 'react';
import styled from 'styled-components';

const AboutBlock = styled.div`
    background: black;
    height: 100%;
    display: flex;
    .article {
        flex: 1;
        background: white;
        justify-content: center;
        align-items: center;
        padding: 60px;
        border-radius: 5px;
        display: flex;
        margin: auto 60px;
        @media ${props=>props.theme.mobile}{
            flex-direction: column;
            padding: 0 10px;
            margin: auto;
        }

        h2 {
            font-size: 25px;
            font-weight: lighter;
            color: #282828;
            border-bottom: 1px solid #ebebeb;
            padding-bottom: 5px;
            @media ${props=>props.theme.tabletS}{
                font-size: 16px;
            }
        }

        .list_text {
            font-size: 14px;
            font-weight: bold;
            padding: 0;
            .title_text {
                float: left;
                margin: 0;
            }
            .year_text {
                float: right;
                margin: 0;
            }
        }

        .desc {
            padding: 0;
            font-size: 12px;
            float: left;
            margin-bottom: 6px;
            p {
                margin: 6px 0;
            }
            .desc_sub {
                padding-left: 4px;
                @media ${props=>props.theme.tabletS}{
                    display: none;
                }
            }
        }
        .d_left {
            flex-direction: column;
            width: 50%;
            height: 100%;
            display: flex;
            padding-right: 30px;
            @media ${props=>props.theme.tabletS}{
                width: 100%;
                height: 50%;
                padding-right: 0;
            }
            div {
                width: 100%;
                height: 33%;
            }
            .info {
                display: flex;
                .pics {
                    width: 30%;
                    height: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .name {
                    padding: 20px;
                    width: 70%;
                    height: 100%;
                    font-size: 22px;
                    font-weight: lighter;
                    @media ${props=>props.theme.tabletS}{
                        padding: 0;
                        font-size: 16px;
                        text-align: right;
                    }
                }
            }
            .about {
                p {
                    margin: 5px 0;
                    @media ${props=>props.theme.tabletS}{
                        font-size: 14px;
                    }
                }
            }
        }

        .d_right {
            flex-direction: column;
            width: 50%;
            height: 100%;
            display: flex;
            @media ${props=>props.theme.tabletS}{
                width: 100%;
                height: 50%;
            }
            div {
                width: 100%;
                height: 50%;
            }
        }
    }
`

const About = () => {
    return (
        <AboutBlock>
            <div className="article">
                <div className="d_left">
                    <div className="info">
                        <div className="pics">
                            <img src='pics/face.jpg' />
                        </div>
                        <div className="name">
                            <p>박현우</p>
                            <p>Park Hyunwoo</p>
                            <p>96. 02. 07</p>
                        </div>
                    </div>
                    <div className="about">
                        <h2>About Me</h2>
                        <p>언제나 성실하게 성장을 도모하는
                        프론트엔드 개발 지망생
                        박현우 입니다.</p>
                    </div>
                    <div className="exp">
                        <h2>Experience</h2>
                        <div className='list_text'>
                            <p className='title_text'>백석대학교 창업지원단</p>
                            <p className='year_text'>22. 04 - 22. 12</p>
                        </div>
                        <div className='desc'>
                            <p>창업지원단 행정직 업무 수행</p>
                            <p className='desc_sub'>- 대학혁신지원사업 관련업무</p>
                        </div>
                    </div>
                </div>
                <div className="d_right">
                    <div className="education">
                        <h2>Education</h2>
                        <div className='list_text'>
                            <p className='title_text'>광명고등학교 졸업</p>
                            <p className='year_text'>12. 03 - 15. 02</p>
                        </div>
                        <div className='desc'>
                            <p>광명고등학교 문과 졸업</p>
                        </div>
                        <div className='list_text'>
                            <p className='title_text'>백석대학교 졸업</p>
                            <p className='year_text'>16. 03 - 22. 02</p>
                        </div>
                        <div className='desc'>
                            <p>컴퓨터공학부 멀티미디어학 전공</p>
                        </div>
                        <div className='list_text'>
                            <p className='title_text'>그린컴퓨터아카데미 이수</p>
                            <p className='year_text'>22. 12 - 23. 06</p>
                        </div>
                        <div className='desc'>
                            <p>프로젝트 기반 프론트엔드(React,Vue) 웹&앱 SW개발자 양성과정</p>
                        </div>
                    </div>
                    <div className="award">
                        <h2>Award</h2>
                        <div className='list_text'>
                            <p className='title_text'>Smart IT 창작물 경진대회 동상</p>
                            <p className='year_text'>21. 12</p>
                        </div>
                        <div className='desc'>
                            <p>백석대학교 Smart IT 창작물 경진대회 동상 수상</p>
                            <p className='desc_sub'>- 마스크 소독 기계 및 어플리케이션 `마스크집사`</p>
                        </div>
                    </div>
                </div>
            </div>
        </AboutBlock>
    );
};

export default About;