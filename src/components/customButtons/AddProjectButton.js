import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const AddProjectButton = styled(Button)(({ fontSize, theme }) => ({
  color: "#F8F8F8",
  backgroundColor: "#211935",
//   borderColor: "#00000061",
  boxShadow: "1px 4px rgb(197 195 195 / 25%)",
  borderRadius: "12.89px",
  // left: "10vw",
  // top: "12vh",
  textTransform: "none",
  fontFamily: "Roboto",
  fontSize: fontSize,
  fontStyle: "normal",
  fontWeight: "600",
  padding: "6px 18px",
  "&:hover": {
    backgroundColor: "#211935",
    // borderColor: "#00000061",
  },
}));

export default AddProjectButton;
