import * as React from "react";
import { useState, ElementType } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Prosto_One } from "next/font/google";

interface InputProps {
  icon?: ElementType;
  value: string;
  label?: string;
  onInputChange?: (input: string) => void;
}

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7e22ce",
          },
          "&:hover": {
            backgroundColor: "white",
            "& .MuiOutlinedInput-input": {
              color: "black",
            },
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7e22ce",
          },
          "&.Mui-focused": {
            backgroundColor: "white",
            "& .MuiOutlinedInput-input": {
              color: "black",
            },
          },
        },
      },
    },
  },
});

export default function Input(props: InputProps) {
  const [input, setInput] = useState(props.value);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setInput(newValue);
    props.onInputChange(newValue);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {props.label && (
          <label className="text-sm text-gray-600">{props.label}</label>
        )}
        <TextField
          id="input-with-icon-textfield"
          value={input}
          onChange={onChange}
          disabled={props.onInputChange === undefined}
          InputProps={{
            startAdornment: props.icon && (
              <InputAdornment position="start">
                <props.icon
                  sx={{ color: !!input ? "text.primary" : "text.disabled" }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Box>
    </ThemeProvider>
  );
}
