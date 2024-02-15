import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useApi from "../../api/useApi";
import { findBySearch } from "../../store/itemsSlice";
import BasicPagination from "../Pagination/Pagination";
import BasicCard from "../ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Input from "@mui/joy/Input";
import Loader from "../Loader/Loader";
import useInput from "../../hooks/useInput";
import useDebounce from "../../hooks/useDebounce";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const input = useInput();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debounced = useDebounce<string>(input.value);

  const { fetchSpetialCategory } = useApi();
  const { slicedItems, isLoading, categories } = useAppSelector(
    (state) => state.items
  );

  useEffect(() => {
    const currentCategory = localStorage.getItem("currentCategory") || "";
    if (categories.includes(currentCategory)) {
      fetchSpetialCategory(currentCategory);
    }
  }, []);

  useEffect(() => {
    if (slicedItems) {
      setCurrentPage(1);
    }
  }, [slicedItems]);

  function checkCurrentPage(): boolean {
    if (slicedItems?.length > 0 && slicedItems[currentPage - 1]) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    dispatch(findBySearch(debounced));
  }, [debounced]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        maxWidth: "80vw",
        margin: "auto",
      }}
    >
      <Box sx={{ margin: 1, marginBottom: 1, marginTop: 2 }}>
        <Input placeholder="Search..." sx={{ width: "213px" }} {...input} />
      </Box>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        {checkCurrentPage() && !isLoading ? (
          slicedItems[currentPage - 1].map((item) => (
            <BasicCard key={item.id} item={item} />
          ))
        ) : isLoading ? (
          <Loader />
        ) : (
          <Box sx={{ margin: 2, marginLeft: 0 }}>
            <Typography>No any items!</Typography>
          </Box>
        )}
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <BasicPagination
          slicedItems={slicedItems?.length}
          page={currentPage}
          changePagination={(page) => setCurrentPage(page)}
        />
      </Box>
    </Box>
  );
}
