import { Box, Typography } from "@mui/material";
import notFoundImage from "../assets/img/404.png";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";

// Evgenia and Kiara
const NotFound = () => {
  return (
    <Box
      p={2}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      gap={2}
    >
      <img src={notFoundImage} alt='squirrel not found' height='250px' />

      <Typography variant='h6' textAlign='center'>
        Oh no! Looks like we have ran into a problem
      </Typography>

      <CustomButton component={Link} to='/'>
        Go to Home
      </CustomButton>
      <Typography>or</Typography>
      <Link to={-1}>Go Back</Link>
    </Box>
  );
};

export default NotFound;
