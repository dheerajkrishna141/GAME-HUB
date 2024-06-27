import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../StateManagement/store";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const setSearch = useGameQueryStore((s) => s.setSearch);
  const navigate = useNavigate();
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        onClick={() => {
          setSearch("");
          navigate("/");
        }}
        _hover={{
          cursor: "pointer",
        }}
        boxSize="60px"
      ></Image>

      <SearchInput></SearchInput>

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
