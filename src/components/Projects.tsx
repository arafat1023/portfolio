import { FC } from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    VStack,
    HStack,
    Image,
    Badge,
    Button,
    useColorModeValue,
    Icon,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const projects = [
    {
        title: "TissueConnect",
        description: "A predictive analytics platform for innovative diagnostics and therapies in spinal diseases, including an Electron-based application integrated with Vue.js and Python for analyzing MRI data.",
        image: "/assets/featured-projects/tissueconnect.png",
        technologies: ["Vue.js", "JavaScript", "Electron", "PostgreSQL", "Flask", "Azure"],
        liveUrl: "https://tissueconnect.ai/",
        featured: true,
    },
    {
        title: "Biddaan",
        description: "An education platform for conducting online classes and managing the overall course management. Contributed to both admin portal and main website development, focusing on course and class management, report generation, and course preview integration.",
        image: "/assets/featured-projects/biddan.png",
        technologies: ["Vue.js", "JavaScript", "Express.js", "MongoDB", "AWS"],
        liveUrl: "https://biddaan.com/",
        featured: true,
    },
    {
        title: "AI Mate",
        description: "A mobile chatbot based on OpenAI's GPT API. Built the REST API using OpenAPI specifications and developed the admin side of the project for managing chatbot interactions and user data.",
        image: "/assets/featured-projects/aimate.webp",
        technologies: ["TypeScript", "Vue.js", "Express.js", "Redis", "Jest", "MongoDB"],
        liveUrl: "https://play.google.com/store/apps/details?id=com.aimate.app",
        featured: true,
    },
    {
        title: "Daency",
        description: "An Online group dance platform where users can learn from interactive classes with real-time features.",
        image: "/assets/featured-projects/daency.png",
        technologies: ["Vue.js", "TypeScript", "Node.js", "WebSockets", "MongoDB"],
        liveUrl: "https://daency.com/",
        featured: true,
    },
    {
        title: "Daily Stocks",
        description: "A push notification service to get daily updates of Dhaka stock exchange with real-time data.",
        image: "/assets/featured-projects/dailystocks.png",
        technologies: ["Vue.js", "TypeScript", "Flask", "PostgreSQL", "Redis"],
        liveUrl: "https://dailystocks.info/",
        featured: true,
    },
    {
        title: "Bikribatta",
        description: "An inventory solution for managing business operations in a simple and efficient way.",
        image: "/assets/featured-projects/bikribatta.png",
        technologies: ["Vue.js", "TypeScript", "Node.js", "MongoDB"],
        liveUrl: "https://app.bikribatta.com/",
        featured: false,
    },
    {
        title: "Project Management Tool",
        description: "A comprehensive project management platform built for interior design workflow management.",
        image: "/assets/featured-projects/project.png",
        technologies: ["React.js", "Flask", "PostgreSQL"],
        liveUrl: "https://sheraspace.com/",
        featured: false,
    },
];

export const Projects: FC = () => {
    const bgColor = useColorModeValue("gray.50", "gray.800");
    const cardBg = useColorModeValue("white", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Box id="projects" py={20} bg={bgColor}>
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
                            Featured{" "}
                            <Text as="span" bgGradient="linear(to-r, brand.400, accent.400)" bgClip="text">
                                Projects
                            </Text>
                        </Heading>
                        <Text fontSize="xl" color="gray.500" maxW="2xl">
                            Some of the projects I've worked on recently
                        </Text>
                    </MotionBox>

                    {/* Projects Grid */}
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        gap={8}
                        w="full"
                    >
                        {projects.map((project, index) => (
                            <MotionBox
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <VStack
                                    bg={cardBg}
                                    borderRadius="xl"
                                    overflow="hidden"
                                    spacing={0}
                                    h="full"
                                    border="1px solid"
                                    borderColor={borderColor}
                                    shadow="lg"
                                    _hover={{
                                        shadow: "xl",
                                        borderColor: "brand.400",
                                    }}
                                    transition="all 0.3s"
                                    position="relative"
                                >
                                    {project.featured && (
                                        <Badge
                                            position="absolute"
                                            top={4}
                                            right={4}
                                            colorScheme="brand"
                                            variant="solid"
                                            zIndex={2}
                                            borderRadius="full"
                                            px={3}
                                            py={1}
                                        >
                                            Featured
                                        </Badge>
                                    )}

                                    {/* Project Image */}
                                    <Box position="relative" w="full" h="250px" overflow="hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            w="full"
                                            h="full"
                                            objectFit="cover"
                                            transition="transform 0.3s"
                                            _hover={{ transform: "scale(1.05)" }}
                                        />
                                        <Box
                                            position="absolute"
                                            top={0}
                                            left={0}
                                            right={0}
                                            bottom={0}
                                            bg="blackAlpha.600"
                                            opacity={0}
                                            _hover={{ opacity: 1 }}
                                            transition="opacity 0.3s"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <HStack spacing={4}>
                                                <Button
                                                    leftIcon={<Icon as={FiExternalLink} />}
                                                    colorScheme="brand"
                                                    size="sm"
                                                    onClick={() => window.open(project.liveUrl, "_blank")}
                                                >
                                                    Live Demo
                                                </Button>
                                            </HStack>
                                        </Box>
                                    </Box>

                                    {/* Project Content */}
                                    <VStack p={6} align="flex-start" spacing={4} flex={1}>
                                        <Heading as="h3" size="lg" fontWeight="700">
                                            {project.title}
                                        </Heading>
                                        <Text color="gray.500" fontSize="md" lineHeight="tall">
                                            {project.description}
                                        </Text>

                                        {/* Technologies */}
                                        <HStack wrap="wrap" spacing={2}>
                                            {project.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="subtle"
                                                    colorScheme="gray"
                                                    borderRadius="full"
                                                    px={3}
                                                    py={1}
                                                    fontSize="xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </HStack>

                                        {/* Project Links */}
                                        <HStack spacing={3} pt={2}>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                leftIcon={<Icon as={FiExternalLink} />}
                                                onClick={() => window.open(project.liveUrl, "_blank")}
                                            >
                                                View Live
                                            </Button>
                                        </HStack>
                                    </VStack>
                                </VStack>
                            </MotionBox>
                        ))}
                    </Grid>
                </VStack>
            </Container>
        </Box>
    );
};