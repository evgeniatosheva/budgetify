import { Button, useTheme } from "@mui/material";

const CustomButton = (props) => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      sx={{
        borderRadius: 10,
        color: "white",
        bgcolor: theme.palette.secondary.main,
        ":hover": {
          color: "white",
          bgcolor: theme.palette.secondary.dark,
        },
      }}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
