"use client"

import { Heart, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

interface CardProps{
    filme:{
        id: number,
        title : string,
        poster_path : string,
        vote_average: number
    }
}

export function Card({filme} : CardProps){

    const [favorito, setFavorito] = useState(false) 

    function toggleFavorito(){
        setFavorito(!favorito)
    }


    return(
        <div className="flex flex-col items-center w-36 relative">
            {favorito ? 
            <Heart onClick={toggleFavorito} className="text-red-400 fill-red-400  absolute right-2 top-2 cursor-pointer"/> :
            <Heart onClick={toggleFavorito} className="text-white absolute right-2 top-2 cursor-pointer"/>
        }
            <img className="w-36 rounded" src={filme.poster_path} alt=""/> 
            <h4 className="line-clamp-1">{filme.title}</h4>
            <div className=" flex gap-2">

            <Star className="text-amber-400"/>
                <span className="opacity-50">{filme.vote_average}</span>
            </div>
                <Button label="detalhes" href={"/filme/" + filme.id}/>
            
        </div>
    )
}