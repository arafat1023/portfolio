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

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    featured: boolean;
}

const professionalProjects: Project[] = [
    {
        title: "TissueConnect",
        description: "A predictive-analytics platform for spinal disease diagnostics. Led architecture end-to-end - backend services, database schemas, and secure Azure cloud infrastructure with Key Vault encryption for HIPAA-aligned clinical MRI data.",
        image: `${process.env.PUBLIC_URL}/assets/featured-projects/tissueconnect.png`,
        technologies: ["Vue.js", "JavaScript", "Electron", "PostgreSQL", "Flask", "Azure"],
        liveUrl: "https://www.sdi-global.ai/",
        featured: true,
    },
    {
        title: "Biddaan",
        description: "A multi-tenant SaaS education platform for online classes and course management. Designed and automated Nginx reverse-proxy configuration for the multi-tenant architecture, plus report generation, analytics, and a course-preview feature.",
        image: `${process.env.PUBLIC_URL}/assets/featured-projects/biddan.png`,
        technologies: ["Vue.js", "JavaScript", "Express.js", "MongoDB", "AWS"],
        liveUrl: "https://biddaan.com/",
        featured: true,
    },
    {
        title: "AI Mate",
        description: "A GPT-powered mobile chatbot. Architected type-safe REST APIs from OpenAPI specifications and built the complete admin dashboard for chatbot configuration, user management, and analytics, supporting 50,000 users.",
        image: `${process.env.PUBLIC_URL}/assets/featured-projects/aimate.webp`,
        technologies: ["TypeScript", "Vue.js", "Express.js", "Redis", "Jest", "MongoDB"],
        liveUrl: "https://play.google.com/store/apps/details?id=com.aimate.app",
        featured: true,
    },
    {
        title: "Daency",
        description: "An online group-dance platform with real-time, interactive classes for international clients. Integrated WebRTC for live video, Stripe for payments, and Redis-based event-driven task queues, supporting 500+ concurrent users.",
        image: `${process.env.PUBLIC_URL}/assets/featured-projects/daency.png`,
        technologies: ["Vue.js", "TypeScript", "Node.js", "WebSockets", "Stripe", "MongoDB"],
        liveUrl: "https://daency.com/",
        featured: true,
    },
    {
        title: "Daily Stocks",
        description: "A push notification service to get daily updates of Dhaka stock exchange with real-time data.",
        image: `${process.env.PUBLIC_URL}/assets/featured-projects/dailystocks.png`,
        technologies: ["Vue.js", "TypeScript", "Flask", "PostgreSQL", "Redis"],
        liveUrl: "https://dailystocks.info/",
        featured: false,
    },
    {
        title: "Bikribatta",
        description: "An inventory-management SaaS for SMEs, built from the ground up - accounts, reporting, and employee management. Spearheaded the migration from Backbone.js to Vue 3.",
        image: `${process.env.PUBLIC_URL}/assets/featured-projects/bikribatta.png`,
        technologies: ["Vue.js", "TypeScript", "Node.js", "MongoDB"],
        liveUrl: "https://app.bikribatta.com/",
        featured: false,
    },
    {
        title: "Project Management Tool",
        description: "A comprehensive project management platform built for interior design workflow management.",
        image: `${process.env.PUBLIC_URL}/assets/featured-projects/project.png`,
        technologies: ["React.js", "Flask", "PostgreSQL"],
        liveUrl: "https://sheraspace.com/",
        featured: false,
    },
];

const personalProjects: Project[] = [
    {
        title: "ZikrFlow",
        description: "A community dhikr-tracking app for the global Muslim community - tap counters, public/private rooms, streaks, and leaderboards, with full offline support. Live on Google Play.",
        image: "https://opengraph.githubassets.com/1/arafat1023/ZikrFlow",
        technologies: ["Flutter", "Dart", "Firebase", "Next.js"],
        liveUrl: "https://play.google.com/store/apps/details?id=com.zikrflow.app",
        featured: false,
    },
    {
        title: "BhashaVoice",
        description: "Open-source, self-hostable voice-cloning platform - clone a voice from a short recording, then generate speech in Bangla or English from the same voice, with dataset pipelines and fine-tuning workflows.",
        image: "https://opengraph.githubassets.com/1/arafat1023/bhashavoice",
        technologies: ["Python", "FastAPI", "IndicF5", "Chatterbox"],
        liveUrl: "https://github.com/arafat1023/bhashavoice",
        featured: false,
    },
    {
        title: "QueryPlayground",
        description: "Practice real PostgreSQL and MongoDB queries entirely in the browser - no signup, no server. PostgreSQL 17 compiles to WebAssembly via PGlite; MongoDB queries run client-side.",
        image: "https://opengraph.githubassets.com/1/arafat1023/QueryPlayground",
        technologies: ["React", "TypeScript", "WebAssembly"],
        liveUrl: "https://github.com/arafat1023/QueryPlayground",
        featured: false,
    },
    {
        title: "ZeroShutter",
        description: "A privacy-first image editor that runs entirely in the browser - crop, adjust, watermark, and batch export to ZIP, with automatic EXIF stripping. No uploads, no servers, no tracking.",
        image: "https://opengraph.githubassets.com/1/arafat1023/ZeroShutter",
        technologies: ["React", "TypeScript", "Canvas API"],
        liveUrl: "https://github.com/arafat1023/ZeroShutter",
        featured: false,
    },
];

interface ProjectSectionProps {
    id: string;
    heading: string;
    highlight: string;
    subheading: string;
    items: Project[];
}

const ProjectSection: FC<ProjectSectionProps> = ({ id, heading, highlight, subheading, items }) => {
    const cardBg = useColorModeValue("white", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    return (
        <Box id={id} py={20}>
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
                            {heading}{" "}
                            <Text as="span" bgGradient="linear(to-r, brand.400, accent.400)" bgClip="text">
                                {highlight}
                            </Text>
                        </Heading>
                        <Text fontSize="xl" color="gray.500" maxW="2xl">
                            {subheading}
                        </Text>
                    </MotionBox>

                    {/* Projects Grid */}
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                        gap={8}
                        w="full"
                    >
                        {items.map((project, index) => (
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

export const Projects: FC = () => {
    const professionalBg = useColorModeValue("gray.50", "gray.800");
    const personalBg = useColorModeValue("white", "gray.900");

    return (
        <>
            <Box bg={professionalBg}>
                <ProjectSection
                    id="projects"
                    heading="Featured"
                    highlight="Projects"
                    subheading="Client and product work from my time at Nerddevs and Sheraspace"
                    items={professionalProjects}
                />
            </Box>
            <Box bg={personalBg}>
                <ProjectSection
                    id="personal-projects"
                    heading="Personal"
                    highlight="Projects"
                    subheading="Things I build and ship on my own time"
                    items={personalProjects}
                />
            </Box>
        </>
    );
};
