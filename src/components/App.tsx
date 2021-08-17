import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { ethereum } from '../utils/global';

export const App = () => {
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');

  useEffect(() => {
    connect();
  }, [])

  async function connect() {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      const account = accounts[0]
      setAccount(account);
    }
  }

  async function requestAccount() {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0]
      setAccount(account);
    } catch (error) {
      console.error('Something went wrong...', error)
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <div className='container'>
              <main className='main'>
                <h1 className='title'>
                  <a href='https://github.com/web3-os/' target='_blank'>Web3OS</a>
                </h1>

                <p className='sub-title'>
                  Use this template to quickly write, deploy, and interact with your smart contracts inside a single repository!
                </p>

                { account ? <p 
                  className='description'
                  onClick={requestAccount}
                >
                  <code className='code'>{account}</code>
                </p> : <p 
                  className='description'
                  onClick={requestAccount}
                >
                  <code className='code'>Connect Wallet</code>
                </p> }

                <div className='grid'>
                  <a 
                    href='https://github.com/web3-os/dapp-template/blob/main/README.md#%EF%B8%8F-quick-start' 
                    target='_blank' 
                    className='card'
                  >
                    <h2>Documentation &rarr;</h2>
                    <p>Get up and running using this template.</p>
                  </a>

                  <a 
                    href='https://github.com/web3-os/dapp-template/blob/main/README.md#-learning-solidity' 
                    target='_blank' 
                    className='card'
                  >
                    <h2>Learn &rarr;</h2>
                    <p>Learn Solidity by Example by testing new concepts in your app!</p>
                  </a>
                </div>
              </main>
            </div>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
