// routes under admin will go to this page.tsx 
// [[..index]] was not working out for me ?
"use client"; // we have to say this because nextj13 sends less js to the client than before
// but in this particular case sanity is needed on the client side so we have to type it specifically 
import config from "@/sanity.config"; //@ is the root of our project
import { NextStudio } from "next-sanity/studio";


export default function AdminPage(){
    return <NextStudio config={config}/>;
}
