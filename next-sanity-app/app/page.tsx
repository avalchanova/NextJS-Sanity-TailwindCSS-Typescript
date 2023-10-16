import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
    const projects = await getProjects(); // all of this is happening on the server
    //because all of the pages in the app folder are server-side rendered in nextjs13
  return <div className="max-w-5xl mx-auto py-20">
    <h1 className="text-7xl font-extrabold">Hello, I&apos;m{" "} 
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {/* "bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold" */}
            Alex
    </span>
        !
    </h1>
        {projects.map((project)=> ( // we would have needed to say that project is of type Project from the types we created, but we did it in the sanity-utils.ts
            <div key={project._id}>
                {project.name}
            </div>
        ))}
    </div>;
}

// cmd+shift+p --> 'outward' marked everything in the return  