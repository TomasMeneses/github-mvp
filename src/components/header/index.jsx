
import React, { useState, useCallback, useEffect, useLayoutEffect, useRef } from 'react';

import { Input, InputGroup, InputRightElement,
     Stack, IconButton, Popover,
     PopoverTrigger, PopoverContent,
     PopoverHeader, PopoverArrow, Divider,
     PopoverBody, ButtonGroup, Button, useDisclosure  } from "@chakra-ui/react";

     

import { FaSearch } from 'react-icons/fa';
import { BsStar, BsCircleHalf, BsFillGridFill } from 'react-icons/bs';
import { ImPlus } from 'react-icons/im';
import { differenceInCalendarMonths } from 'date-fns';

import api from '../../services/githubService'


import { Container, Box, InnerBox, FaGithubBig, MandatoryField, SpacedText, ErrorContainer, StyledMdError, InnerBoxGithub } from './styles';


const Header = ({addRepositoryFunction}) => {

  //const [isOpen, setIsOpen] = useState(false);
  //const toggle = () => setIsOpen(!isOpen);

  const { onOpen, onClose, isOpen } = useDisclosure();

  const [isDisabled, setIsDisabled] = useState(true);
  const [isApiError, setIsApiError] = useState(false);

  const [repositoryValue, setRepositoryValue] = useState('');

  const [repositoryFromGithub, setRepositoryFromGithub] = useState('');

  const handleRepositoryChange = (event) => {
    setRepositoryValue(event.target.value);
  }

  const getRepositoryFromGithub = async (params) => {
    try{

        const response = await api.get(params);
        let data = response.data;
        data.created_at = differenceInCalendarMonths(
            new Date(),
            new Date(data.created_at)
        ) + ' months ago';
        data.updated_at = differenceInCalendarMonths(
            new Date(),
            new Date(data.updated_at)
        ) + ' months ago';
        setRepositoryFromGithub(data);
        setIsApiError(false);
        setIsDisabled(false);
    }catch(error) {
        setIsDisabled(true);
        setIsApiError(true);
    }
    
  };

 
  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
    }
    const timeoutId = setTimeout(() => {
        getRepositoryFromGithub(repositoryValue);
        if(!repositoryValue){
            setIsDisabled(true);
        }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [repositoryValue]);

  return (
    <Container>
      <Box>
        <InnerBoxGithub>
            <FaGithubBig color="black"/>
        </InnerBoxGithub>
        <InnerBox>
            Github Compare
        </InnerBox>
        <InnerBox>
            Filter and order
        </InnerBox>
      </Box>
      <Box>
        <InnerBox>
            <Stack spacing={1}>
                <InputGroup>
                    <Input variant="filled" placeholder="Search" />
                    <InputRightElement children={<FaSearch color="black" />} />
                </InputGroup>
            </Stack>
        </InnerBox>
      </Box>
      <Box>
        <InnerBox>
            <BsStar/>
        </InnerBox>
        <InnerBox>
            <BsCircleHalf/>
        </InnerBox>
        <InnerBox>
            <BsFillGridFill/>
        </InnerBox>
        <InnerBox>
            <Popover 
            placement="bottom-end"
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            >
                <PopoverTrigger>
                    <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<ImPlus color="#FFFFFF" />}
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight="semibold">New repository</PopoverHeader>
                    <PopoverArrow />
                    <PopoverBody fontWeight="semibold">
                        <SpacedText>
                            Repository <MandatoryField>*</MandatoryField>
                        </SpacedText>
                    {/* <Input ref={ref} id={props.id} {...props} /> */}
                    <Input value={repositoryValue}
                    isInvalid={isApiError}
                    focusBorderColor="none"
                    errorBorderColor="red.400"
                    onChange={handleRepositoryChange}
                    />
                    {
                        isApiError && <div>
                                <ErrorContainer>
                                <StyledMdError/>
                                This is an API-feedback-error
                                </ErrorContainer>
                            </div>
                    }
                    </PopoverBody>
                    <PopoverBody>
                    <Divider mb="2" orientation="horizontal" />
                        <ButtonGroup d="flex" justifyContent="flex-end">
                            <Button variant="outline" onClick={() => onClose()}>
                                Cancel
                            </Button>
                            <Button isDisabled={isDisabled} colorScheme="blue" onClick={ () => addRepositoryFunction(repositoryFromGithub) }>
                                Add
                            </Button>
                        </ButtonGroup>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </InnerBox>
      </Box>
    </Container>
  );
};


export default Header;
