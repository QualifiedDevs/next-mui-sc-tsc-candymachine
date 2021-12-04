import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

import { WalletModalButton } from "@solana/wallet-adapter-react-ui";
import MintButton from "../src/MintButton";

const Home = styled((props) => {
  return (
    <Container {...props}>
      <WalletModalButton />
      <MintButton />
    </Container>
  );
})``;

export default Home;
