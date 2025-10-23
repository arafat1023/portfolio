import { FC } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    GridItem,
    VStack,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";
import { FiCode, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const stats = [
    { icon: FiCode, label: "Projects Completed", value: "20+" },
    { icon: FiUsers, label: "Happy Clients", value: "15+" },
    { icon: FiTrendingUp, label: "Years Experience", value: "5+" },
];

export const About: FC = () => {
    const bgColor = useColorModeValue("gray.50", "gray.800");
    const cardBg = useColorModeValue("white", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Box id="about" py={20} bg={bgColor}>
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
                            About{" "}
                            <Text as="span" bgGradient="linear(to-r, brand.400, accent.400)" bgClip="text">
                                Me
                            </Text>
                        </Heading>
                        <Text fontSize="xl" color="gray.500" maxW="2xl">
                            Experienced software engineer with 5+ years of expertise in building scalable web applications
                        </Text>
                    </MotionBox>

                    {/* About Content */}
                    <MotionGrid
                        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                        gap={16}
                        w="full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <GridItem>
                            <VStack align="flex-start" spacing={6}>
                                <Heading as="h3" size="xl" fontWeight="700">
                                    My Journey
                                </Heading>
                                <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                    I'm a Software Engineer at{" "}
                                    <Text as="span" color="brand.400" fontWeight="600">
                                        Nerddevs
                                    </Text>{" "}
                                    based in Dhaka, Bangladesh. I graduated from{" "}
                                    <Text as="span" color="brand.400" fontWeight="600">
                                        Brac University
                                    </Text>{" "}
                                    with a BSC in Computer Science and Engineering.
                                </Text>
                                <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                    With 5+ years of expertise in building scalable web applications, I have a strong track record of{" "}
                                    <Text as="span" color="brand.400" fontWeight="600">
                                        leading feature implementation
                                    </Text>{" "}
                                    and{" "}
                                    <Text as="span" color="brand.400" fontWeight="600">
                                        optimizing application performance
                                    </Text>.
                                    I'm passionate about creating efficient solutions across frontend, backend, and database development.
                                </Text>

                                <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                    When I'm not coding, I love watching football ⚽, reading books,
                                    and exploring new neighborhoods through food.
                                </Text>
                            </VStack>
                        </GridItem>

                        <GridItem>
                            <VStack spacing={6}>
                                <Heading as="h3" size="xl" fontWeight="700" alignSelf="flex-start">
                                    Key Stats
                                </Heading>
                                <Grid templateColumns="repeat(2, 1fr)" gap={6} w="full">
                                    {stats.map((stat, index) => (
                                        <MotionBox
                                            key={stat.label}
                                            bg={cardBg}
                                            p={6}
                                            borderRadius="xl"
                                            textAlign="center"
                                            boxShadow="md"
                                            border="1px solid"
                                            borderColor={borderColor}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <VStack spacing={3}>
                                                <Icon
                                                    as={stat.icon}
                                                    w={8}
                                                    h={8}
                                                    color="brand.400"
                                                />
                                                <Text
                                                    fontSize="2xl"
                                                    fontWeight="800"
                                                    bgGradient="linear(to-r, brand.400, accent.400)"
                                                    bgClip="text"
                                                >
                                                    {stat.value}
                                                </Text>
                                                <Text fontSize="sm" color="gray.500" fontWeight="600">
                                                    {stat.label}
                                                </Text>
                                            </VStack>
                                        </MotionBox>
                                    ))}
                                </Grid>
                            </VStack>
                        </GridItem>
                    </MotionGrid>
                </VStack>
            </Container>
        </Box>
    );
};