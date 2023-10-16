//all the functions to go and grab data:

import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

//using query language GROQ
export async function getProjects(): Promise<Project[]> {  // creating a client that can read our content, it will only be able to read our content

    return createClient(clientConfig).fetch(
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

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch( // find any project that the slug == the slug i have and return it (the first one because it will be an array)
        groq`*[_type == "project" && slug.current== $slug][0]{ 
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug: slug }
        // * grabs a single project in our dataset
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
      }`,
        { slug }
    )
}