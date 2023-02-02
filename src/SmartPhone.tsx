import { Box } from "@mui/material";
import "./App.css";
import animal_chara_computer_penguin from "./animal_chara_computer_penguin.png";

export const SmartPhone = () => {
  return (
    <Box className="App">
      <Box className="App-header" sx={{ backgroundColor: "#424242" }}>
        <img
          src={animal_chara_computer_penguin}
          className="TopImage"
          alt="TopImage"
        />
        <div style={{ height: 15 }} />
        PCでアクセスしてください
        <br />
        https://is.gd/urlomkj
      </Box>
    </Box>
  );
};
