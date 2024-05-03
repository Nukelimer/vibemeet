import { Box, Container } from "@chakra-ui/react";

import App from "./components/App";

export default function Home() {
  return (
    <Container as={ 'main'} bg='#000013' w={'100vw'} maxW={'100vw'} p={0}>
     <App/>
    </Container>
  );
}
