import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    fonts: {
        heading: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    colors: {
        brand: {
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#2196f3",
            600: "#1e88e5",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1",
        },
        accent: {
            50: "#f3e5f5",
            100: "#e1bee7",
            200: "#ce93d8",
            300: "#ba68c8",
            400: "#ab47bc",
            500: "#9c27b0",
            600: "#8e24aa",
            700: "#7b1fa2",
            800: "#6a1b9a",
            900: "#4a148c",
        },
    },
    styles: {
        global: {
            body: {
                bg: "white",
                color: "gray.800",
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "600",
                borderRadius: "12px",
            },
            variants: {
                solid: {
                    bg: "brand.600",
                    color: "white",
                    _hover: {
                        bg: "brand.500",
                        transform: "translateY(-2px)",
                    },
                },
                outline: {
                    borderWidth: "2px",
                    _hover: {
                        transform: "translateY(-2px)",
                    },
                },
            },
        },
    },
});

export { theme };