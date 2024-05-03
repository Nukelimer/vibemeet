import {
  Box,
  Container,
  Flex,
  List,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Footer() {


  const copyright = ["Terms", "Privacy", "Cookies"];
  return (
    <Box>
     

      <Box color={"white"} pt={4} display={{ lg: "flex" }} justifyContent={{lg: 'space-between'}}>
        <OrderedList
          listStyleType={"none"}
          fontSize={"small"}
          display={"flex"}
                  justifyContent={{ base: "space-around", lg: 'normal' }}
                 
          pb={8}
          w={"50%"}>
          {copyright.map((list) => {
            return (
              <ListItem fontSize={{base: "smaller", lg: 'small'}} key={list}  px={{lg:4}}>
                {list}
              </ListItem>
            );
          })}
        </OrderedList>
        <Text pb={12}> © 2024 Zerotech Agency LTD. All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default Footer;
