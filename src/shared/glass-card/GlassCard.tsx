import { FC, ReactNode } from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

interface GlassCardProps extends BoxProps {
    children: ReactNode;
    blur?: number;
    opacity?: number;
    borderOpacity?: number;
    isHoverable?: boolean;
}

export const GlassCard: FC<GlassCardProps> = ({
    children,
    blur = 10,
    opacity = 0.25,
    borderOpacity = 0.18,
    isHoverable = false,
    ...props
}) => {
    const bg = useColorModeValue(
        `rgba(255, 255, 255, ${opacity})`,
        `rgba(255, 255, 255, ${opacity * 0.1})`
    );
    
    const borderColor = useColorModeValue(
        `rgba(255, 255, 255, ${borderOpacity})`,
        `rgba(255, 255, 255, ${borderOpacity})`
    );

    const hoverTransform = isHoverable ? "translateY(-4px)" : "none";
    const hoverShadow = isHoverable ? "glowHover" : "glass";

    return (
        <Box
            bg={bg}
            backdropFilter={`blur(${blur}px)`}
            borderRadius="2xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="glass"
            position="relative"
            overflow="hidden"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={
                isHoverable
                    ? {
                          transform: hoverTransform,
                          boxShadow: hoverShadow,
                      }
                    : {}
            }
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                borderTopRadius: "2xl",
            }}
            {...props}
        >
            {children}
        </Box>
    );
};