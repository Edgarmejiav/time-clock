import { useEffect, useState } from 'react';

export const useFullScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const enterFullScreen = () => {
        const element = document.documentElement;
        try {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            }
        } catch (error) {
            console.error('Error entering fullscreen:', error);
        }
    };

    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    const toggleFullScreen = () => {
        if (isFullScreen) {
            exitFullScreen();
        } else {
            enterFullScreen();
        }
    };

    useEffect(() => {
        const handleFullScreenChange = () => {
            setIsFullScreen(Boolean(document.fullscreenElement));
        };

        document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
        document.addEventListener('MSFullscreenChange', handleFullScreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
            document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
        };
    }, []);

    return {isFullScreen, toggleFullScreen}
};
