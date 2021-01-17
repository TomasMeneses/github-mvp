/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useCallback, useRef } from 'react';
import Header  from '../header/index';
import AlertDialogComponent from '../alertDialog/index'


import { Badge, Wrap, WrapItem, Center, Box, Divider } from "@chakra-ui/react"

import { CgMenuGridR } from 'react-icons/cg';

import { Container,  ChakraStyledBox, StarTrashBox, CardTitle, CardTitleItem, StyledFaStar, StyledFiStar, StyledBsTrash } from './styles';


const ContentContainer = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const [listRepositorys, setListRepositorys] = useState([]);

  const handleAddRepository = useCallback((repository) => {
    setListRepositorys([
      ...listRepositorys,
      repository,
    ]);

  },[listRepositorys]);

  const handleRemoveRepository = useCallback(
    (indexToRemove) => {
      const values = [...listRepositorys];
      const newList = values.filter((repository, index) => {
        if(indexToRemove !== index) return repository;
      });
      setListRepositorys(newList);
      setIsOpen(false);
    },
    [listRepositorys],
  );

  const handleOpenAlertModal = () => {
      setIsOpen(true);
    };
  

  
 
  return (
    <Container>
      <Header addRepositoryFunction={handleAddRepository} />
      <Wrap spacing="10px" justify="left">
        {listRepositorys.map((repository, index) => (
            <WrapItem>
            <Center>
              <ChakraStyledBox maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">

                <Box  p="4">
                  <CardTitle>
                    <Box mt="2">
                      <CgMenuGridR color="blue" />
                    </Box>
                    <CardTitleItem >
                      {repository.full_name}
                    </CardTitleItem>
                    <StarTrashBox >
                      <Box mt="2" mr="2">
                        <StyledFiStar/>
                      </Box>
                      <Box mt="2">
                        {/* <StyledBsTrash onClick={() => handleRemoveRepository(index)} /> */}
                        <StyledBsTrash onClick={handleOpenAlertModal} /> 
                        <AlertDialogComponent isOpen={isOpen} onClose={onClose} repositoryName={repository.full_name} indexToDelete={index} deleteFunction={handleRemoveRepository} />
                      </Box>
                    </StarTrashBox>
                  </CardTitle>
                </Box>

                <Center>
                  <Divider orientation="horizontal" />
                </Center>
                <Box p="6" >

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Stars: {repository.stargazers_count}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Forks: {repository.forks}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Open Issues: {repository.open_issues_count}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Age: {repository.created_at}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    Last Commit: {repository.updated_at}
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    License: {repository.license ? repository.license : 'N/A'}
                  </Box>
                  <Box mt="2">
                    <Badge variant="outline" colorScheme="orange">
                      {repository.language}
                    </Badge>
                  </Box>
                </Box>
            </ChakraStyledBox>
          </Center>
            
        </WrapItem>
        ))}
          
      </Wrap>
      
    </Container>
  );
};


export default ContentContainer;
