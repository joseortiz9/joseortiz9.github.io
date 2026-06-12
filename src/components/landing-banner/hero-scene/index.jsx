import {useEffect, useRef} from "react";
import {prefersReducedMotion, supportsWebGL} from "../../../common/hooks";
import {SceneWrapper} from "./styles";

// The site's flagship 3D moment: a slowly counter-rotating icosahedral lattice —
// a wireframe shell (violet) wrapping a point cloud (coral) — that drifts with
// the pointer. Reads as an "agent constellation", tying the hero to the
// multi-agent systems work.
//
// Guarded on two axes, both of which fall back to the static CSS gradient orb
// rendered underneath:
//   1. prefers-reduced-motion  -> never animate (WCAG 2.3.3)
//   2. no usable WebGL context -> never draw a blank canvas (regression AO-11)
// THREE is dynamically imported so the heavy bundle is code-split out of the
// main chunk and never loaded in headless/reduced-motion paths (incl. tests).
const HeroScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (prefersReducedMotion() || !supportsWebGL()) return;
        const mount = mountRef.current;
        if (!mount) return;

        let renderer, frame, cleanup, disposed = false;

        import("vanta/vendor/three.r134.min")
            .then((mod) => {
                if (disposed || !mountRef.current) return;
                // UMD interop: named exports may land on the namespace or on
                // `default` depending on the bundler path — normalise both.
                const THREE = mod && mod.WebGLRenderer ? mod : mod.default;
                if (!THREE || !THREE.WebGLRenderer) return;

                const width = mount.clientWidth || window.innerWidth;
                const height = mount.clientHeight || window.innerHeight;

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
                camera.position.z = 30;

                const canvas = document.createElement("canvas");
                renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true});
                renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                renderer.setSize(width, height, false);
                mount.appendChild(canvas);

                const group = new THREE.Group();
                scene.add(group);

                const geometry = new THREE.IcosahedronGeometry(11, 1);

                const shell = new THREE.LineSegments(
                    new THREE.WireframeGeometry(geometry),
                    new THREE.LineBasicMaterial({
                        color: new THREE.Color("#7c5cff"),
                        transparent: true,
                        opacity: 0.55,
                    }),
                );
                group.add(shell);

                const points = new THREE.Points(
                    new THREE.IcosahedronGeometry(7.4, 2),
                    new THREE.PointsMaterial({
                        color: new THREE.Color("#ff6a3d"),
                        size: 0.28,
                        transparent: true,
                        opacity: 0.9,
                    }),
                );
                group.add(points);

                const pointer = {x: 0, y: 0};
                const onPointer = (e) => {
                    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
                    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
                };
                window.addEventListener("pointermove", onPointer, {passive: true});

                const onResize = () => {
                    const w = mount.clientWidth || window.innerWidth;
                    const h = mount.clientHeight || window.innerHeight;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h, false);
                };
                window.addEventListener("resize", onResize);

                const clock = new THREE.Clock();
                const render = () => {
                    const t = clock.getElapsedTime();
                    shell.rotation.y = t * 0.12;
                    shell.rotation.x = t * 0.05;
                    points.rotation.y = -t * 0.18;
                    points.rotation.z = t * 0.04;
                    // Gentle pointer parallax + idle bob.
                    group.rotation.y += (pointer.x * 0.35 - group.rotation.y) * 0.04;
                    group.rotation.x += (pointer.y * 0.25 - group.rotation.x) * 0.04;
                    group.position.y = Math.sin(t * 0.6) * 0.6;
                    renderer.render(scene, camera);
                    frame = requestAnimationFrame(render);
                };

                const onVisibility = () => {
                    if (document.hidden) {
                        cancelAnimationFrame(frame);
                    } else {
                        frame = requestAnimationFrame(render);
                    }
                };
                document.addEventListener("visibilitychange", onVisibility);

                frame = requestAnimationFrame(render);
                mount.classList.add("is-live");

                cleanup = () => {
                    cancelAnimationFrame(frame);
                    window.removeEventListener("pointermove", onPointer);
                    window.removeEventListener("resize", onResize);
                    document.removeEventListener("visibilitychange", onVisibility);
                    shell.geometry.dispose();
                    shell.material.dispose();
                    points.geometry.dispose();
                    points.material.dispose();
                    geometry.dispose();
                    renderer.dispose();
                    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
                };
            })
            .catch(() => {
                // WebGL/import failure: keep the static fallback, never throw.
            });

        return () => {
            disposed = true;
            if (cleanup) cleanup();
        };
    }, []);

    return <SceneWrapper ref={mountRef} aria-hidden="true" />;
};

export default HeroScene;
