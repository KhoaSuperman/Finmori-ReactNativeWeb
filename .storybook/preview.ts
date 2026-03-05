import type { Preview } from "storybook";

import "../src/global.css";

const preview: Preview = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
};

export default preview;
