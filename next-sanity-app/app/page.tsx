import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
    const projects = await getProjects(); // all of this is happening on the server
    //because all of the pages in the app folder are server-side rendered in nextjs13
  return <div className="bg-red-500">
        {projects.map((project)=> ( // we would have needed to say that project is of type Project from the types we created, but we did it in the sanity-utils.ts
            <div key={project._id}>
                {project.name}
            </div>
        ))}
    </div>;
}

// cmd+shift+p --> 'outward' marked everything in the return  