import React, { useCallback, useEffect, useState } from 'react';
import { ethereum } from '../utils/global';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { ethers } from 'ethers';
import { useContract, useContractExists, useSigner } from '../hooks';

// This is where you can bring in the latest Contract ABI 👇
// import YourContract from '../artifacts/contracts/YourContract.sol/YourContract.json';

const CONTRACT_ADDRESS = '';

export const App = () => {
  const [injectedProvider, setInjectedProvider] = useState({});
  const userSigner: any = useSigner(injectedProvider);

  // Check if your contract has been deployed
  const contractIsDeployed = useContractExists(injectedProvider, CONTRACT_ADDRESS);
  const contractABI: any = useContract(CONTRACT_ADDRESS);
  const [address, setAddress] = useState('');

  useEffect(() => {
    connect();
  }, [])

  const loadProvider = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    setInjectedProvider(provider);

    ethereum.on("chainChanged", (chainId: number) => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(provider);
    });

    ethereum.on("accountsChanged", () => {
      console.log(`account changed!`);
      setInjectedProvider(provider);
    });

    // Subscribe to session disconnection
    ethereum.on("disconnect", (code: any, reason: any) => {
      console.log(code, reason);
    });
  }, [setInjectedProvider]);

  useEffect(() => {
    loadProvider()
  }, [])

  async function connect() {
    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        const address = accounts[0];
        setAddress(address);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function requestAccount() {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0]
      setAddress(address);
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

                { address ? <p 
                  className='description'
                  onClick={requestAccount}
                >
                  <code className='code'>{address}</code>
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
