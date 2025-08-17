import { ThemeConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { PrimaryColors, PrimaryDarkColors, GlassColors, GradientColors, AccentColors } from "theme/colors/Colors";
import { components } from "theme/component-styles/ComponentStyles";

const config: ThemeConfig = {
    cssVarPrefix: "hp",
    initialColorMode: "dark",
    useSystemColorMode: false,
};

// Modern Typography Stack
const fonts = {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    heading: "'Cal Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
};

const colors = {
    primary: {
        ...PrimaryColors,
    },
    gray: {
        ...PrimaryDarkColors,
    },
    glass: {
        ...GlassColors,
    },
    gradient: {
        ...GradientColors,
    },
    accent: {
        ...AccentColors,
    },
};

// Glassmorphism Shadows
const shadows = {
    glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    glassInset: "inset 0 1px 0 0 rgba(255, 255, 255, 0.5)",
    glow: "0 0 20px rgba(139, 92, 246, 0.3)",
    glowHover: "0 0 30px rgba(139, 92, 246, 0.5)",
    cardHover: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
};

// Modern Spacing Scale
const space = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
};

export const bgLight = "gray.50";
export const bgDark = "gray.900";
export const NavbarHeight = "80px";

export const theme = extendTheme(
    {
        config,
        colors,
        fonts,
        shadows,
        space,
        components,
        styles: {
            global: (props: any) => ({
                body: {
                    bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
                    color: props.colorMode === "dark" ? "gray.100" : "gray.900",
                },
            }),
        },
    },
    withDefaultColorScheme({ colorScheme: "primary" }),
);
