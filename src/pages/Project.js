import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import Arrowleft from '../components/Arrowleft';
import Arrowright from '../components/Arrowright';
import { AirContext } from '../context/AirContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HoverVideoPlayer from 'react-hover-video-player';

const ProjectBlock = styled.div`
    background: #111;
    height: 100%;
    display: flex;
    .board {
        flex: 1;
        display: flex;
        background: #31313C;
        justify-content: center;
        align-items: center;
        margin: auto 20vw;
        color: white;
        border-radius: 0 5px 0 5px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        position: relative;
        @media ${props=>props.theme.tabletS}{
            padding: 0 10px;
            margin: auto;
        }
        .board_l {
            width: 10%;
            @media ${props=>props.theme.tabletL}{
                width: 15%;
            }
            @media ${props=>props.theme.mobile}{
                width: 5%;
            } 
        }
        .board_r {
            width: 10%;
            @media ${props=>props.theme.tabletL}{
                width: 15%;
            }
            @media ${props=>props.theme.mobile}{
                width: 5%;
            }  
        }
        .board_c {
            width: 80%;
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 60px;
            font-family: Jua;
            letter-spacing: 3px;
            @media ${props=>props.theme.tabletL}{
                width: 70%;
            }
            @media ${props=>props.theme.mobile}{
                width: 90%;
                padding: 30px;
            }  
            .info_subtitle {
                letter-spacing: 0;
                font-size: 14px;
                font-family: Righteous;
                color: lightgrey;
            }
            div {
                width: 100%;
                height: 50%;
            }
            .img_box {
                margin: 20px auto;
                &:hover .hover_text {
                    opacity: 0;
                }
            }
            .info_box {
                text-align: left;
                h2 {
                    font-weight: normal;
                }
                .depth2 {
                    display: flex;
                    flex-wrap: wrap;
                    div {
                        width: 33.33%;
                        height: 100%;
                        @media ${props=>props.theme.tabletS}{
                            width: 100%;
                            height: 33.33%;
                        }
                        p {
                            @media ${props=>props.theme.tabletS}{
                                margin: 5px 0;
                            }
                        }
                    }
                }
                transition: all 1s;
                .desc {
                    @media ${props=>props.theme.mobile}{
                        display: none;
                    }
                }
            }
            .hover_text {
                font-size: 16px;
                position: absolute;
                top: 0;
                right: 100%;
                writing-mode: vertical-lr;
                background: #FF4438;
                width: 50px;
                height: 250px;
                text-align: center;
                display:flex;
                justify-content:center;
                align-items:center;
                border-radius: 7px 0 0 7px;
                transition: all 0.5s;
                @media ${props=>props.theme.tabletS}{
                    display: none;
                } 
            }
        }
        a {
            color: #fff;
        }
    }

`

const Project = () => {
    const {count} = useContext(AirContext)
    const [files, setFiles] = useState({
        url: '',
        title: '',
        author: '',
        link: '',
        stacks: '',
        desc: ''
    })
    
    useEffect(() => {
        console.log(count)
        switch(count){
            case 0:
                setFiles({
                    url: 'pics/project01.jpg',
                    title: '반응형 웹 페이지',
                    author: '개인 프로젝트',
                    link: 'https://github.com/hxunpkk/portfolio1',
                    stacks: 'HTML / CSS / JS',
                    desc: '반응형 디자인 웹 페이지 사이트',
                    vlink: 'videos/video1.mp4',
                })
                break;
            case 1:
                setFiles({
                    url: 'pics/project02.jpg',
                    title: '날씨 기반 정보 제공 반응형 웹 페이지',
                    author: '팀 프로젝트',
                    link: 'https://github.com/hxunpkk/teamproject_boksabon',
                    stacks: 'HTML / CSS / JS / JQuery',
                    desc: '날씨를 통한 정보 제공 팀프로젝트 웹 페이지',
                    vlink: 'videos/video2.mp4',
                })
                break;
            case 2:
                setFiles({
                    url: 'pics/project03.jpg',
                    title: '리그오브레전드 전적검색 웹 페이지(JHIN.GG)',
                    author: '개인 프로젝트',
                    link: 'https://github.com/hxunpkk/Jhin.gg',
                    stacks: 'Vue / Vuetify / Firebase',
                    desc: '리그오브레전드 솔로랭크 전적검색 / 랭킹 웹 페이지',
                    vlink: 'videos/video3.mp4',
                })
                break;
            default:
                break;
        }
    }, [count])

    return (
        <ProjectBlock>
            <div className='board'>
                <div className='board_l'>
                    <Arrowleft />
                </div>
                <div className='board_c'>
                    <div className='img_box'>
                        <div className='hover_text'>사진에 커서를 올려보세요</div>
                        <HoverVideoPlayer 
                            videoSrc={files.vlink}
                            restartOnPaused
                            loadingStateTimeout = { 1000 } 
                            pausedOverlay={
                              <img
                                src={files.url}
                                alt="banner"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                }}
                                />}
                            style={{
                                boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'
                              }}
                         />
                    </div>
                    <div className='info_box'>
                        <p className='info_subtitle'>Project Title</p>
                        <h2>{files.title}</h2>
                        <div className='depth2'>
                            <div>
                                <p className='info_subtitle'>Author</p>
                                <p>{files.author}</p>
                            </div>
                            <div>
                                <p className='info_subtitle'>Links</p>
                                <a href={files.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                            </div>
                            <div>
                                <p className='info_subtitle'>Made with</p>
                                <p>{files.stacks}</p>
                            </div>
                        </div>
                        <p className='info_subtitle desc'>Description</p>
                        <p className='desc'>{files.desc}</p>
                    </div>
                </div>
                <div className='board_r'>
                    <Arrowright />
                </div>
            </div>
        </ProjectBlock>
    );
};

export default Project;