import { Box, Card, LinearProgress, Typography, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";

const BudgetTracking = () => {
  return (
    <Box p={2} width='100%' display='flex' flexDirection='column' gap={2}>
      <SectionTitle title='Budget Tracking' link='/budget-tracking' />
      <Box display='flex' gap={3} overflow='auto'>
        <BudgetCard
          progressColor='success'
          title='Food'
          achieved={1500}
          goal={2000}
        />

        <BudgetCard
          progressColor='error'
          title='Travel'
          achieved={200}
          goal={1700}
        />
      </Box>
    </Box>
  );
};

const BudgetCard = ({ progressColor, title, achieved, goal }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        bgcolor: theme.palette.secondary.main,
        height: 200,
        width: 200,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: "0 0 200px",
      }}
    >
      <Typography variant='h4'>{title}</Typography>
      <Box>
        <Typography variant='body1'>
          {achieved} / {goal} USD
        </Typography>

        <LinearProgress
          variant='determinate'
          sx={{ height: 10, borderRadius: 5 }}
          color={progressColor}
          value={(achieved / goal) * 100}
        />
      </Box>
    </Card>
  );
};

export default BudgetTracking;
