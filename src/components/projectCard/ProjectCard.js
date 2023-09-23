import React from "react";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import "./style.css";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent className="card_content">
        <Box className="project_logo">
          <h1>PT</h1>
        </Box>
        <div className="card_desc">
          <h3>{project.title}</h3>
          <p>Last edited a week ago</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
