import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import InfoBox from "../components/InfoBox";
import { Box, Card, LinearProgress, Typography, useTheme } from "@mui/material";
import SpendingsOverview from "../components/SpendingsOverview";
import { LineChart } from "@mui/x-charts";

// Kiara
const BudgetDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();

  const [budget, setBudget] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await getDoc(doc(db, "budgets", id)).then((doc) => {
        if (doc.exists()) {
          setBudget(doc.data());
        } else {
          console.log("No such document!");
          navigate("/404");
        }
      });
    };

    fetchData();
  }, [id, navigate]);

  return (
    <Box p={2}>
      <Typography variant='h6'>{budget.name}</Typography>

      <InfoBox />

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          bgcolor: theme.palette.primary.contrastText,
          color: "#7C6E6E",
          my: 3,
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          mb={2}
        >
          <Typography variant='body1'>Used 30%</Typography>
          <Box display='flex' gap={1}>
            <Typography variant='subtitle1'>1500 USD</Typography>/{" "}
            <Typography
              variant='subtitle1'
              sx={{ color: theme.palette.warning.main }}
            >
              {budget.total} USD
            </Typography>
          </Box>
        </Box>

        <LinearProgress
          variant='determinate'
          sx={{ height: 10, borderRadius: 5 }}
          color='primary'
          value={(1500 / budget.total) * 100}
        />
      </Card>

      <Card sx={{ bgcolor: theme.palette.secondary.main }}>
        <LineChart
          xAxis={[{ data: [1, 7, 15, 23, 30] }]}
          series={[
            {
              data: [200, 120, 400, 210, 500],
              area: true,
            },
          ]}
          height={300}
        />
      </Card>

      <SpendingsOverview padding={0} />
    </Box>
  );
};

export default BudgetDetails;
