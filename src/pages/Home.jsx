import { Box } from "@mui/material";
import RadialChart from "../components/RadialChart";
import BudgetTracking from "../components/BudgetTracking";
import SpendingsOverview from "../components/SpendingsOverview";
import SavingGoals from "../components/SavingGoals";

// Evgenia
const Home = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box p={2} mb={5}>
        <RadialChart percentage={80} type='Food' isInBudget />
      </Box>

      <BudgetTracking />

      <SpendingsOverview />

      <SavingGoals />
    </Box>
  );
};

export default Home;
