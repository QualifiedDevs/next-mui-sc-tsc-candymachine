import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from "../hooks/useCandyMachine";

const MintButton = styled((props) => {

  const { connected } = useWallet();

  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    startMint,
    startMintMultiple,
    nftsData,
  } = useCandyMachine();

  return (
    <LoadingButton variant="contained" onClick={startMint} disabled={!connected || isMinting} loading={isMinting} {...props}>
      Mint
    </LoadingButton>
  );
})``;

export default MintButton;