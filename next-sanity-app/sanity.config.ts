import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
    projectId: "3rdvltpc",
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-10-16',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: [project] }
})

export default config