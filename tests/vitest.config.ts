import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Specify environment
    environment: "node",

    // Globals you may need to set up
    globals: true,

    // Directory setup if different from defaults
    include: ["tests/**/*.{spec,test,e2e}.ts"], // Adjust pattern to match your test files
  },
});
