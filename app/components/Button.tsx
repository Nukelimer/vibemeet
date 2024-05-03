import { Button, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  color: string;
  text: string;
    size: string;
    bg: string;
  border: string;
  width: string
  colorScheme: string
}
function Buttons({ color, text, bg, size, border, width, colorScheme }: Props) {
  return (
    <Button w={width} bg={bg} colorScheme={colorScheme} color={color} p={size} borderRadius={50} bgGradient={bg} border={border}>
      <Text fontWeight={'normal'}>{text}</Text>
    </Button>
  );
}

export default Buttons;
