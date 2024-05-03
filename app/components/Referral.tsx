import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import Buttons from "./Button";

function Referral() {
  return (
    <Box p={0} display={{lg:'flex'}} flexDir={{lg:'row'}}>
      <Box
        color={"white"}
        py={12}
        bgGradient={"linear(to-l, #FF2973, #373DFF)"}
        px={4} w={{lg:'50%'}}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Invite your friends and earn
        </Text>
        <Text py={10} colorScheme="">
          Here's how it works: simply share your personalized QR code or unique
          referral link with friends across various apps and platforms. As they
          join VibesMeet through your invitation, you'll not only expand your
          network but also earn a percentage of their earnings whenever they
          withdraw funds. It's a win-win situation - the more friends you
          invite, the more you earn!
        </Text>

        <Buttons
          text={"Share the vibes"}
          color={"black"}
          size={""}
          bg={"white"}
          border={"1px solid white"}
          width={""}
          colorScheme={"linear(to-r, #FF2973, #373DFF)"}
        />
      </Box>

      <Box bg={"#A0b8f3"} py={6} px={4}>
        <Image alt="pallete" src={"/colorpal.png"} mb={2} />
        <Image alt="barcode" src={"/barcode.png"} />
      </Box>
    </Box>
  );
}

export default Referral;
