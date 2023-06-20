import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.div`
    background: #111;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    font-weight: 800;
    flex-direction: column;
    .board {
        align-items: center;
        justify-content: center;
        display: flex;
        background: #31313C;
        position: relative;
        padding: 2rem;
        margin: 1rem;
        color: white;
        border-radius: 5px;
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)';
        @media ${props=>props.theme.tabletS}{
            width: 60%;
            padding: 1rem 2rem;
            flex-direction: column;
        }
        .title {
            transform: rotate(-10deg);
            position: absolute;
            left: -3rem;
            top: -1.5rem;
            border: 0.2rem solid rgb(238, 238, 238);
            border-radius: 2rem;
            padding: 0.5rem 1rem;
            background: #111;
            font-size: 36px;
            @media ${props=>props.theme.mobile}{
                font-size: 24px;
            }
        }
        .avatar {
            flex: 1;
            padding: 3rem;
            @media ${props=>props.theme.mobile}{
                padding: 0.5rem 3rem;
            }
            img {
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
                object-fit: cover;
            }
        }
        .links {
            padding: 3rem;
            flex: 1;
            @media ${props=>props.theme.mobile}{
                padding: 0.5rem 3rem;
            }
            .links__button {
                position: relative;
                width: 12rem;
                border: 0.2rem solid rgb(238, 238, 238); 
                padding: 1.5rem 1.2rem;
                margin: 0.5rem;
                overflow: hidden;
                a {
                    &::after {
                        position: absolute;
                        text-transform: uppercase;
                        transition: all 400ms;
                        top: 15px;
                        left: 0;
                        text-align: center;
                        width: 100%;
                    }
                    &::before {
                        position: absolute;
                        text-transform: uppercase;
                        transition: all 400ms;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        text-align: center;
                    }
                }
                .email {
                    &::after {
                        content: "E-mail";
                    }
                    &::before {
                        content: "dlgur73@gmail.com";
                    }
                }
                .github {
                    &::after {
                        content: "GitHub";
                    }
                    &::before {
                        content: "owner:hxunpkk";
                    }
                }
                .velog {
                    &::after {
                        content: "Velog";
                    }
                    &::before {
                        content: "@hxunpkk";
                    }
                }
                &:hover a::after{
                    top: -70px;
                }
                &:hover a::before{
                    top: 15px;
                }
            }
        }
    }
    .footer {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0 30px;
        font-size: 18px;
        color: #31313C;
        span {
            color: white;
        }
        @media ${props=>props.theme.tabletS}{
            position: static;
            height: 10%;
        }
        @media ${props=>props.theme.mobile}{
            font-size: 16px;
        }
    }
    a {
        color: #fff;
    }
`

const Contact = () => {
    return (
        <ContactBlock>
            <div className='board'>
                <div className='title'>Contact Me?</div>
                <div className='photo'>
                    <div className='avatar'>
                        <img src='pics/profile.svg' alt='profile' />
                    </div>
                </div>
                <div className='links'>
                    <div className='links__button'>
                        <a href='mailto:dlgur73@gmail.com' className='email' target='_blank' rel="noreferrer"> </a>
                    </div>
                    <div className='links__button'>
                        <a href='https://github.com/hxunpkk' className='github' target='_blank' rel="noreferrer"> </a>
                    </div>
                    <div className='links__button'>
                        <a href='https://velog.io/@hxunpkk' className='velog' target='_blank' rel="noreferrer"> </a>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>Developed by <span>Park Hyunwoo</span></p>
                <p>Last Update : <span>2023. 06. 20</span></p>
            </div>
        </ContactBlock>
    );
};

export default Contact;