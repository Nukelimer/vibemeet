import { Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Benefits from "./Benefits";
import Map from "./Map";
import WhyUs from "./WhyUs";
import Referral from "./Referral";
import JoinNow from "./JoinNow";
import Socials from "./Socials";
import Footer from "./Footer";

function App() {
  return (
    <Flex flexDir="column" w={"96vw"} mx={'auto'} justifyContent={'center'}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Map />
      <WhyUs />
      <Referral />
      <JoinNow />
      <Socials />
      <Footer/>
    </Flex>
  );
}

export default App;
