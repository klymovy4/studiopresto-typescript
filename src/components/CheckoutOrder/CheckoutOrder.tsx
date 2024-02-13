import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import classes from "./CheckoutOrder.module.css";
import { useAppSelector } from "../../hooks/redux";

export default function CheckoutOrder() {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <div className={classes.oreorderRecipienWrapper}>
      {cart &&
        cart.map((item) => (
          <div key={item.item.id} className={classes.orderRecipientItem}>
            <div className={classes.orderRecipientItemInner}>
            <ImageWrapper {...item.item} style={{width: '23%'}} />
           
            <Box className={classes.cartDescription}>
              <Typography sx={{ mb: 0.5 }}>
                {item?.item.title}
              </Typography>
              <Typography sx={{ mt: 1}}>
                {item?.item.price} x {item.quantity}pcs: {item.priceCurrentPosition.toFixed(2)} ₴
              </Typography>
            </Box>
            </div>
          </div>
        ))}
    </div>
  );
}
