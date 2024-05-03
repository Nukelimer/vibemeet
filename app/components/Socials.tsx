import {
  Box,
  Container,
  Flex,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Socials() {
  const company = [
    "Company",
    " Home",
    "About us",
    "FAQ",
    "Returns & Refunds",
    "Help & Support",
    "Security",
  ];

  const product = [" Product", "Media Content", "Livestream", "Meetup"];
  return (
    <Box color={"white"} display={{ lg: "flex" }} justifyContent={{lg: 'space-around'}} borderBottom={"1px solid white"}>
      <Box mr={{lg:12}}>
        <Image src="/logo.png" alt="logo" w={100} pb={8} />
        <Text fontSize={"small"} pb={8} >
          Vibes Meet is your secure hub for genuine connections. Sign up now and
          experience authenticity like never before!
        </Text>

        <Flex gap={6}>
          <Image src="/x.png" alt="social" h={"20px"} w={"20px"} />
          <Image src="/facebook.png" alt="social" h={"20px"} w={"20px"} />
          <Image src="/IG.png" alt="social" h={"20px"} w={"20px"} />
        </Flex>
      </Box>
      <Box pb={16}  color={"white"}>
        <Flex>
          <OrderedList listStyleType={"none"}>
            {company.map((list) => {
              return (
                <ListItem key={list} color={"white"} p={2} fontSize={"smaller"}>
                  {list}
                </ListItem>
              );
            })}
          </OrderedList>

          <OrderedList listStyleType={"none"} fontSize={"small"}>
            {product.map((list) => {
              return (
                <ListItem key={list} color={"white"} p={2} fontSize={"smaller"}>
                  {list}
                </ListItem>
              );
            })}
          </OrderedList>
        </Flex>
      </Box>
          <Box my={6} display={{ lg:'flex'}} flexDir={{lg:'column'}} justifyContent={{lg: 'flex-start'}} alignItems={{lg: 'flex-end'}}>
        <Text fontSize={"small"} alignSelf={{lg:'flex-start'}} ml={{lg: 24}}>Get the app.</Text>

        <Flex justifyContent={{ base: "space-between", lg: "flex-end" }} mt={4} >
          <Image src="/apple.png" w={{ base: "45%", lg: "35%" }} mr={{lg:6}} />{" "}
          <Image src="/apple.png" w={{ base: "45%", lg: "35%" }} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Socials;
