import { FC, useState, useEffect } from "react";
import { 
    Box, 
    Text, 
    VStack, 
    HStack,
    useColorModeValue,
    keyframes
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

interface TerminalLine {
    command: string;
    output: string;
    delay: number;
}

export const TerminalHero: FC = () => {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const bgColor = useColorModeValue("#1a1a1a", "#0d1117");
    const textColor = useColorModeValue("#00ff00", "#00ff00");
    const promptColor = useColorModeValue("#ff6b6b", "#ff6b6b");
    const outputColor = useColorModeValue("#61dafb", "#61dafb");

    const terminalLines: TerminalLine[] = [
        { command: "whoami", output: "arafat-hossain", delay: 1000 },
        { command: "ls skills/", output: "react.js  vue.js  node.js  typescript  python", delay: 2000 },
        { command: "cat about.txt", output: "Software Engineer passionate about creating amazing web experiences", delay: 3000 },
        { command: "pwd", output: "/home/arafat/portfolio", delay: 4000 },
        { command: "git status", output: "Ready to collaborate on your next project!", delay: 5000 },
    ];

    useEffect(() => {
        if (currentLineIndex < terminalLines.length) {
            const currentLine = terminalLines[currentLineIndex];
            const fullText = `$ ${currentLine.command}`;
            
            if (currentCharIndex < fullText.length) {
                const timer = setTimeout(() => {
                    setCurrentCharIndex(prev => prev + 1);
                }, 100);
                return () => clearTimeout(timer);
            } else {
                const timer = setTimeout(() => {
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }, currentLine.delay);
                return () => clearTimeout(timer);
            }
        }
    }, [currentLineIndex, currentCharIndex, terminalLines]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={8}
        >
            <Box
                bg={bgColor}
                borderRadius="lg"
                p={8}
                w="full"
                maxW="4xl"
                boxShadow="2xl"
                border="1px solid"
                borderColor="gray.700"
                fontFamily="'JetBrains Mono', 'Consolas', monospace"
                fontSize={{ base: "sm", md: "md" }}
            >
                {/* Terminal Header */}
                <HStack mb={6} spacing={2}>
                    <Box w={3} h={3} borderRadius="full" bg="#ff5f56" />
                    <Box w={3} h={3} borderRadius="full" bg="#ffbd2e" />
                    <Box w={3} h={3} borderRadius="full" bg="#27ca3f" />
                    <Text ml={4} color="gray.400" fontSize="sm">
                        arafat@portfolio:~$
                    </Text>
                </HStack>

                <VStack align="flex-start" spacing={4}>
                    {terminalLines.slice(0, currentLineIndex + 1).map((line, index) => (
                        <Box key={index} w="full">
                            {/* Command */}
                            <HStack spacing={2}>
                                <Text color={promptColor}>$</Text>
                                <MotionText
                                    color={textColor}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.5 }}
                                >
                                    {index === currentLineIndex 
                                        ? line.command.slice(0, Math.max(0, currentCharIndex - 2))
                                        : line.command
                                    }
                                    {index === currentLineIndex && currentCharIndex >= 2 && showCursor && (
                                        <Box 
                                            as="span" 
                                            bg={textColor} 
                                            w="2px" 
                                            h="1.2em" 
                                            display="inline-block"
                                            animation={`${blink} 1s infinite`}
                                        />
                                    )}
                                </MotionText>
                            </HStack>
                            
                            {/* Output */}
                            {index < currentLineIndex && (
                                <MotionText
                                    color={outputColor}
                                    ml={6}
                                    mt={1}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.5 + 0.3 }}
                                >
                                    {line.output}
                                </MotionText>
                            )}
                        </Box>
                    ))}
                    
                    {/* Current cursor position */}
                    {currentLineIndex >= terminalLines.length && (
                        <HStack spacing={2}>
                            <Text color={promptColor}>$</Text>
                            <Box 
                                bg={textColor} 
                                w="2px" 
                                h="1.2em"
                                animation={`${blink} 1s infinite`}
                            />
                        </HStack>
                    )}
                </VStack>

                {/* Welcome message after animation */}
                {currentLineIndex >= terminalLines.length && (
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        mt={8}
                        p={6}
                        borderLeft="3px solid"
                        borderColor={outputColor}
                        bg="blackAlpha.300"
                    >
                        <Text color={outputColor} fontSize="lg" fontWeight="bold" mb={2}>
                            Welcome to my portfolio!
                        </Text>
                        <Text color="gray.300" fontSize="sm">
                            Type 'help' to see available commands or scroll down to explore my work.
                        </Text>
                    </MotionBox>
                )}
            </Box>
        </MotionBox>
    );
};