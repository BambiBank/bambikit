export type WalletId = 'xaman' | 'gemwallet' | 'crossmark';

export interface Wallet {
  id: WalletId;
  name: string;
  icon: string;
  description?: string;
  isAvailable?: boolean;
}
