import { FC } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

export const AnimatedBackground: FC = () => {
    const bgColor = useColorModeValue(
        "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
    );
    
    const accentColor1 = useColorModeValue(
        "rgba(99, 102, 241, 0.1)",
        "rgba(139, 92, 246, 0.1)"
    );
    
    const accentColor2 = useColorModeValue(
        "rgba(59, 130, 246, 0.08)",
        "rgba(79, 172, 254, 0.08)"
    );
    
    const accentColor3 = useColorModeValue(
        "rgba(16, 185, 129, 0.06)",
        "rgba(34, 197, 94, 0.06)"
    );

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={-1}
            background={bgColor}
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 20% 20%, ${accentColor1} 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, ${accentColor2} 0%, transparent 50%),
                    radial-gradient(circle at 40% 60%, ${accentColor3} 0%, transparent 50%)
                `,
                animation: "subtle-float 20s ease-in-out infinite",
            }}
            _after={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
                `,
                backgroundSize: "50px 50px",
                opacity: 0.3,
                animation: "slow-drift 60s linear infinite",
            }}
            sx={{
                "@keyframes subtle-float": {
                    "0%, 100%": { transform: "scale(1) rotate(0deg)" },
                    "33%": { transform: "scale(1.1) rotate(1deg)" },
                    "66%": { transform: "scale(0.9) rotate(-1deg)" },
                },
                "@keyframes slow-drift": {
                    "0%": { transform: "translateX(0px) translateY(0px)" },
                    "100%": { transform: "translateX(50px) translateY(50px)" },
                },
            }}
        />
    );
};