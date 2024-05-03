import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Buttons from "./Button";

interface Services {
  img: string;
  header: string;
  paragragph: string;
}
function SubServices({ img, header, paragragph }: Services) {
  return (
    <Box bg={"#000013"} borderRadius={10} mb={6}>
      <Image src={img} borderRadius={10} alt={header} />
      <Box display={"flex"} flexDir={"column"} px={6}>
        {" "}
        <Heading as={"h3"} my={6} textAlign={"center"}>
          {header}
        </Heading>
        <Text textAlign={"center"}>{paragragph}</Text>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          py={6}>
          {" "}
          <Buttons
            color={"white"}
            bg="linear(to-r, #FF2973, #373DFF)"
            text={"Get started"}
            size=" 1em 2em "
            border="''"
            width={"50%"} colorScheme={""}          />
        </Box>
      </Box>
    </Box>
  );
}

export default SubServices;
