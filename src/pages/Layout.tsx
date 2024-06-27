import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import HomePage from "../components/HomePage";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
