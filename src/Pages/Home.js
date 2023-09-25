import React, { useEffect, useState } from "react";
import CompanyName from "../components/companyName/CompanyName";
import Card from "@mui/material/Card";
import TopRightIcon from "../components/topRightIcon/TopRightIcon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProjectDiscussionSVG from "../assets/icons/ProjectDiscussionSVG";
import HomeButton from "../components/customButtons/HomeButton";
import AddProjectButton from "../components/customButtons/AddProjectButton";
import ProjectCard from "../components/projectCard/ProjectCard";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import modalStyle from "../components/uploadCard/modalStyle";
import "./home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState("ksayantan1821@gmail.com");
  const [open, setOpen] = useState(!JSON.parse(localStorage.getItem("user")));
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const handleProjectModalClose = () => setProjectModalOpen(false);
  const handleProjectModalOpen = () => setProjectModalOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [stateCount, setStateCount] = useState(0);
  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // border: "1px solid black",
  }));
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setEmail(user);
      getProjects();
    }
  }, [email, stateCount]);

  const getProjects = () => {
    const json = JSON.stringify({
      email: email,
    });
    api
      .post("/api/project/getProject", json)
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getProjects()
  const navigate = useNavigate();

  function handleClick(projectId) {
    navigate(`/project/${projectId}`);
  }

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(user));

    const json = JSON.stringify({
      email: user,
    });
    api
      .post("/api/user", json)
      .then((res) => {
        console.log(res.data);
        setEmail(user);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleInput = (event) => {
    event.preventDefault();
    setUser(event.target.value);
  };

  const handleProjectTitle = (event) => {
    event.preventDefault();
    setProjectTitle(event.target.value);
  };
  const handleProjectSubmit = () => {
    const json = JSON.stringify({
      email: email,
      projectName: projectTitle,
    });
    api
      .post("/api/project", json)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getProjects();
    handleProjectModalClose();
    setStateCount(stateCount + 1);
  };
  return (
    <>
      <CompanyName /> <TopRightIcon />
      <HomeButton
        variant="outlined"
        startIcon={<HomeOutlinedIcon fontSize="large" />}
      >
        Back to Home
      </HomeButton>
      <div className="projects">
        {projects.length < 1 ? (
          <div className="no_project">
            <h1>Create a New Project</h1>
            <ProjectDiscussionSVG />
            <p className="landing_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </p>
            <AddProjectButton
              fontSize="46.28px"
              startIcon={<AddCircleIcon className="add_icon" />}
              onClick={handleProjectModalOpen}
            >
              Create New Project
            </AddProjectButton>
          </div>
        ) : (
          <div className="project">
            <div className="project_heading">
              <h1>Projects</h1>
              <AddProjectButton
                fontSize="30.552px"
                startIcon={<AddCircleIcon className="small_add_icon" />}
                onClick={handleProjectModalOpen}
              >
                Create New Project
              </AddProjectButton>
            </div>
            <Box sx={{ flexGrow: 1 }} className="projects_box">
              <Grid sx={{ flexGrow: 1 }} container spacing={12}>
                <Grid item xs={12}>
                  <Grid container justifyContent="left" spacing={8}>
                    {projects.map((project, index) => (
                      <Grid
                        item
                        xs={2}
                        sm={4}
                        md={4}
                        key={index}
                        onClick={() => handleClick(project._id)}
                      >
                        <ProjectCard project={project} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </div>
        )}
      </div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} className="upload_modal">
          <h1>Enter User Email Id</h1>
          <TextField
            className="upload_input"
            fullWidth
            label="Email Id"
            id="email"
            onChange={handleInput}
            value={user}
          />
          <Button
            className="upload_button"
            variant="contained"
            onClick={handleSubmit}
          >
            Sumbit
          </Button>
        </Box>
      </Modal>
      <Modal
        open={projectModalOpen}
        onClose={handleProjectModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} className="upload_modal">
          <h1>Enter Project Title</h1>
          <TextField
            className="upload_input"
            fullWidth
            label="Project Title"
            id="projectTitle"
            onChange={handleProjectTitle}
            
          />
          <Button
            className="upload_button"
            variant="contained"
            onClick={handleProjectSubmit}
          >
            Sumbit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Home;
