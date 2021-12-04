import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import WalletModalButton from "../src/WalletModalButton";
import MintButton from "../src/MintButton";

const Home = styled((props) => {
  return (
    <Container {...props}>
      <WalletModalButton>
        Select Wallet
      </WalletModalButton>
      <MintButton>
        Mint
      </MintButton>
    </Container>
  );
})``;

export default Home;
