#!/usr/bin/env node
const { argv } = process;
const [nodeBin, cliPath, ...args] = argv;

console.log("[MOCK CLI] called with: %s", args.join(" "));
