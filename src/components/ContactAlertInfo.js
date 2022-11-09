import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ContactAlertInfo(props) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
        open={props.isOpen}
        autoHideDuration={3000}
        onClose={props.handleClose}
      >
        <Alert
          onClose={props.handleClose}
          severity={props.severity}
          sx={{ width: "100%" }}
        >
          {props.alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default ContactAlertInfo;
