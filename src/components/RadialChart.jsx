import { Typography, useTheme } from "@mui/material";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RadialChart = ({ percentage, type, isInBudget }) => {
  const theme = useTheme();
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      counterClockwise
      strokeWidth={5}
      styles={{ path: { stroke: theme.palette.success.main } }}
    >
      <Typography variant='h4' color={theme.palette.success.main}>
        {type}
      </Typography>
      <Typography variant='h3'>
        {isInBudget ? "In Budget" : "Out of Budget"}
      </Typography>

      <Typography variant='h2'>{`${percentage}%`}</Typography>
    </CircularProgressbarWithChildren>
  );
};

export default RadialChart;
