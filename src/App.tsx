import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import MyWallet from "./MyWallet";
import Square from './square.js';

function App() {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = React.useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getLedgerWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [network]
  );


  // Create Squares
  const squares = []
  
  for(let iy = 0; iy < 50; iy++) {
    for(let ix = 0; ix < 100; ix++) {
      squares.push(<Square x={ix} y={iy} color="#09edb8"/>)
    }
  }
  for(let iy = 50; iy < 100; iy++) {
    for(let ix = 0; ix < 100; ix++) {
      squares.push(<Square x={ix} y={iy} color="#ff8400"/>)
    }
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <div className="App">
        <header className="App-header">
        <div className="App-column">
          <h1 className="App-logo-text">100<sup> 2</sup></h1>
        </div>
        <div className="App-column">
          <MyWallet />
        </div>
        </header>
        <div className="App-body">
          <div className="App-column">
            <div className="App-grid-container">
              
                <svg className="App-svg">
                  <g id='scene'>
                    {squares}  
                  </g>
                </svg>

            </div>
          </div>
          <div className="App-column">
            <h1 id='location'></h1>
          </div>
        </div>
      </div>
    </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
