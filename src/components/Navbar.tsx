import { FC, useState, useEffect } from "react";
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    HStack,
    Button,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    VStack,
    IconButton,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "Personal Projects", href: "#personal-projects" },
    { label: "Contact", href: "#contact" },
];

export const Navbar: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrolled, setScrolled] = useState(false);

    const bg = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
    const borderColor = useColorModeValue("gray.200", "gray.700");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        onClose();
    };

    return (
        <MotionBox
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Box
                bg={scrolled ? bg : "transparent"}
                backdropFilter={scrolled ? "blur(10px)" : "none"}
                borderBottom={scrolled ? "1px solid" : "none"}
                borderColor={borderColor}
                transition="all 0.3s"
                px={6}
                py={4}
            >
                <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
                    {/* Logo */}
                    <Text
                        fontSize="2xl"
                        fontWeight="800"
                        bgGradient="linear(to-r, brand.400, accent.400)"
                        bgClip="text"
                        cursor="pointer"
                        onClick={() => scrollToSection("#home")}
                    >
                        Arafat
                    </Text>

                    {/* Desktop Navigation */}
                    <HStack spacing={8} display={{ base: "none", md: "flex" }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                variant="ghost"
                                onClick={() => scrollToSection(item.href)}
                                _hover={{
                                    color: "brand.400",
                                    transform: "translateY(-2px)",
                                }}
                                transition="all 0.2s"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </HStack>

                    {/* Right side */}
                    <HStack spacing={4}>
                        <IconButton
                            aria-label="Open menu"
                            icon={<FiMenu />}
                            variant="ghost"
                            display={{ base: "flex", md: "none" }}
                            onClick={onOpen}
                        />
                    </HStack>
                </Flex>
            </Box>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody pt={16}>
                        <VStack spacing={6} align="stretch">
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    size="lg"
                                    onClick={() => scrollToSection(item.href)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </MotionBox>
    );
};