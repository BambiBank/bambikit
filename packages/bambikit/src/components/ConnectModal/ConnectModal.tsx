import React from 'react';
import { useAccount } from '../../hooks/useAccount';
import { Dialog } from '../Dialog/Dialog';
import { DialogHeader } from '../DialogHeader/DialogHeader';
import styles from './ConnectModal.module.css';
import { SUPPORTED_WALLETS } from '../../config/wallets';

export interface ConnectModalProps {
  open: boolean;
  onClose: () => void;
}

export const ConnectModal = ({ open, onClose }: ConnectModalProps) => {
  const { isConnected } = useAccount();

  const handleWalletClick = (walletId: string) => {
    console.log(`Connecting to ${walletId}...`);
  };

  if (!isConnected) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogHeader title="Connect a Wallet" onClose={onClose} />
        <div className={styles.walletList}>
          {SUPPORTED_WALLETS.filter(wallet => wallet.isAvailable).map((wallet) => (
            <div
              key={wallet.id}
              className={styles.walletItem}
              onClick={() => handleWalletClick(wallet.id)}
            >
              <img
                src={wallet.icon}
                alt={wallet.name}
                className={styles.walletIcon}
              />
              <span className={styles.walletName}>{wallet.name}</span>
            </div>
          ))}
        </div>
      </Dialog>
    );
  }

  return null;
};
