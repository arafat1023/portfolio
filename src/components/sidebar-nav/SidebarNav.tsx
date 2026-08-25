import { FC, useState } from "react";
import { 
    Box, 
    VStack, 
    Text, 
    IconButton,
    useColorModeValue,
    Tooltip,
    useColorMode,
    Badge
} from "@chakra-ui/react";
import { 
    FiHome, 
    FiUser, 
    FiBriefcase, 
    FiMail, 
    FiSun, 
    FiMoon,
    FiGithub,
    FiLinkedin,
    FiDownload
} from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface NavItem {
    id: string;
    label: string;
    icon: any;
    section: string;
}

const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: FiHome, section: "#home" },
    { id: "about", label: "About", icon: FiUser, section: "#about" },
    { id: "projects", label: "Projects", icon: FiBriefcase, section: "#projects" },
    { id: "contact", label: "Contact", icon: FiMail, section: "#contact" },
];

export const SidebarNav: FC = () => {
    const [activeSection, setActiveSection] = useState("home");
    const { colorMode, toggleColorMode } = useColorMode();
    
    const bgColor = useColorModeValue("rgba(255, 255, 255, 0.95)", "rgba(0, 0, 0, 0.95)");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const activeBg = useColorModeValue("blue.50", "blue.900");
    const activeColor = useColorModeValue("blue.600", "blue.300");

    const scrollToSection = (section: string, id: string) => {
        setActiveSection(id);
        const element = document.querySelector(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <MotionBox
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            position="fixed"
            left={4}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1000}
            bg={bgColor}
            backdropFilter="blur(10px)"
            borderRadius="2xl"
            border="1px solid"
            borderColor={borderColor}
            p={4}
            boxShadow="xl"
        >
            <VStack spacing={6}>
                {/* Logo/Brand */}
                <Box textAlign="center">
                    <Text 
                        fontSize="xl" 
                        fontWeight="bold" 
                        bgGradient="linear(to-r, blue.400, purple.500)"
                        bgClip="text"
                    >
                        AH
                    </Text>
                    <Badge 
                        size="sm" 
                        colorScheme="green" 
                        variant="subtle"
                        mt={1}
                    >
                        Online
                    </Badge>
                </Box>

                {/* Navigation Items */}
                <VStack spacing={2}>
                    {navItems.map((item) => (
                        <Tooltip 
                            key={item.id} 
                            label={item.label} 
                            placement="right"
                            hasArrow
                        >
                            <IconButton
                                aria-label={item.label}
                                icon={<item.icon />}
                                size="md"
                                variant="ghost"
                                borderRadius="xl"
                                bg={activeSection === item.id ? activeBg : "transparent"}
                                color={activeSection === item.id ? activeColor : "current"}
                                _hover={{
                                    bg: activeBg,
                                    color: activeColor,
                                    transform: "scale(1.1)",
                                }}
                                transition="all 0.2s"
                                onClick={() => scrollToSection(item.section, item.id)}
                            />
                        </Tooltip>
                    ))}
                </VStack>

                {/* Divider */}
                <Box w="full" h="1px" bg={borderColor} />

                {/* Social Links */}
                <VStack spacing={2}>
                    <Tooltip label="GitHub" placement="right" hasArrow>
                        <IconButton
                            aria-label="GitHub"
                            icon={<FiGithub />}
                            size="sm"
                            variant="ghost"
                            borderRadius="xl"
                            _hover={{
                                bg: activeBg,
                                transform: "scale(1.1)",
                            }}
                            onClick={() => window.open("https://github.com/arafat1023", "_blank")}
                        />
                    </Tooltip>
                    
                    <Tooltip label="LinkedIn" placement="right" hasArrow>
                        <IconButton
                            aria-label="LinkedIn"
                            icon={<FiLinkedin />}
                            size="sm"
                            variant="ghost"
                            borderRadius="xl"
                            _hover={{
                                bg: activeBg,
                                transform: "scale(1.1)",
                            }}
                            onClick={() => window.open("https://linkedin.com/in/arafat-hossain-dev", "_blank")}
                        />
                    </Tooltip>
                    
                    <Tooltip label="Download CV" placement="right" hasArrow>
                        <IconButton
                            aria-label="Download CV"
                            icon={<FiDownload />}
                            size="sm"
                            variant="ghost"
                            borderRadius="xl"
                            _hover={{
                                bg: activeBg,
                                transform: "scale(1.1)",
                            }}
                            onClick={() => window.open("https://docs.google.com/viewer?url=https://docs.google.com/document/d/1s3G7PiPHlK3Ett_W-WUU01GQnsggiLrWZB3IiMAgBEk/export?format=pdf", "_blank")}
                        />
                    </Tooltip>
                </VStack>

                {/* Color Mode Toggle */}
                <Tooltip label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} placement="right" hasArrow>
                    <IconButton
                        aria-label="Toggle color mode"
                        icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
                        size="sm"
                        variant="ghost"
                        borderRadius="xl"
                        _hover={{
                            bg: activeBg,
                            transform: "rotate(180deg) scale(1.1)",
                        }}
                        transition="all 0.3s"
                        onClick={toggleColorMode}
                    />
                </Tooltip>
            </VStack>
        </MotionBox>
    );
};