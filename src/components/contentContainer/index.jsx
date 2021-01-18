/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useCallback } from 'react';
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

  const handleOrderRepositorysByStars = useCallback(()=> {
    let listToOrder = [...listRepositorys];
    listToOrder.sort((a,b) => {
      var keyA = a.stargazers_count;
      var keyB = b.stargazers_count;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    setListRepositorys(listToOrder);

  }, [listRepositorys]);

  const handleOrderRepositorysByForks = useCallback(()=> {
    let listToOrder = [...listRepositorys];
    listToOrder.sort((a,b) => {
      var keyA = a.forks;
      var keyB = b.forks;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    setListRepositorys(listToOrder);
    console.log(listToOrder);

  }, [listRepositorys]);

  const handleOrderRepositorysByOpenIssues = useCallback(()=> {
    let listToOrder = [...listRepositorys];
    listToOrder.sort((a,b) => {
      var keyA = a.open_issues_count;
      var keyB = b.open_issues_count;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    setListRepositorys(listToOrder);
    console.log(listToOrder);

  }, [listRepositorys]);

  const handleOrderRepositorysByAge = useCallback(()=> {
    let listToOrder = [...listRepositorys];
    listToOrder.sort((a,b) => {
      var keyA = new Date(a.created_at);
      var keyB = new Date(b.created_at);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
        return 0;
      });

    setListRepositorys(listToOrder);
    console.log(listToOrder);

  }, [listRepositorys]);

  const handleOrderRepositorysByLastCommit = useCallback(()=> {
    let listToOrder = [...listRepositorys];
    listToOrder.sort((a,b) => {
      var keyA = new Date(a.updated_at);
      var keyB = new Date(b.updated_at);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
        return 0;
      });

    setListRepositorys(listToOrder);
    console.log(listToOrder);

  }, [listRepositorys]);

  const handleRemoveRepository =  (index) => {
      const values = [...listRepositorys];
      values.splice(index,1)
      // const newList = values.filter((repository, index) => {
      //   if(indexToRemove !== index) return repository;
      // });
      setListRepositorys(values);
      setIsOpen(false);
    };

  const [indexToDelete, setIndexToDelete] = useState('');
  const [nameToDelete, setNameToDelete] = useState('');

  const handleOpenAlertModal = (indexToDelete, nameToDelete) => {
    setIsOpen(true);
    setIndexToDelete(indexToDelete);
    setNameToDelete(nameToDelete);
  };


  const handleCheckRepoAsFavorite = ( index ) => {
    let repos = [...listRepositorys];
    
    repos[index].isFavorite = !repos[index].isFavorite;

    setListRepositorys(repos);
  };

  const handleShowOnlyFavorites = () => {
    const repos = [...listRepositorys];
    let favRepos = repos.filter(repo => {
      if(repo.isFavorite) {
        return repo;
      }
    });
    setListRepositorys(favRepos)
  };

  const handleFilterRepositoryByName = (repoName) => {
    const repos = [...listRepositorys];
    let reposByName = repos.filter(repo => {
      if(repo.full_name === repoName) {
        return repo;
      }
    });
    setListRepositorys(reposByName);
  };
  

  
 
  return (
    <Container>
      <Header addRepositoryFunction={ handleAddRepository }
      orderRepositorysByStars={ handleOrderRepositorysByStars }
      orderRepositorysByForks={ handleOrderRepositorysByForks }
      orderRepositorysByOpenIssues= { handleOrderRepositorysByOpenIssues }
      orderRepositorysByAge= { handleOrderRepositorysByAge }
      orderRepositorysByLastCommit= { handleOrderRepositorysByLastCommit }
      showOnlyFavorites = { handleShowOnlyFavorites }
      filterRepositoriesByName = { handleFilterRepositoryByName }
       />
      <Wrap spacing="10px" justify="left">
        {listRepositorys.map((repository, index) => (
            
            <div key={repository.id.toString()}>

              <WrapItem >
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
                        {
                          !repository.isFavorite &&
                          <StyledFiStar onClick={( )=> handleCheckRepoAsFavorite( index )}/>
                        }
                        {
                          repository.isFavorite &&
                          <StyledFaStar onClick={( )=> handleCheckRepoAsFavorite( index )}/>
                        }
                        </Box>

                        <Box mt="2">
                          <StyledBsTrash onClick={() => handleOpenAlertModal(index, repository.full_name)} /> 
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
                      Age: {repository.ageCreated}
                    </Box>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      Last Commit: {repository.ageCommit}
                    </Box>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      License: {repository.license ? repository.license.name : 'N/A'}
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
            </div>
        ))}
        
        <AlertDialogComponent 
        isOpen={isOpen}
        onClose={onClose}
        repositoryName={nameToDelete}
        indexToDelete={indexToDelete}
         deleteFunction={handleRemoveRepository} />
          
      </Wrap>
      
    </Container>
  );
};


export default ContentContainer;
