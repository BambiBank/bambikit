import React from 'react';
import styles from './DialogHeader.module.css';

interface DialogHeaderProps {
  title: string;
  onClose: () => void;
}

export const DialogHeader = ({ title, onClose }: DialogHeaderProps) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <button className={styles.closeButton} onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.7 6.7L17.3 17.3M17.3 6.7L6.7 17.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};
