"use client";
import Image from "next/image";
import React from "react";
import { bgGradient, bgClip, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Text
          bgGradient="linear(to-l, #3d569e, #FF0380)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          PRSM Solutions
        </Text>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}
