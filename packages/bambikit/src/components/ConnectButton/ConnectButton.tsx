import React, { useState } from 'react';
import styles from './ConnectButton.module.css';
import { ConnectModal } from '../ConnectModal/ConnectModal';

export interface ConnectButtonProps {
  label?: string;
}

export const ConnectButton = ({ label = 'Connect' }: ConnectButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <button className={styles.connectButton} onClick={handleClick}>{label}</button>
      <ConnectModal open={open} onClose={handleClose} />
    </>
  )
};
