import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useApi from "../../api/useApi";
import { useAppSelector } from "../../hooks/redux";

const drawerWidth = 165;

export default function DrawerComponent() {
  const { fetchSpecialCategory } = useApi();
  const { categories } = useAppSelector((state) => state.items);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding 
            onClick={() => fetchSpecialCategory()}
            >
              <ListItemButton>
                <ListItemText primary={"All"} />
              </ListItemButton>
            </ListItem>
            {categories &&
              categories.map((text) => (
                <ListItem
                  key={text}
                  disablePadding
                  onClick={() => fetchSpecialCategory(text)}
                >
                  <ListItemButton>
                    <ListItemText
                      primary={text.charAt(0).toUpperCase() + text.slice(1)}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
