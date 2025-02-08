import React from 'react';

export interface ConnectButtonProps {
  onClick: () => void;
}

export const ConnectButton = ({ onClick }: ConnectButtonProps) => {
  return <button onClick={onClick}>Connect</button>;
};
