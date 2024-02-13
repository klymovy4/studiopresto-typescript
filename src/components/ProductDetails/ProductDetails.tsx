import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { addToCart } from "../../store/cartSlice";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import classes from "./ProductDetails.module.css";
import { useAppDispatch } from "../../hooks/redux";

export default function ProductDetails() {
  const { state } = useLocation();
  const dispatch = useAppDispatch();
  const item = state;

  return (
    <Box
      component="main"
      className="main-wrap-style"
      
    >
      <Box sx={{ margin: 2, marginLeft: 0 }}>
        <Typography variant="h5">
          Product deteils
        </Typography>
      </Box>

      <div className={classes.productDetails} >
        <ImageWrapper {...item} style={{ width: "50%" }} />
        <div className={classes.descriptionWrapper}>
          <div>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              {item?.title}
            </Typography>

            <Typography variant="body2" sx={{ mb: 0.5 }}>
              {item?.description}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1.5, mb: 1.5 }}>
              {item?.category}
            </Typography>

            <Rating
              readOnly
              name={item?.title}
              defaultValue={item?.rating.rate}
            />
          </div>
          <div className={classes.productFooter}>
            <Typography variant="h6" display="block">
              {item?.price} ₴
            </Typography>
            <Button
              variant="contained"
              style={{ background: "#3b556f" }}
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}
