import { Heart, Star } from "lucide-react";
import Link from "next/link";

export function Card(){
    return(
        <div className="flex flex-col items-center w-36 relative">
            <Heart className="absolute right-2 top-2"/>
            <img className="w-36 rounded" src="https://image.tmdb.org/t/p/original/boObGdocQS07Nu7IrettgA5oRTp.jpg" alt=""/> 
            <h4 className="line-clamp-1">Titulo do filme</h4>
            <div className=" flex gap-2">

            <Star className="text-amber-400"/>
                <span className="opacity-50">9.9</span>
            </div>

            <Link href="#" className="bg-blue-500 px-8 py-1 rounded hover:bg-blue-900 transition-colors duration-1000">
                detalhes</Link>
        </div>
    )
}