import { FC } from "react";
import { 
    Box, 
    Text, 
    Heading, 
    VStack, 
    HStack, 
    Image, 
    IconButton,
    useColorModeValue,
    Grid,
    GridItem,
    Button,
    Badge,
    // Flex
} from "@chakra-ui/react";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

import { GlassCard } from "shared/glass-card/GlassCard";
import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);
    
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const headingColor = useColorModeValue("gray.900", "white");
    const subHeadingColor = useColorModeValue("gray.600", "gray.300");
    const accentGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    
    return (
        <Box minH="100vh" display="flex" alignItems="center" position="relative">
            <Grid
                templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
                gap={{ base: 8, lg: 16 }}
                w="full"
                alignItems="center"
            >
                {/* Text Content */}
                <GridItem>
                    <VStack align="flex-start" spacing={8} maxW="xl">
                        {/* Greeting Badge */}
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Badge
                                px={4}
                                py={2}
                                borderRadius="full"
                                background={accentGradient}
                                color="white"
                                fontSize="sm"
                                fontWeight="600"
                                textTransform="none"
                            >
                                👋 Welcome to my portfolio
                            </Badge>
                        </MotionBox>

                        {/* Main Heading */}
                        <VStack align="flex-start" spacing={4}>
                            <MotionHeading
                                as="h1"
                                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                                fontWeight="800"
                                lineHeight="0.9"
                                color={headingColor}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Hi, I'm{" "}
                                <Box
                                    as="span"
                                    background={accentGradient}
                                    backgroundClip="text"
                                    color="transparent"
                                >
                                    Arafat Hossain
                                </Box>
                            </MotionHeading>
                            
                            <MotionText
                                fontSize={{ base: "xl", md: "2xl" }}
                                color={subHeadingColor}
                                fontWeight="600"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Software Engineer & Problem Solver
                            </MotionText>
                        </VStack>

                        {/* Description */}
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Content 
                                fontSize={{ base: "lg", md: "xl" }}
                                color={subHeadingColor}
                                lineHeight="1.6"
                            >
                                {content.landing}
                            </Content>
                        </MotionBox>

                        {/* CTA Buttons */}
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            w="full"
                        >
                            <HStack spacing={4} flexWrap="wrap">
                                <Button
                                    size="lg"
                                    background={accentGradient}
                                    color="white"
                                    _hover={{
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                    }}
                                    transition="all 0.3s"
                                    leftIcon={<FiMail />}
                                    onClick={() => {
                                        const contactSection = document.getElementById("contact");
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                >
                                    Get In Touch
                                </Button>
                                
                                <Button
                                    size="lg"
                                    variant="outline"
                                    borderWidth="2px"
                                    borderColor={useColorModeValue("gray.300", "gray.600")}
                                    _hover={{
                                        transform: "translateY(-2px)",
                                        borderColor: "accent.purple",
                                        color: "accent.purple",
                                    }}
                                    transition="all 0.3s"
                                    leftIcon={<FiDownload />}
                                    as="a"
                                    href={configs.common.resume}
                                    target="_blank"
                                >
                                    Download CV
                                </Button>
                            </HStack>
                        </MotionBox>

                        {/* Social Links */}
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <Socials delay={0} />
                        </MotionBox>
                    </VStack>
                </GridItem>

                {/* Profile Image */}
                <GridItem display={{ base: "none", lg: "block" }}>
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        position="relative"
                    >
                        <GlassCard
                            isHoverable
                            p={8}
                            position="relative"
                            _hover={{
                                transform: "rotate(2deg) scale(1.02)",
                            }}
                            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                        >
                            <Box
                                position="relative"
                                _before={{
                                    content: '""',
                                    position: "absolute",
                                    top: "-4px",
                                    left: "-4px",
                                    right: "-4px",
                                    bottom: "-4px",
                                    background: accentGradient,
                                    borderRadius: "2xl",
                                    zIndex: -1,
                                    opacity: 0.8,
                                }}
                            >
                                <Image
                                    src={configs.landing.jpg}
                                    alt="Arafat Hossain"
                                    borderRadius="xl"
                                    w="full"
                                    maxW="400px"
                                    objectFit="cover"
                                    // aspectRatio={1}
                                />
                            </Box>
                        </GlassCard>
                        
                        {/* Floating Elements */}
                        <Box
                            position="absolute"
                            top="10%"
                            right="-10%"
                            w="20px"
                            h="20px"
                            borderRadius="full"
                            bg="accent.neon"
                            opacity={0.8}
                            animation="float 3s ease-in-out infinite"
                        />
                        <Box
                            position="absolute"
                            bottom="20%"
                            left="-5%"
                            w="16px"
                            h="16px"
                            borderRadius="full"
                            bg="accent.electric"
                            opacity={0.6}
                            animation="float 4s ease-in-out infinite reverse"
                        />
                    </MotionBox>
                </GridItem>
            </Grid>

            {/* Scroll Indicator */}
            <MotionBox
                position="absolute"
                bottom={8}
                left="50%"
                transform="translateX(-50%)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <IconButton
                    aria-label="Scroll to projects"
                    icon={<FiArrowDown />}
                    variant="ghost"
                    size="lg"
                    onClick={scrollToProjects}
                    _hover={{
                        transform: "translateY(4px)",
                        color: "accent.purple",
                    }}
                    transition="all 0.3s"
                    animation="bounce 2s infinite"
                />
            </MotionBox>

            {/* Keyframes for animations */}
            {/* CSS animations handled by Chakra UI sx prop in components */}
        </Box>
    );
};
