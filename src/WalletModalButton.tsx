import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const WalletModalButton = styled((props) => {

    const { setVisible } = useWalletModal();

  return <Button variant="contained" onClick={() => {setVisible(true)}} {...props} />
})``;

export default WalletModalButton;