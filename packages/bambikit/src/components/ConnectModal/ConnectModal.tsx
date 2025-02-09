import React from 'react';
import { useAccount } from '../../hooks/useAccount';
import { Dialog } from '../Dialog/Dialog';

export interface ConnectModalProps {
  open: boolean;
  onClose: () => void;
}

export const ConnectModal = ({ open, onClose }: ConnectModalProps) => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    // TODO: Show the connect modal
    return (
      <Dialog open={open} onClose={onClose} title="Connect Modal">
        <h1>Connect Modal</h1>
      </Dialog>
    )
  }

  return null;
}
