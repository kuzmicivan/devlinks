import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ListItemIcon } from "@mui/material";

export interface DropdownValue {
  icon: React.ElementType;
  name: string;
}

interface DropdownProps {
  label: string;
  value: DropdownValue | null;
  onValueChange: (dropdownValue: DropdownValue) => void;
  values: DropdownValue[];
  defaultIcon: React.ElementType;
}

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            backgroundColor: "white",
          },
          "&:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7e22ce",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7e22ce",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            backgroundColor: "#EDE9FE",
          },
          "&.Mui-selected": {
            backgroundColor: "#EDE9FE",
          },
        },
      },
    },
  },
});

export default function Dropdown(props: DropdownProps) {
  const [selected, setSelected] = React.useState<DropdownValue | null>(
    props.value
  );

  const handleChange = (event) => {
    const newSelection: DropdownValue = {
      name: event.target.value,
      icon: props.values.find((value) => value.name === event.target.value)
        .icon,
    };
    props.onValueChange(newSelection);
    setSelected(newSelection);
  };

  const renderValue = (selectedValue) => {
    if (selectedValue) {
      const Icon =
        props.values.find((v) => v.name === selectedValue)?.icon ||
        props.defaultIcon;
      return (
        <div className="flex items-center gap-2">
          <Icon />
          <p className="pt-1">{selectedValue}</p>
        </div>
      );
    } else {
      const DefaultIcon = props.defaultIcon;
      return <DefaultIcon className="text-gray-500" />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth>
        <label htmlFor="dcheckbox" className="text-sm text-gray-600">
          {props.label}
        </label>
        <Select
          labelId="checkbox-label"
          id="dcheckbox"
          value={selected?.name}
          displayEmpty
          onChange={handleChange}
          renderValue={renderValue}
        >
          {props.values.map((value) => (
            <MenuItem key={value.name} value={value.name}>
              <ListItemIcon>
                <value.icon />
              </ListItemIcon>
              <ListItemText primary={value.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
