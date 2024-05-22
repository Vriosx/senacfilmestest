import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Card } from "./components/card";

export default function Home() {

  const filmes = [
    {
    id : 1,
    title: "Parmegiana",
    poster_path: "https://img.freepik.com/fotos-gratis/mulher-tomando-ensopado-de-carne-com-queijo-de-uma-panela-preta-com-talheres_114579-3000.jpg?t=st=1716210231~exp=1716213831~hmac=feb6664427d23bbd4645639f249fe2e9bc66ce9264ee02225a37efe1c6e313a2&w=740",
    vote_average : 9.9  
    },
    {
      id : 2,
      title: "Picadinho",
      poster_path: "https://img.freepik.com/fotos-gratis/delicioso-goulash-pronto-para-o-jantar_23-2149370830.jpg?t=st=1716210184~exp=1716213784~hmac=b2911cbe6cda5c527c7a1efd7666bf0f9e986847348cf7fa2dc180c5ec046e9a&w=360",
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
