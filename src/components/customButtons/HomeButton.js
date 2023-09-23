import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const HomeButton = styled(Button)(({ theme }) => {
  return {
    color: "#3C3C3C",
    backgroundColor: "white",
    borderColor: "#00000061",
    boxShadow: "1px 4px #00000014",
    borderRadius: 50,
    left: "10vw",
    top: "10vh",
    height: "41px",
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "21px",
    fontWeight: "400",
    "&:hover": {
      backgroundColor: "#6b6b6b24",
      borderColor: "#00000061",
    },
  };
});

export default HomeButton;
