import TextField from "@mui/material/TextField";

const InputComponent = ({ value, handleChange, disabled }) => {
  const inputStyle = {
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#000000",
    },
  };

  return (
    <TextField
      type="number"
      id="outlined-basic"
      label=""
      variant="outlined"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      disabled={disabled}
      sx={disabled ? inputStyle : {}}
    />
  );
};

export default InputComponent;
