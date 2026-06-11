// jest-dom adds custom matchers for asserting on DOM nodes under Vitest.
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/vitest";

// jsdom lacks the browser APIs the carousel (@ant-design/react-slick) relies on
// for its responsive breakpoints and layout measurements. Provide inert shims so
// component smoke tests can render without throwing.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

if (!window.ResizeObserver) {
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
