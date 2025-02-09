import { useState } from 'react'

export function useAccount() {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  return {
    isConnected,
    setIsConnected,
  }
}
