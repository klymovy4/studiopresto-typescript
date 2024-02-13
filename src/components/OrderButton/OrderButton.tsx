import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import classes from "./OrderButton.module.css";

export default function OrderButton({
  onClick,
  totalPrice,
  type,
}: {
  onClick?: () => void;
  totalPrice: number;
  type?: "button" | "submit";
}) {
 
  return (
    <Box
      className={classes.cartReceipt}
      style={{ flexDirection: type ? "row-reverse" : undefined }}
    >
      <Typography
        sx={{
          marginRight: type ? undefined : 2,
          marginLeft: type ? 2 : undefined,
        }}
      >
        {totalPrice.toFixed(2)} ₴
      </Typography>

      <Button
        variant="contained"
        size="small"
        type={type ? type : "button"}
        color="success"
        endIcon={<SendIcon />}
        onClick={onClick}
      >
        Order
      </Button>
    </Box>
  );
}
