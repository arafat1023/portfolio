import { FC } from "react";
import {
    AspectRatio,
    Image,
    VStack,
    Heading,
    Text,
    Box,
    HStack,
    useColorModeValue,
    IconButton,
    Flex,
    Badge,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

import { GlassCard } from "shared/glass-card/GlassCard";
import { Tags } from "shared/tags/Tags";
import { Date } from "shared/date/Date";

const MotionBox = motion(Box);

interface ModernFeaturedProjectCardProps {
    id: string;
    title: string;
    description: string;
    year: string;
    location: string;
    demo: string;
    image: string;
    jpg: string;
    tags: string[];
}

export const ModernFeaturedProjectCard: FC<ModernFeaturedProjectCardProps> = ({
    id,
    title,
    description,
    year,
    location,
    demo,
    image,
    jpg,
    tags,
}) => {
    const titleColor = useColorModeValue("gray.900", "white");
    const descColor = useColorModeValue("gray.600", "gray.300");
    const accentGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

    return (
        <GlassCard
            isHoverable
            p={0}
            overflow="hidden"
            position="relative"
            _hover={{
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        >
            <VStack spacing={0} align="stretch">
                {/* Project Image */}
                <Box position="relative" overflow="hidden">
                    <AspectRatio ratio={16 / 10}>
                        <MotionBox
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <picture>
                                <source type="image/webp" src={image} />
                                <source type="image/jpeg" src={jpg} />
                                <Image
                                    src={jpg}
                                    alt={`${title} project screenshot`}
                                    objectFit="cover"
                                    w="full"
                                    h="full"
                                />
                            </picture>
                        </MotionBox>
                    </AspectRatio>
                    
                    {/* Overlay with action buttons */}
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
                                aria-label="View live demo"
                                icon={<FiExternalLink />}
                                size="lg"
                                borderRadius="full"
                                bg="whiteAlpha.900"
                                color="gray.800"
                                _hover={{
                                    bg: "white",
                                    transform: "scale(1.1)",
                                }}
                                onClick={() => window.open(demo, "_blank")}
                                transition="all 0.2s"
                            />
                        </HStack>
                    </Box>
                    
                    {/* Featured badge */}
                    <Badge
                        position="absolute"
                        top={4}
                        right={4}
                        background={accentGradient}
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="600"
                    >
                        Featured
                    </Badge>
                </Box>

                {/* Project Content */}
                <VStack spacing={4} align="stretch" p={6}>
                    {/* Title and Date */}
                    <VStack spacing={2} align="flex-start">
                        <Heading
                            fontSize={{ base: "xl", md: "2xl" }}
                            fontWeight="700"
                            color={titleColor}
                            lineHeight="1.2"
                        >
                            {title}
                        </Heading>
                        <Date year={`${year} • ${location}`} />
                    </VStack>

                    {/* Description */}
                    <Text
                        color={descColor}
                        fontSize="md"
                        lineHeight="1.6"
                        noOfLines={3}
                    >
                        {description}
                    </Text>

                    {/* Tech Stack */}
                    <Box>
                        <Tags tags={tags} id={id} />
                    </Box>

                    {/* Action Link */}
                    <Flex justify="space-between" align="center" pt={2}>
                        <Text
                            as="a"
                            href={demo}
                            target="_blank"
                            color="accent.purple"
                            fontWeight="600"
                            fontSize="sm"
                            _hover={{
                                textDecoration: "underline",
                                color: "accent.electric",
                            }}
                            transition="color 0.2s"
                            cursor="pointer"
                        >
                            View Live Demo →
                        </Text>
                    </Flex>
                </VStack>
            </VStack>
        </GlassCard>
    );
};