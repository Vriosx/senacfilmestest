import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Card } from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

    <NavBar/>
    
      <Title>Filmes em alta</Title>
    <section className="flex gap-4 m-4 flex-wrap">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </section>
    
    <section>
      <Title>Séries em alta</Title>
    </section>
    
    </main>
  );
}
