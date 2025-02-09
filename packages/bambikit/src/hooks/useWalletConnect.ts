import { useState } from 'react';

const walletAPIs = {
  Xaman: {
    connect: async () => {
      return 'Xaman';
    },
    disconnect: async () => {
      return 'Xaman';
    },
  },
  GemWallet: {
    connect: async () => {
      return 'GemWallet';
    },
  },
  Crossmark: {
    connect: async () => {
      return 'Crossmark';
    },
    disconnect: async () => {
      return 'Crossmark';
    },
  },
}

export function useWalletConnect(wallet: any) {
  const [error, setError] = useState<string | null>(null);

  const connect = async () => {
    setError(null);
    try {
      const walletInstance = walletAPIs[wallet];
      if (!walletInstance) throw new Error(`Wallet ${wallet} not supported`);
      const address = await walletInstance.connect();
      return address;
    } catch (e) {
      setError((e as Error).message);
      console.error("Wallet connection error:", e);
    }
  }

  const disconnect = () => {
    setError(null);
    try {
      //
    } catch (e) {
      setError(e as string);
    }
  }

  return { connect, disconnect };
}
