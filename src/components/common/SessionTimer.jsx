import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/useAuth';

export const SessionTimer = () => {
    const { tokens, refreshToken } = useAuth();
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        if (!tokens?.expiresAt) {
            setTimeRemaining(0);
            return;
        }

        const interval = setInterval(() => {
            const remaining = Math.max(0, tokens?.expiresAt - Date.now());
            setTimeRemaining(remaining);
        }, 1000);

        return () => clearInterval(interval);
    }, [tokens]);

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const getColor = () => {
        if (timeRemaining <= 60000) return 'text-red-500';
        if (timeRemaining <= 120000) return 'text-orange-500';
        return 'text-green-500';
    };

    if (!tokens) return null;

    return (
        <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Session:</span>
            <span className={`font-mono ${getColor()}`}>{formatTime(timeRemaining)}</span>
            <button
                onClick={() => refreshToken()}
                className="ml-2 text-xs bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-1 px-2 rounded transition-colors"
            >
                Refresh
            </button>
        </div>
    );
};