// The brand mark: an abstract agent-graph node — a central orchestrator linked
// to three satellite nodes — nodding to the multi-agent systems work that
// anchors the site. Rendered as inline SVG so it inherits the coral↔violet
// brand gradient and scales crisply anywhere (header, footer, favicon parity).
const BrandMark = ({size = 28, title = "Jose Ortiz"}) => {
    const gid = "brand-mark-gradient";
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            role="img"
            aria-label={title}
            focusable="false"
        >
            <defs>
                <linearGradient id={gid} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ff6a3d" />
                    <stop offset="1" stopColor="#7c5cff" />
                </linearGradient>
            </defs>
            <g stroke={`url(#${gid})`} strokeWidth="1.6" fill="none" strokeLinecap="round">
                <path d="M16 16 L16 5" />
                <path d="M16 16 L26 22" />
                <path d="M16 16 L6 22" />
            </g>
            <g fill={`url(#${gid})`}>
                <circle cx="16" cy="5" r="2.6" />
                <circle cx="26" cy="22" r="2.6" />
                <circle cx="6" cy="22" r="2.6" />
            </g>
            <circle cx="16" cy="16" r="4" fill="none" stroke={`url(#${gid})`} strokeWidth="2" />
        </svg>
    );
};

export default BrandMark;
