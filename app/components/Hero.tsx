import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Buttons from "./Button";

function Hero() {
  return (
    <Flex
      as={"section"}
      px={6}
      mb={6}
      alignItems={"center"}
      justifyContent={"center"}>
      <Image
        src={"/bg-blur.png"}
        alt="asthethics"
        pos={"absolute"}
        top={"60"}
      />
      <Box>
        <Box>
          <Heading
            fontSize={"5xl"}
            textAlign={"center"}
            color={"#fff"}
            fontWeight={"semibold"}>
            More than just
            <Text
              as={"span"}
              bgGradient="linear(to-r, #FF2973, #373DFF)"
              color="transparent"
              backgroundClip="text">
              {" "}
              Matching
            </Text>{" "}
          </Heading>
          <Text as={"p"} color={"#fff"} align={"center"} mt={2}>
            Sell your content, engage your audience, get paid to meet new people
            while using our security features, and form real connections!
          </Text>
          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={"center"}
            gap={2}
            mt={6}
            mb={12}>
            <Buttons
              color={"white"}
              bg="linear(to-r, #FF2973, #373DFF)"
              text={"Get started"}
              size=" 1em 2em "
              border="''"
              width=""
              colorScheme={""}
            />
            <Buttons
              color={"white"}
              bg="transparent"
              border={"1px solid white"}
              text={"Login"}
              size=" 1em 2em "
              width=""
              colorScheme={""}
            />
          </Box>
        </Box>

        <Box mt={8} display={{ base: "", lg: "flex" }} gap={6}>
          <Flex
            gap={4}
            pointerEvents={"none"}
            alignItems={"center"}
            justifyContent={"center"}>
            <Box display={"flex"} flexDir={"column"} gap={4}>
              <Image
                src="/cuppy.png"
                h={"100%"}
                maxH={"350px"}
                maxW={"350px"}
              />
              <Image
                src="/amarae.png"
                h={"100%"}
                maxH={"350px"}
                maxW={"350px"}
              />
            </Box>
            <Box>
              <Image
                src="/lady-tracksuit.png"
                h={"100%"}
                w={"100%"}
                maxH={"700px"}
                maxW={"700px"}
              />
            </Box>
          </Flex>

          <Flex
            gap={4}
            pointerEvents={"none"}
            alignItems={"center"}
            justifyContent={"center"} display={{ base: 'none',  lg:"flex"}} >
            <Box  gap={4}>
              <Image
                src="/model.png"
                h={"100%"}
                maxH={"350px"}
                maxW={"350px"}
              />
              <Image
                src="/arya.png" 
                h={"100%"}
                maxH={"350px"}
                maxW={"350px"}
              />
            </Box>
            <Box>
              <Image
               src="/tristan.png"
                h={"100%"}
                w={"100%"}
                maxH={"700px"}
                maxW={"700px"}
              />
            </Box>
          </Flex>


          {/* <Flex
            gap={4}
            pointerEvents={"none"}
            display={{ base: "none", lg: "flex" }}>
            <Box display={"flex"} flexDir={"column"} gap={4} alignItems={'center'} justifyContent={'center'}>
              <Image src="/arya.png" h={"100%"} maxH={"350px"} maxW={"350px"} />
              <Image
                src="/model.png"
                h={"100%"}
                maxH={"350px"}
                maxW={"350px"}
              />
            </Box>
            <Box>
              <Image
                src="/tristan.png"
                h={"100%"}
                maxH={"700px"}
                maxW={"700px"}
                w={"100%"}
              />
            </Box>
          </Flex> */}
        </Box>
      </Box>
    </Flex>
  );
}

export default Hero;
