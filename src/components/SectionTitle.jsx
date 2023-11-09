import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SectionTitle = ({ title, link }) => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      width='100%'
    >
      <Typography variant='h5'>{title}</Typography>
      <Link to={link}>See all</Link>
    </Box>
  );
};

export default SectionTitle;
