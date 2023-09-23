import "./App.css";
import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
function App() {
  // const Project = () => <h1>Project</h1>
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3C3C3C",
      },
    },
    modal:{
      "&:focus":{
      outline: "none !important",
     }
   }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/project/:projectId" element={<Project />} />
          </Routes>
        </Fragment>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
