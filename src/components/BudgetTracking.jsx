import { Box, Card, LinearProgress, Typography, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";

const BudgetTracking = ({ flexWrap = "nowrap" }) => {
  const [budgets, setBudgest] = useState([]);

  // In this useEffect, we are getting the created budgets from firebase
  useEffect(() => {
    const fetchData = async () => {
      await getDocs(collection(db, "budgets")).then((querySnapshot) => {
        const budgetsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setBudgest(budgetsData);
      });
    };

    fetchData();
  }, []);

  return (
    <Box p={2} width='100%' display='flex' flexDirection='column' gap={2}>
      <SectionTitle title='Budget Tracking' link='/budget-tracking' />
      <Box display='flex' gap={3} overflow='auto' flexWrap={flexWrap}>
        {budgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            progressColor='success'
            title={budget.name}
            achieved={1500}
            goal={budget.total}
            id={budget.id}
            width={flexWrap === "wrap" ? "47%" : "200px"}
          />
        ))}
      </Box>
    </Box>
  );
};

const BudgetCard = ({ progressColor, title, achieved, goal, width, id }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        bgcolor: theme.palette.secondary.main,
        height: 200,
        width: width,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: width === "47%" ? "auto" : `0 0 ${width}`,
        ":hover": {
          opacity: 0.7,
        },
      }}
      component={Link}
      to={`/budgets/${id}`}
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
