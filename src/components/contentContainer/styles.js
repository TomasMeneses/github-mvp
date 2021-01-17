import styled from 'styled-components';
import { Box } from "@chakra-ui/react"
import { FaStar } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';

export const Container = styled.div`
    /* display: flex;
    flex-direction: row;
    background-color: #F8F9FA;
    height: 65px;
    align-items: center;
    justify-content: center; */
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center; */

    width: 100%;
    height: 100%;
    background-color:  #F8F9FA;
    font-family: 'Open Sans', sans-serif;
`;

export const StyledFaStar = styled(FaStar)`
    cursor: pointer;
`; 
export const StyledFiStar = styled(FiStar)`
    cursor: pointer;
`; 
export const StyledBsTrash = styled(BsTrash)`
    cursor: pointer;
`; 


export const ChakraStyledBox = styled(Box)`
    margin-top: 10px;
    margin-left: 40px;
    min-width: 400px;
`;

export const CardTitle = styled.div`
    
    display: flex;
    flex-direction: row;
    width:100%;
    height: 100%;
`;

export const CardTitleItem = styled.div`
    flex: 1;
    margin: 5px;
`;

export const StarTrashBox = styled(Box)`
    align-items: right;
    display: flex;
    flex-direction: row;
`;


