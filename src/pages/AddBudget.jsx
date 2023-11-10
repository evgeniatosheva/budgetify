import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useMemo } from "react";
import FormSuccessScreen from "../components/FormSuccessScreen";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import CustomButton from "../components/CustomButton";

// Evgenia
const AddBudget = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState();
  const [period, setPeriod] = useState("Monthly");

  const [hasSubmitted, setHasSubmitted] = useState(false); // This is for validations
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
    useState(false); // This is to show the success message

  const nameError = useMemo(
    () => name === "" && hasSubmitted,
    [hasSubmitted, name]
  );
  const amountError = useMemo(
    () => amount === "" && hasSubmitted,
    [amount, hasSubmitted]
  );
  const dateError = useMemo(
    () => date === undefined && hasSubmitted,
    [date, hasSubmitted]
  );

  const handleSubmit = async (e) => {
    // Here, we check for validation errors in the fields
    e.preventDefault();
    setHasSubmitted(true);

    if (name === "" || amount === "" || date === undefined) return;

    try {
      await addDoc(collection(db, "budgets"), {
        name,
        savingPeriod: period,
        startDate: new Date(date).toLocaleDateString(),
        total: amount,
      });

      setFormSubmittedSuccessfully(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return !formSubmittedSuccessfully ? (
    <Box p={2}>
      <Typography variant='h5'>Set your budget</Typography>
      <Typography variant='body1'>
        Set your budget and start saving money
      </Typography>

      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        mt={3}
        gap={2}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label='Name'
          placeholder='E.g. Food, Travel or Shopping'
          error={nameError}
          helperText={nameError && "Please enter a name"}
        />

        <TextField
          value={amount}
          type='number'
          onChange={(e) => setAmount(e.target.value)}
          label='DKK'
          placeholder='Per month'
          error={amountError}
          helperText={amountError && "Please enter a valid amount"}
        />

        <MobileDatePicker
          value={date}
          onChange={(newValue) => setDate(newValue)}
          label='Start date'
          placeholder='Choose your start date'
          slotProps={{
            textField: {
              error: dateError, // Bolean
              helperText: dateError && "Please enter a valid date",
            },
          }}
        />

        <TextField
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          label='Deposit period'
          select
        >
          <MenuItem value='Monthly'>Monthly</MenuItem>
          <MenuItem value='Weekly'>Weekly</MenuItem>
          <MenuItem value='Quarerly'>Quarterly</MenuItem>
          <MenuItem value='Yearly'>Yearly</MenuItem>
        </TextField>

        <CustomButton onClick={handleSubmit}>Continue</CustomButton>
      </Box>
    </Box>
  ) : (
    <FormSuccessScreen />
  );
};

export default AddBudget;
