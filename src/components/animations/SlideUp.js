import { useSpring, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export function useSlideUp() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const slideUp = useSpring({
        transform: inView ? 'translateY(0)' : 'translateY(5rem)',
        opacity: inView ? 1 : 0,
        config: { ...config.slow, duration: 1000 },
    });

    return { ref, style: slideUp };
}