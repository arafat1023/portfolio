import { FC, useRef } from "react";
import { 
    Box, 
    HStack, 
    VStack,
    Heading,
    Text,
    Image,
    Badge,
    IconButton,
    useColorModeValue,
    Container
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { configs } from "shared/content/Content";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export const HorizontalProjects: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const bgGradient = useColorModeValue(
        "linear(to-r, blue.50, purple.50, pink.50)",
        "linear(to-r, blue.900, purple.900, pink.900)"
    );
    
    const cardBg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "white");

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <Box py={20} position="relative">
            <Container maxW="full" px={8}>
                {/* Section Header */}
                <VStack spacing={6} mb={12} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Heading
                            size="2xl"
                            bgGradient="linear(to-r, blue.400, purple.500, pink.500)"
                            bgClip="text"
                            mb={4}
                        >
                            Featured Projects
                        </Heading>
                        <Text fontSize="xl" color="gray.500" maxW="2xl">
                            Scroll horizontally to explore my latest work and side projects
                        </Text>
                    </MotionBox>
                </VStack>

                {/* Navigation Controls */}
                <HStack justify="center" spacing={4} mb={8}>
                    <IconButton
                        aria-label="Scroll left"
                        icon={<FiChevronLeft />}
                        size="lg"
                        borderRadius="full"
                        onClick={scrollLeft}
                        _hover={{ transform: "scale(1.1)" }}
                        transition="all 0.2s"
                    />
                    <IconButton
                        aria-label="Scroll right"
                        icon={<FiChevronRight />}
                        size="lg"
                        borderRadius="full"
                        onClick={scrollRight}
                        _hover={{ transform: "scale(1.1)" }}
                        transition="all 0.2s"
                    />
                </HStack>

                {/* Horizontal Scrolling Container */}
                <Box
                    ref={containerRef}
                    overflowX="auto"
                    overflowY="hidden"
                    css={{
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '4px',
                        },
                    }}
                >
                    <HStack spacing={8} pb={4} align="stretch">
                        {configs.featuredProjects.map((project, index) => (
                            <MotionBox
                                key={project.id}
                                minW="400px"
                                maxW="400px"
                                bg={cardBg}
                                borderRadius="2xl"
                                overflow="hidden"
                                boxShadow="xl"
                                border="1px solid"
                                borderColor="gray.300"
                                whileHover={{ 
                                    y: -10, 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Project Image */}
                                <Box position="relative" overflow="hidden">
                                    <MotionImage
                                        src={project.jpg}
                                        alt={project.title}
                                        w="full"
                                        h="200px"
                                        objectFit="cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    
                                    {/* Overlay */}
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
                                            <IconButton
                                                aria-label="View project"
                                                icon={<FiExternalLink />}
                                                size="lg"
                                                borderRadius="full"
                                                bg="white"
                                                color="gray.800"
                                                _hover={{ transform: "scale(1.1)" }}
                                                onClick={() => window.open(project.demo, "_blank")}
                                            />
                                            {/* <IconButton
                                                aria-label="View code"
                                                icon={<FiGithub />}
                                                size="lg"
                                                borderRadius="full"
                                                bg="white"
                                                color="gray.800"
                                                _hover={{ transform: "scale(1.1)" }}
                                            /> */}
                                        </HStack>
                                    </Box>
                                </Box>

                                {/* Project Content */}
                                <VStack p={6} align="stretch" spacing={4}>
                                    <VStack align="flex-start" spacing={2}>
                                        <Heading size="lg" color={textColor}>
                                            {project.title}
                                        </Heading>
                                        <Text fontSize="sm" color="gray.500">
                                            {project.year} • {project.location}
                                        </Text>
                                    </VStack>

                                    <Text color="gray.600" fontSize="md" noOfLines={3}>
                                        {project.description}
                                    </Text>

                                    {/* Tech Stack */}
                                    <HStack wrap="wrap" spacing={2}>
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <Badge
                                                key={tag}
                                                colorScheme="blue"
                                                variant="subtle"
                                                borderRadius="full"
                                                px={3}
                                                py={1}
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <Badge
                                                colorScheme="gray"
                                                variant="subtle"
                                                borderRadius="full"
                                                px={3}
                                                py={1}
                                            >
                                                +{project.tags.length - 3}
                                            </Badge>
                                        )}
                                    </HStack>
                                </VStack>
                            </MotionBox>
                        ))}

                        {/* Add more projects or call-to-action */}
                        <MotionBox
                            minW="300px"
                            bg={bgGradient}
                            borderRadius="2xl"
                            p={8}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <VStack spacing={4}>
                                <Heading size="lg" color={textColor}>
                                    More Projects
                                </Heading>
                                <Text color="gray.600">
                                    Check out my GitHub for more amazing projects!
                                </Text>
                                <IconButton
                                    aria-label="View GitHub"
                                    icon={<FiGithub />}
                                    size="lg"
                                    borderRadius="full"
                                    colorScheme="blue"
                                    onClick={() => window.open("https://github.com/arafat1023", "_blank")}
                                />
                            </VStack>
                        </MotionBox>
                    </HStack>
                </Box>
            </Container>
        </Box>
    );
};