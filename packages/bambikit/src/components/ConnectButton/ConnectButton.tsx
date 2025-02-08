import React from 'react';
import styles from './ConnectButton.module.css';

export interface ConnectButtonProps {
  label?: string;
  onClick: () => void;
}

export const ConnectButton = ({ label = 'Connect', onClick }: ConnectButtonProps) => {
  return <button className={styles.connectButton} onClick={onClick}>{label}</button>;
};
