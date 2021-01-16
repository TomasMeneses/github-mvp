import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #F8F9FA;
    height: 65px;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
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

export const FaGithubBig  = styled(FaGithub)`
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