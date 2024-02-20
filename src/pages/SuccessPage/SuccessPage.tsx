import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!state?.email) {
      navigate("/");
    }
  }, [state?.email]);

  return (
    <Box sx={{ margin: 2, marginLeft: 0 }}>
      <Typography variant="h5" sx={{ ml: 3 }}>
        Purchase completed successfully, please check {state?.email} email!
      </Typography>
    </Box>
  );
}
