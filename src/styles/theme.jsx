"use client";

import { extendTheme } from "@chakra-ui/react";
import { bgGradient } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#2c3e89",
    secondary: "#41a2b9",
    bgGradient: "linear(to-l, #7928CA, #FF0080)",
    bgColor: "#41308b",
    primaryButton: {
      500: "#779bc1",
      600: "#1469F0",
    },
    secondaryButton: {
      500: "#333333",
      600: "#2A2A2A",
    },
    footerBg: "#0D132F",
    inputBg: "#0A0F24",
    buttonBg: {
      500: "#4559E9",
      600: "#3244CA",
    },
    joinTeamBtn: {
      500: "#4A7EAE",
      600: "#4A7EAE",
    },
  },

  styles: {
    global: () => ({
      body: {
        color: "black",
        backgroundColor: "bgColor",
        padding: 0,
        margin: 0,
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        variant: "outline",
        colorScheme: "blue",
        fontWeight: "light",
      },
      variants: {
        outline: {
          _hover: {
            bg: "blue.500 !important",
            color: "whiteAlpha.900",
            borderColor: "transparent",
          },
        },
      },
    },
    Tooltip: {
      baseStyle: {
        bg: "blackAlpha.900",
        color: "white",
        fontSize: "md",
        px: 2,
        py: 1,
        borderRadius: "md",
        boxShadow: "lg",
      },
    },
  },
});

export default theme;
