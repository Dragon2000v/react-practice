import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
// eslint-disable-next-line no-irregular-whitespace
  plugins: [react()],
base: "/react-practice/",
// eslint-disable-next-line no-irregular-whitespace
  build: {
// eslint-disable-next-line no-irregular-whitespace
    sourcemap: true,
// eslint-disable-next-line no-irregular-whitespace
  }
});
