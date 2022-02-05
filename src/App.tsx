import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";


import Button from '@mui/material/Button';


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
import GameContainer from "./GameContainer"




function App() {


  const [authStatus, setAuthStatus] = useState(false);
  const [discordCode, setdiscordCode] = useState("");
  const [appState, setAppState] = useState("welcome");

   



  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Mainnet;

  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')
  


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


  var currentlySelected = "0000";

  const getLocation = (data: any) => {
    return <p>{data}</p> 
  }

  const discordAuth = () => {
    setAppState("auth");
    window.location.replace("https://discord.com/api/oauth2/authorize?client_id=939124181130428457&redirect_uri=https%3A%2F%2Fdemo-100squared.pages.dev&response_type=code&scope=identify");
  }



  // Create Squares
  const squares = []
  
  for(let iy = 0; iy < 100; iy++) {
    for(let ix = 0; ix < 100; ix++) {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      squares.push(<Square x={ix} y={iy} color={'#'+randomColor} onclick={getLocation} func={getLocation}/>)
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
          {code!==null && <MyWallet />}
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
            {false && <GameContainer />}
            {code===null && <Button onClick={discordAuth} variant="contained">Login to discord</Button>}
            {code!==null && <p>Logged in with sesion code: {code}</p>}
            
          </div>
        </div>
      </div>
    </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
