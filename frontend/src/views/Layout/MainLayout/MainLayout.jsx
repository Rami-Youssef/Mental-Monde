import React from "react";
import logo from './logo.png'
import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import "./header.scss";  // Importing the Sass file for the header styles
import { Outlet } from "react-router-dom";
const links = [
  { name: "Home", href: "/Home" },
];

export const MainLayout = () => {
  return (
    <>
    
    <Box className="header-container">
      <Flex className="header" alignItems="center" justifyContent="space-between">
        <Box >
          <img src={logo} alt="Logo" className="logo-img" />
        </Box>


        <HStack as="nav" className="nav-links" spacing={4}>
          
            <Link
              
              href='/Home'
              className="nav-link"
            >
              Home
            </Link>
          
        </HStack>

        <Box className="sign-in">
          <Link
            href="/"
            className="sign-in-link"
          >
            Sign Out
          </Link>
        </Box>
      </Flex>
    </Box>
    <Outlet></Outlet>
    </>
  );
};
