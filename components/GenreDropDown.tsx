import { Genres } from "@/typings";
import next from "next";
import { revalidateTag } from "next/cache";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ChevronDown} from "lucide-react";
import Link from "next/link";


async function GenreDropDown() {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next:{
          revalidate: 60*60*24 // 24hours
        }
    
    };

    const response = await fetch(url,options)
    const data = (await response.json()) as Genres;
   

 
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className=" ml-1 flex justify-center items-center">
          Genre <ChevronDown className="ml-1"/>
          </DropdownMenuTrigger>
      
    <DropdownMenuContent className="relative top-3">
      <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
      <DropdownMenuSeparator/>

     {data && data.genres && data.genres.map((genre) => (
        <DropdownMenuItem key={genre.id}>
          <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
          {genre.name}
          </Link>
        </DropdownMenuItem>
     ))}
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default GenreDropDown  