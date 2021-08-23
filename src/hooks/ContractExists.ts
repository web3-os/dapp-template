import { useEffect, useState } from 'react';
import { utils } from 'ethers';

/*
  ~ What it does? ~

  Checks whether a contract exists on the blockchain, returns true if it exists, otherwise false

  ~ How can I use? ~

  const contractIsDeployed = useContractExists(localProvider, contractAddress);

  ~ Features ~

  - Provide contractAddress to check if the contract is deployed
  - Change provider to check contract address on different chains (ex. mainnetProvider)
*/

const useContractExists = (injectedProvider: any, contractAddress: string) => {
  const [contractIsDeployed, setContractIsDeployed] = useState(false);

  // We can look at the blockchain and see what's stored at `contractAddress`
  // If we find code then we know that a contract exists there.
  // If we find nothing (0x0) then there is no contract deployed to that address

  useEffect(() => {
    const checkDeployment = async () => {
      if (!utils.isAddress(contractAddress)) return false;
      if (injectedProvider?.getCode) {
        const bytecode = await injectedProvider?.getCode(contractAddress);
        setContractIsDeployed(bytecode !== "0x0");
      }
    };
    if (injectedProvider) checkDeployment();
  }, [injectedProvider, contractAddress]);

  return contractIsDeployed;
};

export default useContractExists;
