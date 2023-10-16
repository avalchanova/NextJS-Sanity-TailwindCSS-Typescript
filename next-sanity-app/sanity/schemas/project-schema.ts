const project = {
    name: 'project', //name is singular
    title: 'Projects', //title is plural
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' } // will define itself from the name field
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true }, // in the studio we can zoom in, pick a certain section of the image,etc
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }], // enables us to do headings in bold, etc right in the sanity studio
        },
    ],
};

export default project