import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import Buttons from "./Button";

function JoinNow() {
  return (
    <Box color={"white"} pt={24}>
      <Box>
        <Text as={"h3"} fontSize={"4xl"} pb={6} p={6} fontWeight={{lg:'bold'}} textAlign={{lg:'center'}}>
          {" "}
          Jump on board!
        </Text>
        <Text pb={6} textAlign={{lg:'center'}}>
          Experience the thrill of connections with Vibes Meet App's gamified
          matching feature! Swipe right to express interest, left if you're not
          feeling the connection, and seamlessly reverse a decision with a
          simple click or tap.
        </Text>
      </Box>

      <Box
        display={"flex"}
              flexDir={{ base: "column", lg: 'row' }}
              justifyContent={{base: 'center'}}
        gap={4}
        pb={72}
        fontWeight={"normal"}>
        {" "}
        <Buttons
          color={"linear(to-r, #FF2973, #373DFF)"}
          text={"Get Started"}
          size={""}
          bg={"linear(to-l, #FF2973, #373DFF)"}
          border={""}
          width={""}
                  colorScheme={""}
                  
        />
        <Buttons
          color={""}
          text={"Login"}
          size={"1.3em 2.6em"}
          bg={""}
          border={"1px solid white"}
          width={""}
          colorScheme={""}
        />
      </Box>

      <Box
        bgGradient={"linear(to-l, #FF2973, #373DFF)"}
        pos={"relative"}
        top={"-100px"}
        height="500px">
        <Image
          src="/iphone.png"
          alt="iphone"
          position="absolute"
          bottom={"8em"}
          left="50%"
          transform="translateX(-50%)"
          h={"100%"}
        />
      </Box>
    </Box>
  );
}

export default JoinNow;
