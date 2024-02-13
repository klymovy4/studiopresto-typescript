import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

export default function Header() {
  const navigate = useNavigate();
  const { cartCounter } = useAppSelector((state) => state.cart);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        style={{ background: "#3b556f" }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" , cursor: 'pointer'} }}
            onClick={() => navigate("/")}
          >
            Typescript
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Cart */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate("cart")}
          >
            <Badge badgeContent={cartCounter} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
