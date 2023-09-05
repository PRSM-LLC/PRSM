"use client";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children, theme }) {
  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
