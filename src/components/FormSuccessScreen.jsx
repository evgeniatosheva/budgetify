import { Box, Button, Typography, useTheme } from "@mui/material";
import successImage from "../assets/img/success-squirel.png";
import { Link } from "react-router-dom";

const FormSuccessScreen = () => {
  const theme = useTheme();

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap={2}
      p={2}
    >
      <img src={successImage} alt='Success squirel' />
      <Typography variant='h5' sx={{ mx: 3 }}>
        You are all set
      </Typography>
      <Button
        component={Link}
        sx={{
          width: "100%",
          borderRadius: 10,
          color: "white",
          bgcolor: theme.palette.secondary.main,
          ":hover": {
            color: "white",
            bgcolor: theme.palette.secondary.dark,
          },
        }}
        to='/'
      >
        Go to Home page
      </Button>
    </Box>
  );
};

export default FormSuccessScreen;
