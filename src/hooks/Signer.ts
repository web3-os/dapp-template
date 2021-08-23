import { useMemo, useState } from 'react';

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

const useSigner = (injectedProvider: any) => {
  const [signer, setSigner] = useState();

  useMemo(() => {
    console.log('🦊 Using injected provider');
    const injectedSigner = injectedProvider._isProvider ? injectedProvider.getSigner() : injectedProvider;
    console.log('signer', signer);
    setSigner(injectedSigner);
  }, [injectedProvider]);

  return signer;
};

export default useSigner;
