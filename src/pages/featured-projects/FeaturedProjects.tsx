import { FC } from "react";
import { 
    Box, 
    Heading, 
    Text, 
    Grid, 
    VStack, 
    useColorModeValue 
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ModernFeaturedProjectCard } from "./featured-project-card/ModernFeaturedProjectCard";
import { configs } from "shared/content/Content";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const FeaturedProjects: FC = () => {
    const headingColor = useColorModeValue("gray.900", "white");
    const subHeadingColor = useColorModeValue("gray.600", "gray.400");
    const accentGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

    return (
        <Box py={{ base: 16, md: 24 }}>
            <VStack spacing={{ base: 12, md: 16 }} align="stretch">
                {/* Section Header */}
                <VStack spacing={4} textAlign="center" maxW="2xl" mx="auto">
                    <MotionHeading
                        as="h2"
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        fontWeight="800"
                        color={headingColor}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Featured{" "}
                        <Box
                            as="span"
                            background={accentGradient}
                            backgroundClip="text"
                            color="transparent"
                        >
                            Projects
                        </Box>
                    </MotionHeading>
                    
                    <MotionText
                        fontSize={{ base: "lg", md: "xl" }}
                        color={subHeadingColor}
                        lineHeight="1.6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        A showcase of my most impactful work, featuring modern web applications
                        built with cutting-edge technologies and thoughtful user experiences.
                    </MotionText>
                </VStack>

                {/* Projects Grid */}
                <MotionBox
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Grid 
                        templateColumns={{ 
                            base: "1fr", 
                            md: "repeat(2, 1fr)",
                            lg: "repeat(auto-fit, minmax(450px, 1fr))"
                        }} 
                        gap={{ base: 8, md: 10 }}
                        w="full"
                    >
                        {configs.featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1 + 0.4 
                                }}
                                viewport={{ once: true }}
                            >
                                <ModernFeaturedProjectCard {...project} />
                            </motion.div>
                        ))}
                    </Grid>
                </MotionBox>
            </VStack>
        </Box>
    );
};
