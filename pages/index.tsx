import * as React from "react";
import { Container } from "@mui/material";

import {WalletModalButton} from "@solana/wallet-adapter-react-ui"

export default function Index() {
  return <Container>
    <WalletModalButton />
  </Container>;
}