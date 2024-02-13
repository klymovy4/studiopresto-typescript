import { useEffect } from "react";
import useApi from "./api/useApi";
import Box from "@mui/material/Box";
import DrawerComponent from "./components/DrawerComponent/DrawerComponent";
import MainPage from "./components/MainPage/MainPage";
import { initializedApp } from "./store/itemsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

export default function App() {
  const dispatch = useAppDispatch();
  const { initialized } = useAppSelector((state) => state.items);
  const { init } = useApi();

  useEffect(() => {
    if (!initialized) {
      init();
      dispatch(initializedApp());
    } 
  }, []);

  if(!initialized) return <h1>No init</h1>
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerComponent />
      <MainPage />
    </Box>
  );
}