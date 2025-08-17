import { FC } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    VStack,
    HStack,
    Icon,
    Button,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiLinkedin,
    FiGithub,
    FiExternalLink,
} from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const contactInfo = [
    {
        icon: FiMail,
        label: "Email",
        value: "arafathossain847@gmail.com",
        href: "mailto:arafathossain847@gmail.com",
    },
    {
        icon: FiMapPin,
        label: "Location",
        value: "Dhaka, Bangladesh",
        href: "https://maps.google.com/?q=Dhaka,Bangladesh",
    },
];

const socialLinks = [
    {
        icon: FiLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/arafat-hossain-dev/",
        color: "#0077B5",
    },
    {
        icon: FiGithub,
        label: "GitHub",
        href: "https://github.com/arafat1023",
        color: "#333",
    },
];

export const Contact: FC = () => {
    const bgColor = useColorModeValue("white", "gray.900");
    const cardBg = useColorModeValue("gray.50", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");

    return (
        <Box id="contact" py={20} bg={bgColor}>
            <Container maxW="7xl">
                <VStack spacing={16}>
                    {/* Section Header */}
                    <MotionBox
                        textAlign="center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                            fontWeight="800"
                            mb={4}
                        >
                            Get{" "}
                            <Text as="span" bgGradient="linear(to-r, brand.400, accent.400)" bgClip="text">
                                In Touch
                            </Text>
                        </Heading>
                        <Text fontSize="xl" color="gray.500" maxW="2xl">
                            Let's work together to bring your ideas to life
                        </Text>
                    </MotionBox>

                    {/* Contact Content */}
                    <Grid
                        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                        gap={16}
                        w="full"
                    >
                        {/* Contact Information */}
                        <MotionBox
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <VStack align="flex-start" spacing={8}>
                                <VStack align="flex-start" spacing={4}>
                                    <Heading as="h3" size="xl" fontWeight="700">
                                        Let's Connect
                                    </Heading>
                                    <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                        I'm always open to discussing new opportunities,
                                        interesting projects, or just having a chat about
                                        technology and development.
                                    </Text>
                                </VStack>

                                {/* Contact Details */}
                                <VStack spacing={6} w="full">
                                    {contactInfo.map((info, index) => (
                                        <MotionBox
                                            key={info.label}
                                            w="full"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <Link
                                                href={info.href}
                                                isExternal
                                                _hover={{ textDecoration: "none" }}
                                            >
                                                <HStack
                                                    p={4}
                                                    bg={cardBg}
                                                    borderRadius="xl"
                                                    border="1px solid"
                                                    borderColor={borderColor}
                                                    spacing={4}
                                                    _hover={{
                                                        borderColor: "brand.400",
                                                        transform: "translateY(-2px)",
                                                        shadow: "lg",
                                                    }}
                                                    transition="all 0.3s"
                                                >
                                                    <Box
                                                        p={3}
                                                        bg="brand.400"
                                                        borderRadius="lg"
                                                        color="white"
                                                    >
                                                        <Icon as={info.icon} w={5} h={5} />
                                                    </Box>
                                                    <VStack align="flex-start" spacing={1}>
                                                        <Text fontSize="sm" color="gray.500" fontWeight="600">
                                                            {info.label}
                                                        </Text>
                                                        <Text fontSize="md" fontWeight="600">
                                                            {info.value}
                                                        </Text>
                                                    </VStack>
                                                    <Icon
                                                        as={FiExternalLink}
                                                        w={4}
                                                        h={4}
                                                        color="gray.400"
                                                        ml="auto"
                                                    />
                                                </HStack>
                                            </Link>
                                        </MotionBox>
                                    ))}
                                </VStack>

                                {/* Social Links */}
                                <VStack align="flex-start" spacing={4} w="full">
                                    <Heading as="h4" size="md" fontWeight="700">
                                        Follow Me
                                    </Heading>
                                    <HStack spacing={4}>
                                        {socialLinks.map((social, index) => (
                                            <MotionBox
                                                key={social.label}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Link href={social.href} isExternal>
                                                    <Button
                                                        p={3}
                                                        w={12}
                                                        h={12}
                                                        borderRadius="xl"
                                                        bg={cardBg}
                                                        border="1px solid"
                                                        borderColor={borderColor}
                                                        color="gray.600"
                                                        _hover={{
                                                            borderColor: "brand.400",
                                                            bg: "brand.400",
                                                            color: "white",
                                                            transform: "translateY(-2px)",
                                                        }}
                                                        transition="all 0.3s"
                                                    >
                                                        <Icon as={social.icon} w={6} h={6} />
                                                    </Button>
                                                </Link>
                                            </MotionBox>
                                        ))}
                                    </HStack>
                                </VStack>
                            </VStack>
                        </MotionBox>

                        {/* Call to Action */}
                        <MotionBox
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <VStack
                                h="full"
                                justify="center"
                                align="center"
                                bg={cardBg}
                                borderRadius="2xl"
                                p={12}
                                spacing={8}
                                border="1px solid"
                                borderColor={borderColor}
                                textAlign="center"
                            >
                                <VStack spacing={6}>
                                    <Box
                                        w={20}
                                        h={20}
                                        bg="brand.400"
                                        borderRadius="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        animation="pulse 2s infinite"
                                    >
                                        <Icon as={FiMail} w={10} h={10} color="white" />
                                    </Box>
                                    <VStack spacing={4}>
                                        <Heading as="h3" size="xl" fontWeight="700">
                                            Ready to Start a Project?
                                        </Heading>
                                        <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                            I'm available for freelance work and open to discussing
                                            your next project. Let's create something amazing together!
                                        </Text>
                                    </VStack>
                                </VStack>

                                <VStack spacing={4} w="full">
                                    <Button
                                        size="lg"
                                        leftIcon={<FiMail />}
                                        w="full"
                                        maxW="300px"
                                        as="a"
                                        href="mailto:arafathossain.contact@gmail.com"
                                        _hover={{
                                            transform: "translateY(-2px)",
                                            shadow: "lg",
                                        }}
                                        transition="all 0.3s"
                                    >
                                        Send Email
                                    </Button>
                                    <Text fontSize="sm" color="gray.500">
                                        Usually responds within 24 hours
                                    </Text>
                                </VStack>
                            </VStack>
                        </MotionBox>
                    </Grid>

                </VStack>
            </Container>

            {/* Global CSS for animations */}
            <style>{`
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.8;
                    }
                }
            `}</style>
        </Box>
    );
};