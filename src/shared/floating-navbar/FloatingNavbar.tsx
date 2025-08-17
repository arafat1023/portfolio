import { FC, useState, useEffect } from "react";
import { 
    Box, 
    HStack, 
    IconButton, 
    useColorMode, 
    useColorModeValue,
    Tooltip,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    VStack,
    useDisclosure,
    Button
} from "@chakra-ui/react";
import { FiSun, FiMoon, FiMenu, FiHome, FiUser, FiBriefcase, FiMail } from "react-icons/fi";
import { GlassCard } from "shared/glass-card/GlassCard";
import { LogoType } from "shared/navbar/logo-type/LogoType";

interface NavItem {
    label: string;
    href: string;
    icon: any;
}

const navItems: NavItem[] = [
    { label: "Home", href: "#home", icon: FiHome },
    { label: "About", href: "#about", icon: FiUser },
    { label: "Projects", href: "#projects", icon: FiBriefcase },
    { label: "Contact", href: "#contact", icon: FiMail },
];

export const FloatingNavbar: FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrolled, setScrolled] = useState(false);

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

    const navBg = useColorModeValue(
        "rgba(255, 255, 255, 0.8)",
        "rgba(0, 0, 0, 0.4)"
    );

    return (
        <>
            <Box
                position="fixed"
                top={4}
                left="50%"
                transform="translateX(-50%)"
                zIndex={1000}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                opacity={scrolled ? 0.95 : 1}
            >
                <GlassCard
                    opacity={scrolled ? 0.4 : 0.25}
                    blur={scrolled ? 15 : 10}
                    px={6}
                    py={3}
                >
                    <HStack spacing={6} align="center">
                        <LogoType text={{ mobile: "AH", desktop: "Arafat Hossain" }} />
                        
                        {/* Desktop Navigation */}
                        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
                            {navItems.map((item) => (
                                <Tooltip key={item.label} label={item.label} placement="bottom">
                                    <IconButton
                                        aria-label={item.label}
                                        icon={<item.icon />}
                                        variant="ghost"
                                        size="sm"
                                        color="current"
                                        _hover={{
                                            bg: "rgba(255, 255, 255, 0.2)",
                                            transform: "translateY(-2px)",
                                        }}
                                        onClick={() => scrollToSection(item.href)}
                                        transition="all 0.2s"
                                    />
                                </Tooltip>
                            ))}
                        </HStack>

                        {/* Color Mode Toggle */}
                        <Tooltip label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}>
                            <IconButton
                                aria-label="Toggle color mode"
                                icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
                                variant="ghost"
                                size="sm"
                                onClick={toggleColorMode}
                                _hover={{
                                    bg: "rgba(255, 255, 255, 0.2)",
                                    transform: "rotate(180deg)",
                                }}
                                transition="all 0.3s"
                            />
                        </Tooltip>

                        {/* Mobile Menu Button */}
                        <IconButton
                            aria-label="Open menu"
                            icon={<FiMenu />}
                            variant="ghost"
                            size="sm"
                            display={{ base: "flex", md: "none" }}
                            onClick={onOpen}
                            _hover={{
                                bg: "rgba(255, 255, 255, 0.2)",
                            }}
                        />
                    </HStack>
                </GlassCard>
            </Box>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay backdropFilter="blur(4px)" />
                <DrawerContent
                    bg={navBg}
                    backdropFilter="blur(20px)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.18)"
                >
                    <DrawerCloseButton />
                    <DrawerBody pt={16}>
                        <VStack spacing={6} align="stretch">
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    leftIcon={<item.icon />}
                                    variant="ghost"
                                    justifyContent="flex-start"
                                    size="lg"
                                    onClick={() => scrollToSection(item.href)}
                                    _hover={{
                                        bg: "rgba(255, 255, 255, 0.1)",
                                        transform: "translateX(4px)",
                                    }}
                                    transition="all 0.2s"
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};