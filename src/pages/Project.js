import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import Arrowleft from '../components/Arrowleft';
import Arrowright from '../components/Arrowright';
import { AirContext } from '../context/AirContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        border-radius: 5px 0 5px 0;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        @media ${props=>props.theme.mobile}{
            padding: 0 10px;
            margin: auto;
        }
        .board_l {
            width: 10%;
            @media ${props=>props.theme.tabletL}{
                width: 15%;
            } 
        }
        .board_r {
            width: 10%;
            @media ${props=>props.theme.tabletL}{
                width: 15%;
            } 
        }
        .board_c {
            width: 80%;
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 60px;
            @media ${props=>props.theme.tabletL}{
                width: 70%;
            } 
            .info_subtitle {
                font-size: 14px;
                font-family: Righteous;
                color: lightgrey;
            }
            div {
                width: 100%;
                height: 50%;
            }
            img {
                width: 70%;
                height: 100%;
            }
            .img_box {
                margin: 50px auto;
            }
            .info_box {
                text-align: left;
                .depth2 {
                    display: flex;
                    div {
                        width: 33.33%;
                        height: 100%;
                    }
                }
                transition: all 1s;
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
                    desc: ''
                })
                break;
            case 1:
                setFiles({
                    url: 'pics/project02.jpg',
                    title: '날씨 기반 정보 제공 반응형 웹페이지',
                    author: '팀 프로젝트',
                    link: 'https://github.com/hxunpkk/teamproject_boksabon',
                    stacks: 'HTML / CSS / JS / JQuery',
                    desc: ''
                })
                break;
            case 2:
                setFiles({
                    url: 'pics/project03.jpg',
                    title: '리그오브레전드 전적검색 웹페이지(JHIN.GG)',
                    author: '개인 프로젝트',
                    link: 'https://github.com/hxunpkk/Jhin.gg',
                    stacks: 'Vue / Vuetify / Firebase',
                    desc: ''
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
                        <img src={files.url} alt="banner"/>
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
                        <p className='info_subtitle'>Description</p>
                        <p>프로젝트설명 블라블라블라</p>
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