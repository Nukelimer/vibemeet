"use client";

import {
  Box,
  Button,
  CheckboxIcon,
  Container,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

import { CheckCircleIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

function WhyUs() {
  return (
    <Box>
      <Box my="12" color={"#fff"} px={6}>
        <Flex
          flexDirection={"column"}
          color={"#fff"}
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems={"center"}
          gap={6}>
          <Text
            as={"h3"}
            fontSize={"4xl"}
            color="transparent"
            backgroundClip="text"
            bgGradient=" linear-gradient(to right, #FF2973, #373DFF)">
            VibesMeet
          </Text>
          <Text>Where Safety and Earnings Meet</Text>

          <Button
            borderRadius="50"
            color={" linear-gradient(to right, #FF2973, #373DFF)"}
            border="1px"
            borderColor="transparent"
            bg="linear-gradient(#000013 0%, #000013 50%, #000013  100%) padding-box, 
            linear-gradient(to right, #FF2973, #373DFF) border-box"
            _hover={{
              background:
                "linear-gradient(to right, #FF2973, #373DFF) border-box",
            }}>
            {" "}
            Learn More
          </Button>
        </Flex>
      </Box>

      <Box
        color={"#fff"}
        display={{ lg: "flex" }}
        borderBottom={"1px solid white"}
        py={{ lg: 6 }}
        mb={{ lg: "6" }}
        justifyContent={{ lg: "space-around" }}>
        <Box w={{ lg: "50%" }}>
          <Text pb={3}> Unmatched Protection</Text>
          <UnorderedList>
            <ListItem>
              All Verified Users: Only those who pass our automated verification
              process can join, ensuring a safe and trusted community.
            </ListItem>

            <ListItem>
              AI and Human Creator Vetting: Dedicated creators go through an
              additional interview, guaranteeing high-quality content.
            </ListItem>
            <ListItem>
              100% Trusted Meet-ups: Our "Trusted Contacts Location Feature"
              keeps you safe while meeting new people.
            </ListItem>
          </UnorderedList>
        </Box>

        <Flex
          display={"flex"}
          justifyContent={{ lg: "space-evenly", base: "space-between" }}
          my={{ base: 6, lg: 0 }}
          w={{ lg: "50%" }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={{ base: "row", lg: "column-reverse" }}
            gap={4}>
            <Text>Vibes</Text>{" "}
            <CheckIcon
              bg={"#fff"}
              color={"green"}
              p={"2px"}
              borderRadius={"50%"}
            />
          </Box>{" "}
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={4}
            p={{ base: "4", lg: 0 }}
            justifyContent={"space-between"}
            flexDirection={{ base: "row", lg: "column-reverse" }}>
            <Text>Competitors</Text>{" "}
            <CloseIcon
              bg={"#fff"}
              color={"green"}
              p={{ base: "2px", lg: 0 }}
              borderRadius={"50%"}
            />
          </Box>
        </Flex>
      </Box>

      <Box
        color={"#fff"}
        display={{ lg: "flex" }}
        borderBottom={"1px solid white"}
        py={{ lg: 6 }}
        mb={{ lg: "6" }}
        justifyContent={{ lg: "space-around" }}>
        <Box w={{ lg: "50%" }}>
          {" "}
          <Text pb={3}> Empowering Creators</Text>
          <UnorderedList>
            <ListItem>
              Keep 90% of Your Earnings: Unlike other platforms, we believe
              creators deserve the majority of their income.
            </ListItem>

            <ListItem>
              Content Protection: VibesAI ensures content authenticity and
              prevents unauthorized use.
            </ListItem>
            <ListItem>
              Introducing Meet-up Reviews™: Share your honest feedback to help
              users find compatible matches.
            </ListItem>
          </UnorderedList>
        </Box>

        <Flex
         display={"flex"}
         justifyContent={{ lg: "space-evenly", base: "space-between" }}
         my={{ base: 6, lg: 0 }}
         w={{ lg: "50%" }}>
          <Box  display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={{ base: "row", lg: "column-reverse" }}
            gap={4}>
            <Text>Vibes</Text>{" "}
            <CheckIcon
              bg={"#fff"}
              color={"green"}
              p={"2px"}
              borderRadius={"50%"}
            />
          </Box>{" "}
          <Box display={"flex"}
            alignItems={"center"}
            gap={4}
            p={{ base: "4", lg: 0 }}
            justifyContent={"space-between"}
            flexDirection={{ base: "row", lg: "column-reverse" }}>
            <Text>Competitors</Text>{" "}
            <CloseIcon
              bg={"#fff"}
              color={"green"}
              p={{ base: "2px", lg: 0 }}
              borderRadius={"50%"}
            />
          </Box>
        </Flex>
      </Box>

      <Box  color={"#fff"}
        display={{ lg: "flex" }}
        borderBottom={"1px solid white"}
        py={{ lg: 6 }}
        mb={{ lg: "6" }}
        justifyContent={{ lg: "space-around" }}>
        <Box w={{ lg: "50%" }}>

        <Text pb={3}>Seamless Payments & Withdrawals</Text>
        <UnorderedList>
          <ListItem>
            Diverse Payment Options: Choose from credit/debit cards, PayPal,
            mobile money, and even cryptocurrencies to pay creators.
          </ListItem>

          <ListItem>
            Global Withdrawals: Access your earnings directly in your Bank
            account, Paypal or Mobile money, no matter where you are in the
            world.
          </ListItem>
        </UnorderedList>
        </Box>

        <Flex
           display={"flex"}
           justifyContent={{ lg: "space-evenly", base: "space-between" }}
           my={{ base: 6, lg: 0 }}
           w={{ lg: "50%" }}>
          <Box   display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={{ base: "row", lg: "column-reverse" }}
            gap={4}>
            <Text>Vibes</Text>{" "}
            <CheckIcon
               bg={"#fff"}
               color={"green"}
               p={"2px"}
               borderRadius={"50%"}
            />
          </Box>{" "}
          <Box  display={"flex"}
            alignItems={"center"}
            gap={4}
            p={{ base: "4", lg: 0 }}
            justifyContent={"space-between"}
            flexDirection={{ base: "row", lg: "column-reverse" }}>
            <Text>Competitors</Text>{" "}
            <CloseIcon
              bg={"#fff"}
              color={"green"}
              p={{ base: "2px", lg: 0 }}
              borderRadius={"50%"}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default WhyUs;
