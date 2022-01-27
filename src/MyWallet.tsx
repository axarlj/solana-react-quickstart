import React from 'react';
import {
    useAnchorWallet,
    useConnection,
    useWallet,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

const MyWallet: React.FC = () => {
    const { connection } = useConnection();
    let walletAddress = "";

    // if you use anchor, use the anchor hook instead
    // const wallet = useAnchorWallet();
    // const walletAddress = wallet?.publicKey.toString();

    const wallet = useWallet();
    if (wallet.connected && wallet.publicKey) {
        walletAddress = wallet.publicKey.toString()
    }

    return (
        <>
            <table>
                <tr>
                    <td>
                        {wallet.connected &&
                            <p className="WalletAddress">{walletAddress}</p>
                        }
                    </td>
                    <td>
                        <div className="multi-wrapper">
                            <span className="button-wrapper">
                                <WalletModalProvider>
                                    {wallet.connected || <WalletMultiButton />}
                                </WalletModalProvider>
                            </span>
                            {wallet.connected && <WalletDisconnectButton />}
                        </div>
                    </td>
                </tr>
            </table>
        </>
    );
};

export default MyWallet;
