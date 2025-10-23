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
    useColorModeValue,
    Badge,
} from "@chakra-ui/react";
import {
    SiReact,
    SiVuedotjs,
    SiNodedotjs,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiAwsamplify,
    SiAzuredevops,
    SiGit,
    SiLinux,
    SiTailwindcss,
    SiFlask,
    SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const techCategories = [
    {
        title: "Frontend",
        color: "blue",
        technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ],
    },
    {
        title: "Backend",
        color: "green",
        technologies: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#000000" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Flask", icon: SiFlask, color: "#000000" },
        ],
    },
    {
        title: "Database",
        color: "purple",
        technologies: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
        ],
    },
    {
        title: "Tools & DevOps",
        color: "orange",
        technologies: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "Aws", icon: SiAwsamplify, color: "#2496ED" },
            { name: "Azure", icon: SiAzuredevops, color: "#2496ED" },
        ],
    },
];

export const TechStack: FC = () => {
    const bgColor = useColorModeValue("white", "gray.900");
    const cardBg = useColorModeValue("gray.50", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");
    const techItemBg = useColorModeValue("white", "gray.700");
    const techItemBorderColor = useColorModeValue("gray.100", "gray.600");
    const techItemTextColor = useColorModeValue("gray.700", "gray.300");

    return (
        <Box id="tech-stack" py={20} bg={bgColor}>
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
                            My{" "}
                            <Text as="span" bgGradient="linear(to-r, brand.400, accent.400)" bgClip="text">
                                Tech Stack
                            </Text>
                        </Heading>
                        <Text fontSize="xl" color="gray.500" maxW="2xl">
                            Technologies I work with to bring ideas to life
                        </Text>
                    </MotionBox>

                    {/* Tech Categories */}
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                        gap={8}
                        w="full"
                    >
                        {techCategories.map((category, categoryIndex) => (
                            <MotionBox
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <VStack
                                    bg={cardBg}
                                    p={6}
                                    borderRadius="xl"
                                    spacing={6}
                                    h="full"
                                    border="1px solid"
                                    borderColor={borderColor}
                                    _hover={{
                                        transform: "translateY(-5px)",
                                        shadow: "xl",
                                    }}
                                    transition="all 0.3s"
                                >
                                    <VStack spacing={3}>
                                        <Badge
                                            colorScheme={category.color}
                                            variant="subtle"
                                            px={3}
                                            py={1}
                                            borderRadius="full"
                                            fontSize="sm"
                                            fontWeight="600"
                                        >
                                            {category.title}
                                        </Badge>
                                    </VStack>

                                    <VStack spacing={4} w="full">
                                        {category.technologies.map((tech, techIndex) => (
                                            <MotionBox
                                                key={tech.name}
                                                w="full"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: categoryIndex * 0.1 + techIndex * 0.05,
                                                }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <HStack
                                                    spacing={3}
                                                    p={3}
                                                    borderRadius="lg"
                                                    bg={techItemBg}
                                                    border="1px solid"
                                                    borderColor={techItemBorderColor}
                                                    _hover={{
                                                        borderColor: "brand.400",
                                                        shadow: "md",
                                                    }}
                                                    transition="all 0.3s"
                                                    cursor="pointer"
                                                >
                                                    <Icon
                                                        as={tech.icon}
                                                        w={6}
                                                        h={6}
                                                        color={tech.color}
                                                    />
                                                    <Text
                                                        fontSize="sm"
                                                        fontWeight="600"
                                                        color={techItemTextColor}
                                                    >
                                                        {tech.name}
                                                    </Text>
                                                </HStack>
                                            </MotionBox>
                                        ))}
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