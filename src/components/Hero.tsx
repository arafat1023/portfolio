import { FC } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    HStack,
    VStack,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
import { FiDownload, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const Hero: FC = () => {
    const gradientBg = useColorModeValue(
        "linear(to-br, blue.50, purple.50, pink.50)",
        "linear(to-br, gray.900, blue.900, purple.900)"
    );
    const imageBorderColor = useColorModeValue("white", "gray.900");

    return (
        <Box
            id="home"
            minH="100vh"
            display="flex"
            alignItems="center"
            bgGradient={gradientBg}
            position="relative"
            overflow="hidden"
        >
            {/* Animated background elements */}
            <Box
                position="absolute"
                top="10%"
                right="10%"
                w="300px"
                h="300px"
                borderRadius="full"
                bg="brand.400"
                opacity={0.1}
                filter="blur(60px)"
                animation="float 6s ease-in-out infinite"
            />
            <Box
                position="absolute"
                bottom="10%"
                left="10%"
                w="200px"
                h="200px"
                borderRadius="full"
                bg="accent.400"
                opacity={0.1}
                filter="blur(60px)"
                animation="float 8s ease-in-out infinite reverse"
            />

            <Container maxW="7xl" py={20}>
                <Box
                    display={{ base: "block", lg: "grid" }}
                    gridTemplateColumns="1fr 1fr"
                    gap={16}
                    alignItems="center"
                >
                    {/* Text Content */}
                    <VStack align="flex-start" spacing={8}>
                        <MotionBox
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Text
                                fontSize="lg"
                                fontWeight="600"
                                color="brand.400"
                                mb={4}
                            >
                                Hi, I'm
                            </Text>
                            <MotionHeading
                                as="h1"
                                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                                fontWeight="800"
                                lineHeight="1.1"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Arafat Hossain
                            </MotionHeading>
                            <MotionText
                                fontSize={{ base: "xl", md: "2xl" }}
                                color="gray.500"
                                mt={4}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Text as="span" bgGradient="linear(to-r, brand.400, accent.400)" bgClip="text">
                                    Software Engineer
                                </Text>
                                {" "}
                                passionate about creating amazing web experiences
                            </MotionText>
                        </MotionBox>

                        <MotionText
                            fontSize="lg"
                            color="gray.600"
                            maxW="xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            I'm a full-stack developer based in Dhaka, Bangladesh, specializing in
                            modern web technologies like React, Vue.js, and Node.js. I love building
                            scalable applications and learning new technologies.
                        </MotionText>

                        <MotionBox
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <HStack spacing={4} flexWrap="wrap">
                                <Button
                                    size="lg"
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
                                {/*<Button*/}
                                {/*    size="lg"*/}
                                {/*    variant="outline"*/}
                                {/*    leftIcon={<FiDownload />}*/}
                                {/*    as="a"*/}
                                {/*    href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1s3G7PiPHlK3Ett_W-WUU01GQnsggiLrWZB3IiMAgBEk/export?format=pdf"*/}
                                {/*    target="_blank"*/}
                                {/*>*/}
                                {/*    Download CV*/}
                                {/*</Button>*/}
                            </HStack>
                        </MotionBox>
                    </VStack>

                    {/* Profile Image */}
                    <MotionBox
                        display={{ base: "none", lg: "block" }}
                        textAlign="center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Box
                            position="relative"
                            display="inline-block"
                            _before={{
                                content: '""',
                                position: "absolute",
                                top: "-20px",
                                left: "-20px",
                                right: "-20px",
                                bottom: "-20px",
                                background: "linear-gradient(45deg, brand.400, accent.400)",
                                borderRadius: "full",
                                zIndex: -1,
                                animation: "rotate 10s linear infinite",
                            }}
                        >
                            <Image
                                src={`${process.env.PUBLIC_URL}/assets/arafat2.jpg`}
                                alt="Arafat Hossain"
                                borderRadius="full"
                                w="400px"
                                h="400px"
                                objectFit="cover"
                                border="8px solid"
                                borderColor={imageBorderColor}
                                shadow="2xl"
                            />
                        </Box>
                    </MotionBox>
                </Box>
            </Container>

            {/* Global CSS for animations */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </Box>
    );
};