import { Alert, Snackbar } from "@mui/material";
import { createRoot } from "react-dom/client";
import { NotifyProps } from "../../models/models";

function NotificationSnackbar({
  message,
  type,
  verticalPosition,
  horizontalPosition,
}: NotifyProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: verticalPosition ? verticalPosition : "bottom",
        horizontal: horizontalPosition ? horizontalPosition : "right",
      }}
      open={true}
      sx={{ position: "fixed", zIndex: 1500 }}
    >
      <Alert severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

const showNotification = ({
  message,
  type,
  verticalPosition,
  horizontalPosition,
}: NotifyProps) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(
    <NotificationSnackbar
      message={message}
      type={type}
      verticalPosition={verticalPosition}
      horizontalPosition={horizontalPosition}
    />
  );

  setTimeout(() => {
    document.body.removeChild(container);
  }, 2000);
};

export default showNotification;