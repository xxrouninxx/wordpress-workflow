#!/usr/bin/env node

if (import.meta.url) {
  // Module mode
  import("../esm/cli/index.js").then((cli) => {
    cli.runCli();
  });
} else {
  // CommonJS mode
  require("../cjs/cli/index.js").runCli();
}
