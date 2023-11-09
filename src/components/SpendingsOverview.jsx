import { Box, Card, Typography, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";
import sephoraImg from "../assets/img/sephora.png";
import dunkinImg from "../assets/img/dunkin.png";
import costcoImg from "../assets/img/costco.png";
import walmartImg from "../assets/img/walmart.png";

const SpendingsOverview = () => {
  const theme = useTheme();

  return (
    <Box display='flex' flexDirection='column' mt={5} width='100%' p={2}>
      <SectionTitle title='Spendings' link='/' />

      <Card sx={{ mt: 2, position: "relative" }}>
        <Card
          sx={{
            mb: -1,
            position: "relative",
            zIndex: 1,
            p: 1,
            bgcolor: theme.palette.secondary.main,
          }}
          bgcolor={theme.palette.primary.main}
        >
          October
        </Card>
        <Card sx={{ p: 2, bgcolor: theme.palette.primary.contrastText }}>
          <SpendingCard
            title='Sephora'
            amount='-123,00'
            date='23 October 2023, 16:45'
            image={sephoraImg}
          />

          <SpendingCard
            title='Walmart'
            amount='-50,00'
            date='23 October 2023, 11:15'
            image={walmartImg}
          />

          <SpendingCard
            title='Dunkin Donuts'
            amount='-13,00'
            date='23 October 2023, 10:25'
            image={dunkinImg}
          />

          <SpendingCard
            title='Costco'
            amount='-26,11'
            date='23 October 2023, 09:45'
            image={costcoImg}
          />
        </Card>
      </Card>
    </Box>
  );
};

const SpendingCard = ({ title, amount, image, date }) => {
  return (
    <Card sx={{ p: 1, bgcolor: "transparent", my: 1 }}>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' gap={1}>
          <img src={image} alt='vendor logo' />
          <Typography color='black' variant='subtitle1'>
            {title}
          </Typography>
        </Box>
        <Typography color='black' variant='subtitle2'>
          {amount} USD
        </Typography>
      </Box>
      <Box display='flex' justifyContent='space-between' mt={2}>
        <Typography color='secondary' variant='body2'>
          {date}
        </Typography>
      </Box>
    </Card>
  );
};

export default SpendingsOverview;
