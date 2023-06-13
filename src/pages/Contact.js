import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.div`
    background: skyblue;
    height: 100%;
`

const Contact = () => {
    return (
        <ContactBlock>
            Contact Me
            github, velog, email, phone
        </ContactBlock>
    );
};

export default Contact;