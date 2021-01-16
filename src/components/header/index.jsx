/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useCallback } from 'react';
import { Input, InputGroup, InputRightElement,
     Stack, IconButton, Popover,
     PopoverTrigger, PopoverContent,
     PopoverHeader, PopoverArrow, PopoverCloseButton,
     PopoverBody, ButtonGroup, Button } from "@chakra-ui/react"

import { FaSearch } from 'react-icons/fa';
import { BsStar, BsCircleHalf, BsFillGridFill } from 'react-icons/bs';
import { ImPlus } from 'react-icons/im';


import { Container, Box, InnerBox, FaGithubBig, MandatoryField, SpacedText, ErrorContainer, StyledMdError } from './styles';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [repositoryValue, setRepositoryValue] = useState('')
  const handleRepositoryChange = (event) => {
    setRepositoryValue(event.target.value)
    console.log(repositoryValue);
  }

  return (
    <Container>
      <Box>
        <InnerBox>
            <FaGithubBig color="black"/>
        </InnerBox>
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
            <Popover placement="bottom-end">
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
                    <PopoverCloseButton />
                    <PopoverBody fontWeight="semibold">
                        <SpacedText>
                            Repository <MandatoryField>*</MandatoryField>
                        </SpacedText>
                    {/* <Input ref={ref} id={props.id} {...props} /> */}
                    <Input value={repositoryValue}
                    isInvalid={true}
                    errorBorderColor="red.400"
                    onChange={handleRepositoryChange}
                    />
                    {
                        true && <div>
                                <ErrorContainer>
                                <StyledMdError/>
                                This is an API-feedback-error
                                </ErrorContainer>
                            </div>
                    }
                    </PopoverBody>
                    <PopoverBody>
                        <ButtonGroup d="flex" justifyContent="flex-end">
                            <Button variant="outline" onClick={()=>{console.log('Cancel')}}>
                                Cancel
                            </Button>
                            <Button isDisabled={false} colorScheme="blue" onClick={()=>{console.log('Add')}}>
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
