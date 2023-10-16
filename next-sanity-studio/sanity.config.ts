import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Next Sanity Studio',

    projectId: '3rdvltpc', // this id we will take on in our next project so it will know what sanity project to look at and which dataset to pull from 
    dataset: 'production', // also the dataset

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
