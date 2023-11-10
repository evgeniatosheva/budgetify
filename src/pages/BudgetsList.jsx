import { Box, Typography } from "@mui/material";
import BudgetTracking from "../components/BudgetTracking";
import { BarChart } from "@mui/x-charts";

// Kiara
const BudgetsList = () => {
  return (
    <Box>
      <Typography variant='h6' sx={{ ml: 4 }}>
        Weekly spendings for: August
      </Typography>
      <BarChart
        height={300}
        series={[{ data: [1400, 160, 0, 150], yAxisKey: "rightAxisId" }]}
        sx={{ rx: 15 }}
        xAxis={[
          {
            scaleType: "band",
            data: ["1-7", "8-16", "17-24", "25-30"],
            categoryGapRatio: 0.8,
            barGapRatio: 0,
          },
        ]}
        yAxis={[{ id: "rightAxisId", data: ["140px", "1400px"] }]}
        rightAxis='rightAxisId'
        leftAxis={null}
      />

      <BudgetTracking flexWrap='wrap' />
    </Box>
  );
};

export default BudgetsList;
