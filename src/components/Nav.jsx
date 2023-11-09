import { Box, Typography } from "@mui/material";
import userIcon from "../assets/icons/user.png";
import wavingHand from "../assets/icons/waving-hand.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box display='flex' flexDirection='column' p={3} gap={2}>
      <Box display='flex' alignItems='center'>
        <img src={userIcon} width={30} alt='user icon' />
        <Typography sx={{ mr: 3, ml: 1 }} variant='subtitle1'>
          Hi, Savvy!
        </Typography>
        <img src={wavingHand} width={30} alt='waving hand' />
      </Box>

      <Box display='flex' gap={3}>
        <Link to='/'>Overview</Link>
        <Link to='/budgets'>Budgets</Link>
        <Link to='/add-budget'>Add Budget</Link>
      </Box>
    </Box>
  );
};

export default Nav;
