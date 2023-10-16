// routes under admin will go to this page.tsx 
// [[..index]] was not working out for me ?

// the folder (studio) will not be taken under consideration with the routing
// the routing will go from main link to /admin and so on
// same goes to the (site) folder - they were created purely for organizational purposes
// and so that we could manage the styling (tailwind css) of the admin page as well
"use client"; // we have to say this because nextj13 sends less js to the client than before
// but in this particular case sanity is needed on the client side so we have to type it specifically 
import config from "@/sanity.config"; //@ is the root of our project
import { NextStudio } from "next-sanity/studio";


export default function AdminPage(){
    return <NextStudio config={config}/>;
}
