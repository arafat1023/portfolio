import { FC, useState } from "react";
import { 
    Box, 
    Grid, 
    GridItem,
    VStack,
    HStack,
    Heading,
    Text,
    Badge,
    Button,
    useColorModeValue,
    Container,
    Image,
    Progress,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiServer, FiTool } from "react-icons/fi";

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

interface SkillCategory {
    title: string;
    icon: any;
    color: string;
    skills: Array<{ name: string; level: number }>;
}

export const InteractiveAbout: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const cardBg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.800", "white");

    const skillCategories: SkillCategory[] = [
        {
            title: "Frontend",
            icon: FiCode,
            color: "blue",
            skills: [
                { name: "React", level: 95 },
                { name: "Vue.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Next.js", level: 80 },
            ]
        },
        {
            title: "Backend",
            icon: FiServer,
            color: "green",
            skills: [
                { name: "Node.js", level: 88 },
                { name: "Python", level: 80 },
                { name: "Flask", level: 75 },
                { name: "API Design", level: 85 },
            ]
        },
        {
            title: "Database",
            icon: FiDatabase,
            color: "purple",
            skills: [
                { name: "MongoDB", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "Redis", level: 75 },
                { name: "MySQL", level: 70 },
            ]
        },
        {
            title: "Tools",
            icon: FiTool,
            color: "orange",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 75 },
                { name: "Linux", level: 85 },
                { name: "AWS", level: 70 },
            ]
        }
    ];

    const experiences = [
        {
            company: "Nerddevs",
            position: "Software Engineer",
            duration: "September 2021 - Present",
            description: "Working on frontend, backend, database to implement solutions for multiple projects using various technologies. Learning industry best practices under senior engineers."
        },
        {
            company: "Sheraspace",
            position: "Software Engineer",
            duration: "March 2018 - August 2021",
            description: "Worked from scratch on a project management tool from the setup to deployment."
        }
    ];

    return (
        <Box bg={bgColor} py={20}>
            <Container maxW="7xl">
                <VStack spacing={16}>
                    {/* Section Header */}
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        textAlign="center"
                    >
                        <Heading
                            size="2xl"
                            bgGradient="linear(to-r, blue.400, purple.500)"
                            bgClip="text"
                            mb={4}
                        >
                            About Me
                        </Heading>
                        <Text fontSize="xl" color="gray.500" maxW="2xl">
                            Passionate software engineer with expertise in modern web technologies
                        </Text>
                    </MotionBox>

                    <MotionGrid
                        templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
                        gap={12}
                        w="full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Profile Card */}
                        <GridItem>
                            <MotionBox
                                bg={cardBg}
                                borderRadius="2xl"
                                p={8}
                                textAlign="center"
                                boxShadow="xl"
                                border="1px solid"
                                borderColor="gray.300"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <VStack spacing={6}>
                                    <Box position="relative">
                                        <Image
                                            src={`${process.env.PUBLIC_URL}/assets/arafat2.jpg`}
                                            alt="Arafat Hossain"
                                            borderRadius="full"
                                            w="150px"
                                            h="150px"
                                            objectFit="cover"
                                            border="4px solid"
                                            borderColor="blue.400"
                                        />
                                        <Box
                                            position="absolute"
                                            bottom={2}
                                            right={2}
                                            w={6}
                                            h={6}
                                            bg="green.400"
                                            borderRadius="full"
                                            border="3px solid"
                                            borderColor={cardBg}
                                        />
                                    </Box>
                                    
                                    <VStack spacing={2}>
                                        <Heading size="lg" color={textColor}>
                                            Arafat Hossain
                                        </Heading>
                                        <Text color="gray.500" fontSize="lg">
                                            Software Engineer
                                        </Text>
                                        <Badge colorScheme="blue" variant="subtle" px={3} py={1}>
                                            Available for hire
                                        </Badge>
                                    </VStack>

                                    <Text color="gray.600" textAlign="center">
                                        Based in Dhaka, Bangladesh. Passionate about creating amazing web experiences
                                        with modern technologies.
                                    </Text>

                                    <Button
                                        colorScheme="blue"
                                        size="lg"
                                        borderRadius="full"
                                        onClick={() => {
                                            const contactSection = document.getElementById("contact");
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        Let's work together
                                    </Button>
                                </VStack>
                            </MotionBox>
                        </GridItem>

                        {/* Skills and Experience */}
                        <GridItem>
                            <Tabs variant="soft-rounded" colorScheme="blue">
                                <TabList mb={8}>
                                    <Tab>Skills</Tab>
                                    <Tab>Experience</Tab>
                                    <Tab>Education</Tab>
                                </TabList>

                                <TabPanels>
                                    {/* Skills Panel */}
                                    <TabPanel p={0}>
                                        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
                                            {skillCategories.map((category, index) => (
                                                <MotionBox
                                                    key={category.title}
                                                    bg={cardBg}
                                                    borderRadius="xl"
                                                    p={6}
                                                    border="1px solid"
                                                    borderColor="gray.300"
                                                    cursor="pointer"
                                                    onClick={() => setSelectedCategory(index)}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <VStack spacing={4}>
                                                        <HStack>
                                                            <Box
                                                                as={category.icon}
                                                                size={6}
                                                                color={`${category.color}.500`}
                                                            />
                                                            <Heading size="md" color={textColor}>
                                                                {category.title}
                                                            </Heading>
                                                        </HStack>
                                                        
                                                        <VStack spacing={3} w="full">
                                                            {category.skills.map((skill) => (
                                                                <Box key={skill.name} w="full">
                                                                    <HStack justify="space-between" mb={1}>
                                                                        <Text fontSize="sm" color={textColor}>
                                                                            {skill.name}
                                                                        </Text>
                                                                        <Text fontSize="sm" color="gray.500">
                                                                            {skill.level}%
                                                                        </Text>
                                                                    </HStack>
                                                                    <Progress
                                                                        value={skill.level}
                                                                        colorScheme={category.color}
                                                                        size="sm"
                                                                        borderRadius="full"
                                                                    />
                                                                </Box>
                                                            ))}
                                                        </VStack>
                                                    </VStack>
                                                </MotionBox>
                                            ))}
                                        </Grid>
                                    </TabPanel>

                                    {/* Experience Panel */}
                                    <TabPanel p={0}>
                                        <VStack spacing={6}>
                                            {experiences.map((exp, index) => (
                                                <MotionBox
                                                    key={exp.company}
                                                    bg={cardBg}
                                                    borderRadius="xl"
                                                    p={6}
                                                    w="full"
                                                    border="1px solid"
                                                    borderColor="gray.300"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <VStack align="flex-start" spacing={3}>
                                                        <HStack justify="space-between" w="full">
                                                            <VStack align="flex-start" spacing={1}>
                                                                <Heading size="md" color={textColor}>
                                                                    {exp.position}
                                                                </Heading>
                                                                <Text color="blue.500" fontWeight="600">
                                                                    {exp.company}
                                                                </Text>
                                                            </VStack>
                                                            <Badge colorScheme="green" variant="subtle">
                                                                {exp.duration}
                                                            </Badge>
                                                        </HStack>
                                                        <Text color="gray.600">
                                                            {exp.description}
                                                        </Text>
                                                    </VStack>
                                                </MotionBox>
                                            ))}
                                        </VStack>
                                    </TabPanel>

                                    {/* Education Panel */}
                                    <TabPanel p={0}>
                                        <MotionBox
                                            bg={cardBg}
                                            borderRadius="xl"
                                            p={6}
                                            border="1px solid"
                                            borderColor="gray.300"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            viewport={{ once: true }}
                                        >
                                            <VStack align="flex-start" spacing={3}>
                                                <HStack justify="space-between" w="full">
                                                    <VStack align="flex-start" spacing={1}>
                                                        <Heading size="md" color={textColor}>
                                                            BSC in Computer Science and Engineering
                                                        </Heading>
                                                        <Text color="blue.500" fontWeight="600">
                                                            Brac University
                                                        </Text>
                                                    </VStack>
                                                    <Badge colorScheme="purple" variant="subtle">
                                                        Aug 2014 - December 2018
                                                    </Badge>
                                                </HStack>
                                                <Text color="gray.600">
                                                    Focused on software engineering, data structures, algorithms, and web development.
                                                    Graduated with a strong foundation in computer science principles.
                                                </Text>
                                            </VStack>
                                        </MotionBox>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </GridItem>
                    </MotionGrid>
                </VStack>
            </Container>
        </Box>
    );
};