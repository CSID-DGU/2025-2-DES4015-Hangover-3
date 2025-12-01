import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIGMA_PREFIX = "figma:asset/";
const VIRTUAL_FIGMA_PREFIX = "\0figma-asset:";
const SEMVER_PATTERN = /^\d+\.\d+\.\d+(?:-[\w.-]+)?$/;

function figmaAssetPlugin() {
  return {
    name: "figma-asset-resolver",
    enforce: "pre",
    resolveId(source) {
      if (source.startsWith(FIGMA_PREFIX)) {
        const assetName = source.slice(FIGMA_PREFIX.length);
        return `${VIRTUAL_FIGMA_PREFIX}${assetName}`;
      }
      return null;
    },
    load(id) {
      if (!id.startsWith(VIRTUAL_FIGMA_PREFIX)) {
        return null;
      }

      const assetName = id.slice(VIRTUAL_FIGMA_PREFIX.length);
      const assetOnDisk = resolve(__dirname, "public", "figma-assets", assetName);

      if (fs.existsSync(assetOnDisk)) {
        return `export default "/figma-assets/${assetName}";`;
      }

      const placeholder =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23f3f4f6'/%3E%3C/svg%3E";
      return `export default "${placeholder}";`;
    },
  };
}

function stripVersionSpecifier(source) {
  const lastAt = source.lastIndexOf("@");
  if (lastAt <= 0) {
    return null;
  }

  const versionCandidate = source.slice(lastAt + 1);
  if (!SEMVER_PATTERN.test(versionCandidate)) {
    return null;
  }

  return source.startsWith("@")
    ? source.slice(0, lastAt)
    : source.slice(0, lastAt);
}

function versionedPackageResolver() {
  return {
    name: "versioned-package-resolver",
    enforce: "pre",
    resolveId(source, importer, options) {
      const normalized = stripVersionSpecifier(source);
      if (!normalized) {
        return null;
      }
      return this.resolve(normalized, importer, { ...options, skipSelf: true });
    },
  };
}

export default defineConfig({
  plugins: [react(), versionedPackageResolver(), figmaAssetPlugin()],
});
