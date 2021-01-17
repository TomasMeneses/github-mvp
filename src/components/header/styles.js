import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 90px;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    background-color: white;
`;

export const Box = styled.div`
    flex: 1;
    height: 40px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const InnerBox  = styled.div`
    flex: 1;
    margin: 5px;
`;

export const InnerBoxGithub  = styled.div`
    flex: 1;
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const FaGithubBig  = styled(FaGithub)`
    flex: 1;
    width: 30px;
    height: 30px;
`;

export const MandatoryField = styled.span`
    color: red;
    
`;

export const StyledMdError = styled(MdError)`
    margin-top: 5px;
`;

export const ErrorContainer = styled.div`
    color: red;
    display: flex;
    flex-direction: row;
    margin: 3px;
    
`;

export const SpacedText  = styled.div`
    margin: 5px;
`;