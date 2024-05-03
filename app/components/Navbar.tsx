"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, List, ListItem, flexbox } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavLink = ["Product", "FAQ", "Contact Us", "Login", "Get Started"];
  const styles = {
    ":hover": {
      border: "1px solid white",
      borderRadius: "50",
    },
    px: "20px",
    py: "10px",

    ":last-child": {
      border: "none",
      px: "30px",
      py: "10px",
      borderRadius: "50",
      bgGradient: "linear(to-r, #FF2973, #373DFF)",
    },
    border: "1px solid transparent",
  };

  const stylesSmallScreen = {
    ":last-child": {
      border: "none",
      px: "30px",
      py: "10px",
      borderRadius: "50",
      bgGradient: "linear(to-r, #FF2973, #373DFF)",
    },
    border: "1px solid transparent",
    width: "90%",
    display: "flex",
  };
  return (
    <Flex
      as={"nav"}
      color={"white"}
      justify="space-between"
      alignItems={"center"}
      py={"2em"} px={6}>
      <Image alt="logo" src={"/logo.png"} width={100} height={100} />

      <Box
        as="div"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        display={{ base: "flex", lg: "none" }}>
        {isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={5} />}
      </Box>
      {isOpen && (
        <List
          className={`${isOpen && "slide-in-top "} `}
          display={{ base: "flex", lg: "none" }}
          flexDir={"column"}
          position={"absolute"}
          bg={"#000013"}
          top={20}
          w={"100vw"}
          left={0}
          gap={12}
          justifyContent={"center"}
          alignItems={"center"}
          borderTop={"1px solid white"}
          py={"15px"} zIndex={60}>
          {NavLink.map((link) => {
            return (
              <ListItem
                sx={stylesSmallScreen}
                justifyContent={"center"}
                alignItems={"center"}
                key={link}>
                {link}
              </ListItem>
            );
          })}
        </List>
      )}

      <List
        display={{ base: "none", lg: "flex" }}
        gap={12}
        justifyContent={"center"}>
        {NavLink.map((link) => {
          return (
            <ListItem sx={styles} key={link}>
              {link}
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
}

export default Navbar;
