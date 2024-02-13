import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({
  slicedItems,
  page,
  changePagination,
}: {slicedItems: number, page: number, changePagination: (page: number) => void }) {
  
  return (
    <Stack spacing={2} sx={{ margin: "1rem" }}>
      <Pagination
        page={page}
        count={slicedItems}
        onChange={(_, page) => changePagination(page)}
      />
    </Stack>
  );
}
