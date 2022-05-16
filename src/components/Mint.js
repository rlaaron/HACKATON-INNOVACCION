import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import DAPP from '../contracts/DAPP.json';
import './styles/mint.css'
import nft from './img/ajolotelaunch.png'
const DAPPAddress = "0xa3c3BB460fe327F6C25a12f4ECA1083DB4A5ab1D";

const Mint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(0);
    const isConnected = Boolean(accounts[0]);
    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }


    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                DAPPAddress,
                DAPP.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.01 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    };
    return (
        <>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="content"></div>
            <div className='minting'>
                {isConnected ? (
                    <div className='mi1'>
                        <div className='img_cmint'>
                                <img className='img_mint' src={nft} />
                            </div>
                        <div className='mi2'>
                            <button onClick={handleDecrement} className="contador" >-</button>
                            <div className="number" > {mintAmount}</div>
                            <button onClick={handleIncrement} className="contador" >+</button>
                        </div>
                        <button onClick={handleMint} className="css-button-retro--yellow"> Mint now </button>
                    </div>

                ) : (
                    <div className='not_ready'>
                        <div className='conectar'>
                            <div className='img_cmint'>
                                <img className='img_mint' src={nft} />
                            </div>
                            <button onClick={connectAccount} className="css-button-arrow--green">connect wallet</button>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    );
}

export default Mint;