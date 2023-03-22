import { Box, Typography } from "@mui/material";
import "./styles.css";

const QrCodeComponent = () => {
  return (
    <Box className="box">
      <img src={require("../assets/image-qr-code.png")} />
      <Typography variant="h1">
        Improve your front-end skills by building projects
      </Typography>
      <Typography variant="body1">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </Typography>
    </Box>
  );
};

export default QrCodeComponent;
