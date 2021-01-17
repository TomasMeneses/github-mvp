/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useCallback, useRef } from 'react';


import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, Center, Divider, Box } from "@chakra-ui/react"



import {  } from './styles';


const AlertDialogComponent = ({isOpen, onClose, indexToDelete, deleteFunction, repositoryName}) => {
  
 
  const cancelRef = useRef()
  
 
  return (
    <>
    <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader backgroundColor='orange.200' fontSize="lg" fontWeight="bold">
              <Box color='orange.600' as="h2">
                Delete Repository
              </Box>
                
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure to delete the <b>{repositoryName}</b> repository?
            </AlertDialogBody>
                <Center>
                  <Divider mr="2" ml="2" orientation="horizontal" />
                </Center>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="orange" onClick={() => deleteFunction(indexToDelete)} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};


export default AlertDialogComponent;
