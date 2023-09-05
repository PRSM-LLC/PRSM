"use client";
import Image from "next/image";
import React from "react";
import {
  bgGradient,
  bgClip,
  Text,
  VStack,
  HStack,
  Button,
  ButtonGroup,
  Box,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <VStack mb={"250px"} mt={"200px"}>
        <Text
          bgGradient="linear(to-l, #3d569e, #FF0380)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          align="center"
        >
          <chakra.span color="#000000">Our </chakra.span>
          <chakra.span color="#B165FE">Mission. </chakra.span>
          <chakra.span color="#000000">Your </chakra.span>
          <chakra.span color="#139BFD">Success. </chakra.span>
        </Text>

        <Text
          bgGradient="linear(to-l, #B165FE, #139BDF)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          align="center"
        >
          <HStack>
            <chakra.span color="black">Let's get </chakra.span>
            <chakra.span> </chakra.span>
            <Typewriter
              options={{
                strings: ["Started.", "Now."],
                autoStart: true,
                loop: true,
              }}
            />
          </HStack>
        </Text>
        <Button colorScheme="gray" variant="solid" width="200px" mt={"50px"}>
          Learn More -{">"}
        </Button>
      </VStack>
      <Box
        bgGradient="linear(-25deg, #139BDF, #B165FE 80%)"
        w="100%"
        h={"1000px"}
        p={4}
        transform="skewY(-5deg)"
        mt={"100px"}
      ></Box>
      {/* <Link href="/about">About</Link> */}
    </>
  );
}
