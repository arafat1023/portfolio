import { FC } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

export const MinimalBackground: FC = () => {
    const bgColor = useColorModeValue("#ffffff", "#0a0a0b");
    const gradientOverlay = useColorModeValue(
        "radial-gradient(ellipse at top, rgba(79, 70, 229, 0.03) 0%, transparent 50%)",
        "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.1) 0%, transparent 50%)"
    );

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={-1}
            bg={bgColor}
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: gradientOverlay,
            }}
        />
    );
};