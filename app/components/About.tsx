import {
  Box,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const process = [
  'Tap the photo upload button to upload your first "primary photo"',

  "Strike a pose: Choose from a hundred random poses.",

  "Follow in-app steps to send a selfie through our AI.",
];

function About() {
  return (
    <Box
      bgImage={"/background.png"}
      color={"#fff"}
      px={6}
      pt={10}>
      <Heading
        as={"h2"}
        bgGradient="linear(to-r, #FF2973, #373DFF)"
        color="transparent"
        backgroundClip="text"
        fontSize={"xxx-large"}
        mb={6}
        fontWeight={"bold"}
        textAlign={"center"}>
        Everyone here is verified!{" "}
      </Heading>
      <Box display={{ base: "block", lg: "flex" }}>
        <Box>
          <Box>
            <Heading color={"#fff"} fontWeight={"semibold"}>
              Easy Verification steps
            </Heading>
            <UnorderedList>
              {process.map((processlist) => {
                return (
                  <ListItem key={processlist} color={"white"} p={2}>
                    {processlist}
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Box>
          <Box my={6}>
            <Box>
              <Heading color={"#fff"} fontWeight={"semibold"} mb={2}>
                Foolproof Assurance
              </Heading>
              <Text>
                Relax! Every user-uploaded photo undergoes a robust AI facial
                recognition scan, equivalent to your iPhone's face verification.
                For creators, it's a double-check—AI verification followed by a
                personal interview with the Vibes team where you would show your
                ID proof on a live call.
              </Text>
            </Box>
          </Box>

          <Box>
            <Heading color={"#fff"} fontWeight={"semibold"} mb={2}>
              Swift Confirmation
            </Heading>
            <Text> Get verification confirmation or rejection in a flash.</Text>
          </Box>
        </Box>

        <Box>
          <Image src="/iphone.png" alt="iphone" w={"1000px"} />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
