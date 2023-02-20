import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectComponent = ({ name, value, handleChange, data }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {data ? (
          data.map((i) => {
            return (
              <MenuItem key={i.ccy} value={i.ccy}>
                {i.ccy}
              </MenuItem>
            );
          })
        ) : (
          <MenuItem value={value}>{value}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};
export default SelectComponent;
