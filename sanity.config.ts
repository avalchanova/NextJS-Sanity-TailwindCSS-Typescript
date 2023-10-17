import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "3rdvltpc",
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-10-16',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
})

export default config