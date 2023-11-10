import { Box, Card, Typography, useTheme } from "@mui/material";
import helpIcon from "../assets/icons/help.png";
import CustomButton from "./CustomButton";

const InfoBox = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.palette.primary.contrastText,
        color: "#7C6E6E",
        p: 2,
        mt: 2,
      }}
    >
      <Box display='flex' gap={2} color='#000' alignItems='center' mb={2}>
        <img
          src={helpIcon}
          alt='Help'
          style={{ width: "20px", height: "20px" }}
        />
        <Typography variant='h6'>See the places you spend more</Typography>
      </Box>

      <Typography variant='body1'>
        Gain insight into your spending patterns by identifying the top places
        where you spend the most.
      </Typography>

      <CustomButton sx={{ mt: 2 }}>Learn more</CustomButton>
    </Card>
  );
};

export default InfoBox;
