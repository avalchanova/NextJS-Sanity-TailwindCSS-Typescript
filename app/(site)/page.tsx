import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const projects = await getProjects(); // all of this is happening on the server
    //because all of the pages in the app folder are server-side rendered in nextjs13

  return (
    <div>
        <h1 className="text-7xl font-extrabold">Hello, I&apos;m{" "} 
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {/* "bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold" */}
                Alex
            </span>
            !
        </h1>
        <p className="mt-3 text-xl text-gray-600">Aloha, everyone! Check out my projects!</p>
        <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project)=> ( // we would have needed to say that project is of type Project from the types we created, but we did it in the sanity-utils.ts
                    <Link href={`/projects/${project.slug}`} 
                        key={project._id} 
                        className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-800 transition">
                        {project.image && (
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={750}
                                height={300}
                                className="object-cover rounded-lg border border-gray-500"
                            />
                        )}

                        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                            {project.name}
                        </div>
                    </Link>
                ))}
        </div>
    </div>
  )
}

// cmd+shift+p --> 'outward' marked everything in the return  