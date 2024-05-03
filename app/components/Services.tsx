import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import SubServices from "./SubServices";

function Services() {
  return (
    <Box
      bgImage={"/background.png"}
      bg={"#6D00D7"}
      color={"#fff"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    px={4}
      
      flexDirection={{base:"column"}} >
      <Heading as={"h3"} textAlign={"center"} my={"12"} fontWeight={"semibold"}>
        The Ultimate Platform to earn from Meet-ups, Content Creation, and Live
        Streaming
      </Heading>
      <Box mb={12}  gap={6} display={'flex'} flexDirection={{base:"column" , lg:'row' } }>
        <SubServices
          img="/lady.png"
          header="Media Content"
          paragragph="Excitement is building at Vibes Meet as we eagerly prepare to unveil our revolutionary Live streaming feature, a game-changer in the digital content world. Meticulously developed by our dedicated team, we are diligently fine-tuning and rigorously testing it to surpass expectations.
"
        />
        <SubServices
          img="/streamer.png"
          header="Livestream"
          paragragph="Vibes Meet is a revolutionary platform that combines creativity and financial empowerment for content creators. The Vibes Meet App is designed as an ecosystem to empower creators and enhance user satisfaction in the fast-paced world of content creation.
"
        />
        <SubServices
          img="/couples.png"
          header="Meetups"
          paragragph="Elevate Your Connections with Meetups Welcome to the next frontier of social connections - Vibes Meet App's groundbreaking Meetup feature. Our platform transcends conventional boundaries, offering a unique space where individuals can match, connect, and sponsor unforgettable meetups.
"
        />
      </Box>
    </Box>
  );
}

export default Services;
