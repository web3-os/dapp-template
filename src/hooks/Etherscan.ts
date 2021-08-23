import { useMemo, useState } from 'react';
import { utils } from 'ethers';

 /*
   ~ What it does? ~
 
   Gets user provider
 
   ~ How can I use? ~
 
   const userSigner = useSigner(injectedProvider);
 
   ~ Features ~
 
   - Specify the injected provider from Metamask
   - Usage examples:
     const tx = Transactor(userSigner, gasPrice)
 */
 
const useContract = (contractAddress: string) => {
  const [contractABI, setContractABI] = useState();
  useMemo(async () => {
    if (!utils.isAddress(contractAddress)) return false;
    const params = `&address=${contractAddress}&apikey=${process.env.ETHERSCAN_API_KEY}`; 
    const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getabi${params}`);
    const contractData= await response.json();
    setContractABI(JSON.parse(contractData.result));
  }, [contractAddress]);

  return contractABI;
};

export default useContract;
 