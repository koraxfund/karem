'use client';
import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode } from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';

const { chains, publicClient } = configureChains(
  [bsc],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'karem',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme({ accentColor: '#7CFF6A', borderRadius: 'large', fontStack: 'system' })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
