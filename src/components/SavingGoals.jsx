import { Box, LinearProgress, Typography, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";
import plusIcon from "../assets/icons/plus.png";

const SavingGoals = () => {
  return (
    <Box width='100%' p={2}>
      <SectionTitle title='Saving goals' link='/' />

      <SavingGoalCart
        percentage={20}
        saved={200}
        title='Vivienne Westwood Plateaustøvletter'
      />

      <SavingGoalCart percentage={40} saved={3000} title='NYC Fashion Week' />

      <SavingGoalCart percentage={70} saved={2000} title='Holiday in Hawaii' />

      <SavingGoalCart
        percentage={40}
        saved={300}
        title='Prada Re-Edition 2005 bag'
      />

      <SavingGoalCart percentage={80} saved={1000} title='Holiday shopping' />

      <SavingGoalCart isCreationCard percentage={0} saved={0} />
    </Box>
  );
};

const SavingGoalCart = ({ title, saved, percentage, isCreationCard }) => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      display='flex'
      flexDirection='column'
      height={150}
      p={2}
      borderRadius={5}
      my={2}
      justifyContent='space-between'
    >
      <Box
        width='100%'
        display='flex'
        justifyContent='space-between'
        alignItems='flex-end'
      >
        <Typography variant='subtitle1'>{title}</Typography>
        <Box
          width='30%'
          display='flex'
          flexDirection='column'
          justifyContent='flex-end'
          alignItems='flex-end'
          gap={1}
        >
          {isCreationCard && (
            <Box
              borderRadius='50%'
              height={40}
              width={40}
              bgcolor={theme.palette.primary.light}
              display='flex'
              alignItems='center'
              justifyContent='center'
              sx={{ cursor: "pointer" }}
            >
              <img width='50%' src={plusIcon} alt='plus icon' />
            </Box>
          )}
          <Typography variant='subtitle1'>{saved} USD</Typography>
        </Box>
      </Box>

      <Box>
        <Typography color='secondary' variant='body2'>
          Saved {percentage}%
        </Typography>
        <LinearProgress
          variant='determinate'
          sx={{ height: 10, borderRadius: 5 }}
          color='success'
          value={percentage}
        />
      </Box>
    </Box>
  );
};

export default SavingGoals;
