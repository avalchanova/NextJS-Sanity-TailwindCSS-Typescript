import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "3rdvltpc",
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-10-16',
    basePath: '/admin',
    plugins: [deskTool()]
})

export default config