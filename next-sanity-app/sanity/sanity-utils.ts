//all the functions to go and grab data:

import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

//using query language GROQ
export async function getProjects(): Promise<Project[]> {
    const client = createClient({  // creating a client that can read our content
        // it will only be able to read our content
        projectId: "3rdvltpc",
        dataset: 'production',
        apiVersion: '2023-10-16',
    }); // client is created

    return client.fetch(
        groq`*[_type == "project"]{ 
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
        // * grabs everything in our dataset
    )

}