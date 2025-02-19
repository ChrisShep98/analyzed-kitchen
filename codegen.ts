import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: ["src/**/*.tsx", "graphql/client/**/*.ts"],
  generates: {
    "./src/generated/": {
      preset: "client",
    },
  },
};
export default config;
