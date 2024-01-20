import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

import Slide from "react-reveal/Slide";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

import MapIcon from "@mui/icons-material/Map";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudIcon from "@mui/icons-material/Cloud";
import ForestIcon from "@mui/icons-material/Forest";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const Navbar = ({ handleLogOut, authenticated }) => {
  
  const [open, setState] = useState(false);

 
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          className="app-bar"
          style={{
            background: "#0f252e",
            minWidth: '400px'
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{
                mr: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              //from which side the drawer slides in
              anchor="left"
              //if open is true --> drawer is shown
              open={open}
              //function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              //function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
            >
              {/* The inside of the drawer */}
              <Box
                sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#0f252e",
                }}
                style={{ minHeight: 600}}
              >
                {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                <IconButton sx={{ mb: 2 }}>
                  <CloseIcon
                    onClick={toggleDrawer(false)}
                    sx={{ color: "#eef736" }}
                  />
                </IconButton>

                <Divider sx={{ mb: 2 }} />

                {authenticated ? (
                  <Box sx={{ mb: 2 }}>
                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <HomeRoundedIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" to="/posts">
                        <ListItemText className="nav" primary="Home" />
                      </Link>
                    </ListItemButton>

                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <ForestIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" to="/myhikes">
                        <ListItemText className="nav" primary="My Hikes" />
                      </Link>
                    </ListItemButton>

                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <PostAddIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" to="/createpost">
                        <ListItemText className="nav" primary="New Post" />
                      </Link>
                    </ListItemButton>

                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <LibraryAddIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" to="/yourrecordings">
                        <ListItemText className="nav" primary="New Recording" />
                      </Link>
                    </ListItemButton>

                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" to="/recordingsgrid">
                        <ListItemText className="nav" primary="Completed" />
                      </Link>
                    </ListItemButton>

                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <CloudIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" to="/weather">
                        <ListItemText className="nav" primary="Weather" />
                      </Link>
                    </ListItemButton>

                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <LogoutIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" onClick={handleLogOut} to="/">
                        <ListItemText className="nav" primary="Sign Out" />
                      </Link>
                    </ListItemButton>
                  </Box>
                ) : (
                  <Box sx={{ mb: 2 }}>
                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <LoginIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" to="/login">
                        <ListItemText className="nav" primary="Sign In" />
                      </Link>
                    </ListItemButton>

                    <ListItemButton className="nav">
                      <ListItemIcon>
                        <HowToRegIcon sx={{ color: "#eef736" }} />
                      </ListItemIcon>
                      <Link className="nav" to="/register">
                        <ListItemText className="nav" primary="Sign Up" />
                      </Link>
                    </ListItemButton>
                  </Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                ></Box>
              </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar