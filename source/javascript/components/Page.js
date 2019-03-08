import React from 'react';
import styled from 'styled-components';

export default styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;
