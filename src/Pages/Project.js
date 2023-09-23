import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CompanyName from "../components/companyName/CompanyName";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import TopRightIcon from "../components/topRightIcon/TopRightIcon";
import ProfileIcons from "../components/profileIcons/ProfileIcons";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UploadCard from "../components/uploadCard/UploadCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TranscriptTable from "../components/transcriptTable/TranscriptTable";
import axios from "axios";
import api from "../utils/api";
import "./project.css";
const Project = () => {
  const [activeOption, setActiveOption] = useState("Projects");
  const [uploadOption, setUploadOption] = useState([
    {
      title: "Upload Youtube Video",
      url: "",
      logo: "https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg",
    },
    {
      title: "Upload Youtube Video",
      url: "",
      logo: "https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg",
    },
    {
      title: "Upload Youtube Video",
      url: "",
      logo: "https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg",
    },
  ]);
  const [transcripts, setTranscripts] = useState([]);
  const params = useParams();
  useEffect(() => {
    const json = JSON.stringify({
      email: "ksayantan1821@gmail.com",
      projectId: params.projectId,
    });
    api
      .post("/api/transcript/getTranscript", json)
      .then((res) => {
        // console.log(res.data);
        setTranscripts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.projectId]);
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div>
      <List className="project_sidebar">
        <CompanyName />
        <div className="project_navigation">
          {["Projects", "Widget Configurations", "Deployment", "Pricing"].map(
            (text, index) => (
              <ListItem
                key={text}
                onClick={() => setActiveOption(text)}
                className="navigation_item"
              >
                <ListItemButton
                  className="project_option"
                  sx={{
                    background: text == activeOption ? "#7E22CE" : "",
                    color: text == activeOption ? "white" : "black",
                  }}
                >
                  <h3>{text}</h3>
                </ListItemButton>
              </ListItem>
            )
          )}
        </div>
      </List>
      <div className="project_content">
        <div className="project_nav">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" className="upload_breadcrumb">
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center", color: "#7E22CE" }}
                to="/"
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href=""
              >
                {params.projectId}
              </Link>
              <Link
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#7E22CE",
                  textDecoration: "none",
                }}
                // color="text.primary"
              >
                Upload
              </Link>
            </Breadcrumbs>
          </div>
          <ProfileIcons />
        </div>
        <h1>Upload</h1>
        <Grid container spacing={24} className="upload_option_grid">
          {/* <Grid item xs={12}> */}
          <Grid
            container
            justifyContent="left"
            spacing={8}
            className="upload_grid_core"
          >
            {uploadOption.map((option, index) => (
              <Grid
                item
                // xs={1}
                // sm={4}
                // md={4}
                key={index}
                className="upload_item"
              >
                <UploadCard content={option} />
              </Grid>
            ))}
          </Grid>
          {/* </Grid> */}
        </Grid>
        {transcripts.length < 1 ? (
          <>
            <Box className="project_box">
              <p>or</p>
              <div className="drag_box"></div>
            </Box>
          </>
        ) : (
          <div className="transcript_container">
            <TranscriptTable transcripts={transcripts}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
