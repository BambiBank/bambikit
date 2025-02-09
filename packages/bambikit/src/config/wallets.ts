import xamanIcon from '../assets/wallets/xaman.png';
import gemwalletIcon from '../assets/wallets/gemwallet.png';
import crossmarkIcon from '../assets/wallets/crossmark.png';
import type { Wallet } from '../types/wallet';

export const SUPPORTED_WALLETS: Wallet[] = [
  {
    id: 'xaman',
    name: 'Xaman',
    icon: xamanIcon,
    description: 'Connect with Xaman Wallet',
    isAvailable: true,
  },
  {
    id: 'gemwallet',
    name: 'GemWallet',
    icon: gemwalletIcon,
    description: 'Connect with GemWallet',
    isAvailable: true,
  },
  {
    id: 'crossmark',
    name: 'CROSSMARK',
    icon: crossmarkIcon,
    description: 'Connect with CROSSMARK',
    isAvailable: true,
  },
];
