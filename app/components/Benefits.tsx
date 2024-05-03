"use client";

import {
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { IoLocateOutline, IoLocationOutline } from "react-icons/io5";
function Benefits() {
  const [earning, setEarning] = useState(3000);
  const [price, setPrice] = useState(284);
  const [users, setUsers] = useState(1);

  const finalEarning = price * users;
  return (
    <Container color={"#fff"} px={6} textAlign={"center"} py={10}>
      <Text as={"h3"} color={"#fff"} fontSize={"2xl"}>
        {" "}
        As a creator you could earn
        <Text fontWeight={"bold"}> ${earning.toLocaleString()}.</Text>
      </Text>
      <Box>
        {" "}
        <Text>7 contents at an estimated $284 a content</Text>
        <Slider
          onChange={(value) => setEarning(value)}
          value={earning}
          min={1000}
          max={7000}
          step={7}
          my={6}>
          <SliderTrack bg="red.100">
            <SliderFilledTrack bgGradient="linear(to-r, #FF2973, #373DFF)" />
          </SliderTrack>
          <SliderThumb
            boxSize={4}
            bgGradient="linear(to-r, #FF2973, #373DFF)"
          />
        </Slider>
      </Box>

      <Box>
        <Text>
          {users} {users < 2 ? "user" : "users"} at an estimated $
          {finalEarning.toLocaleString()} a content.
        </Text>

        <Slider
          onChange={(value) => setUsers(value)}
          value={users}
          min={17}
          max={50}
          step={1}
          my={6}>
          <SliderTrack bg="red.100">
            <SliderFilledTrack bgGradient="linear(to-r, #FF2973, #373DFF)" />
          </SliderTrack>
          <SliderThumb
            boxSize={4}
            bgGradient="linear(to-r, #FF2973, #373DFF)"
          />
        </Slider>

        <InputGroup>
          <InputLeftElement pointerEvents={"none"}>
            <IoLocationOutline />
                  </InputLeftElement>
                  
                  <Input placeholder="New York." color={'#fff'} _placeholder={{color:'#fff'}}/>
        </InputGroup>
      </Box>
    </Container>
  );
}

export default Benefits;
