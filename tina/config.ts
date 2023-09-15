import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "dd005f40-1bb5-4c3e-a977-e36a658a0c2c", // Get this from tina.io
  token: "6f39896b52e7c9ce26009bf9a332254dc6c88336", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "docs",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "docs",
    },
  },
  search: {
    tina: {
      indexerToken: "d4167a37f56069229bc1c65101b8d062d8bb0069",
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema: {
    collections: [
      {
        name: "keg",
        label: "Keg",
        path: "docs",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
