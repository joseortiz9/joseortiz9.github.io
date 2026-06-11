// Vite/Rollup cannot resolve dynamic `require()`, so the project images are
// pre-resolved to their built URLs via `import.meta.glob`.
const projectImages = import.meta.glob("../assets/projects/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export const checkImgPath = (img) =>
  img.substring(0, 4) === "http"
    ? img
    : projectImages[`../assets/projects/${img}`];
