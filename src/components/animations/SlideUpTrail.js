import { useTrail, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export function useSlideUpTrail(count) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const trail = useTrail(count, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" },
        config: { ...config.slow, duration: 1000 },
    });

    return { ref, trail };
}