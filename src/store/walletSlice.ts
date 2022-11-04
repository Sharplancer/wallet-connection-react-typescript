// node_modules
import { createSlice } from "@reduxjs/toolkit";
import { StateType } from "../types";

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: "",
  chainId: 0,
	balance: 0,
};

const walletSlice = createSlice({
  name: "nft",
  initialState: initialState,
  reducers: {
    setWalletInfo(state: StateType, action) {
      state.provider = action.payload.provider;
      state.web3Provider = action.payload.web3Provider;
      state.address = action.payload.address;
      state.chainId = action.payload.chainId;
    },
    resetWalletInfo(state: StateType) {
		  state.provider = null;
      state.web3Provider = null;
      state.address = "";
      state.chainId = 0;
    },
		setBalance(state: StateType, action) {
			state.balance = action.payload.balance;
		},
		setAddress(state: StateType, action) {
			state.address = action.payload.address
		}
  },
});

const walletActions = walletSlice.actions;

export const { setWalletInfo, resetWalletInfo, setAddress } = walletActions;

export default walletSlice.reducer;
