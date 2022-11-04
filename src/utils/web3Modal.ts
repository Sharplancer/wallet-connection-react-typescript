import Web3Modal from 'web3modal';
import WalletConnectProvider from "@walletconnect/web3-provider";

const INFURA_ID = "cee807039b5a4f25b41fa4e8920eb273";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
};

export let web3Modal: Web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
  });
}
