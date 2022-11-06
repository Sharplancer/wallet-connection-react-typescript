import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Web3 from "web3";

import { MainStyle } from './index.style'
import { RootState } from '../../store/index';
import { Box, Button, Typography } from '@mui/material'
import CustomButton from '../CustomButton';
import { setDefaultResultOrder } from 'dns';

const web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);

const toAddress = "0x0357ec8b25cd3681f950373b912934686821b97d";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { provider, web3Provider, address, chainId } = useSelector((state: RootState) => state.wallet)
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    address && getBalance();
  }, [address])

  const onClickTransaction = async() => {
    web3.eth.sendTransaction({
      from: address,
      to: toAddress,
      value: "1000000000000000",
    }).then(() => {
      getBalance();
    }).catch((error) => {
      console.log(error);
    });
  }

  const getBalance = () => {
    web3.eth
      .getBalance(address as string)
      .then((result: any) => {
        setBalance(result / Math.pow(10, 18));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MainStyle>
      {!!address && (
        <>
          <Box>
            <Typography>ChainId: {chainId}</Typography>
          </Box>
          <Box>
            <Typography>Balance: {!!address ? balance : "---"}</Typography>
          </Box>
          <Box>
            <Button>
              <CustomButton
                caption={"transaction"}
                onClick={onClickTransaction}
              />
            </Button>
          </Box>
        </>
      )}
    </MainStyle>
  );
}

export default Main  
