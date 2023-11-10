import { Box, Typography } from "@mui/material";
import successImage from "../assets/img/success-squirel.png";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const FormSuccessScreen = () => {
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

      <CustomButton component={Link} to='/'>
        Go to Home page
      </CustomButton>
    </Box>
  );
};

export default FormSuccessScreen;
