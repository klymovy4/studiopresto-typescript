import { useEffect } from "react";
import useApi from "./api/useApi";
import Box from "@mui/material/Box";
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";
import MainPage from "./components/MainPage/MainPage";
import { useAppSelector } from "./hooks/redux";
import Loader from "./components/Loader/Loader";

export default function App() {
  const { initialized } = useAppSelector((state) => state.items);
  const { init } = useApi();

  useEffect(() => {
    if (!initialized) {
      init();
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerComponent />
      {!initialized ? <Loader /> : <MainPage />}
    </Box>
  );
}
