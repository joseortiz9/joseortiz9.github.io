import {useEffect, useRef, useState} from "react";

// Single source of truth for the reduced-motion preference. Components use it to
// opt out of WebGL, parallax and reveal transitions (WCAG 2.3.3 / 2.2.2).
export const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Detects a usable WebGL context once, on the client. Headless/no-WebGL
// environments (the bug AO-11 guarded against) get `false` and render the static
// fallback instead of a blank canvas.
export const supportsWebGL = () => {
    if (typeof document === "undefined") return false;
    try {
        const canvas = document.createElement("canvas");
        return Boolean(
            canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
        );
    } catch {
        return false;
    }
};

// Adds `is-visible` to an element the first time it scrolls into view, driving
// the `.reveal` transition. Falls back to immediately-visible when motion is
// reduced or IntersectionObserver is unavailable (e.g. jsdom).
export const useReveal = (options = {}) => {
    const ref = useRef(null);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
            node.classList.add("is-visible");
            return;
        }
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.18, rootMargin: "0px 0px -10% 0px", ...options},
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return ref;
};

// Tracks whether the page has scrolled past a threshold — used to condense the
// sticky header. Cheap, passive listener.
export const useScrolled = (threshold = 24) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > threshold);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);
    return scrolled;
};
