import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { theme } from "./theme/theme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import "./App.scss";

const MotionBox = motion.div;

export const App: FC = () => {
    return (
        <ChakraProvider theme={theme}>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ minHeight: "100vh" }}
            >
                <Navbar />
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
            </MotionBox>
        </ChakraProvider>
    );
};