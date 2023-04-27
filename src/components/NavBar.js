import * as React from "react";
// import AppBar from '@mui/material/AppBar';
import AppBar from "@mui/material/AppBar";
import styled from "@emotion/styled";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: skyblue;
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color:inherit;
  
`;
function NavBar() {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
}

export default NavBar;
