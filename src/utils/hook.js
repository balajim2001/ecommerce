import { useEffect, useRef } from 'react';

// Custom hook to run a function only once
const useRunOnce = (callback) => {
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) {
            callback();
            hasRun.current = true;
        }
    }, []);
};

export default useRunOnce;
