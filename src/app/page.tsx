import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Card } from "./components/card";

export default function Home() {

  const filmes = [
    {
    id : 1,
    title: "Caça fantasmas",
    poster_path: "https://image.tmdb.org/t/p/original/boObGdocQS07Nu7IrettgA5oRTp.jpg",
    vote_average : 6.6  
    },
    {
      id : 2,
      title: "V de Vingaça",
      poster_path: "https://image.tmdb.org/t/p/original/rt4TiquPSuBqJsyUVUUC4rCP0ia.jpg",
      vote_average : 9.9
    }
  ]


  return (
    <main className="flex min-h-screen flex-col">

    <NavBar/>
    
      <Title>Filmes em alta</Title>
    <section className="flex gap-4 m-4 flex-wrap">
      { filmes.map( filmes => <Card filme={filmes} />) }
      
    </section>
    
    <section>
      <Title>Séries em alta</Title>
    </section>
    
    </main>
  );
}
