import { Button } from "@/app/components/button";
import { NavBar } from "@/app/components/navbar";
import { Clapperboard, Link2, Undo2 } from "lucide-react";

export default function Detalhe() {
  return (
    <main className="flex min-h-screen flex-col">
        <NavBar/>

        <section className="flex p-12 gap-9 bg-cover backdrop-blur-md bg-[url('https://img.freepik.com/fotos-premium/um-buffet-de-comida-em-um-restaurante_808092-1809.jpg')]">
          <div className="w-[300px] rounded overflow-hidden">
            <img src="https://img.freepik.com/fotos-gratis/vista-superior-da-lasanha-italiana-guarnecida-com-molho-de-tomate-e-parmesao-ralado_141793-2144.jpg?t=st=1716209934~exp=1716213534~hmac=dcb7b81467efd1eb1d939d7af9df31b5269025154f9924741a3ee87c23e9f4f6&w=740" alt="" />
          </div>

          <div className="flex flex-col gap-9 w-3/5 text-white">
            <h2 className="text-4xl font-bold">Nome da Receita</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod quo sequi sit? Eum, deleniti harum laudantium dolorem quae dicta, nulla at enim vero qui culpa aspernatur voluptatibus, neque obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique quasi necessitatibus exercitationem esse. Repudiandae saepe nobis odit a voluptatum earum iste, in, temporibus, et eveniet iure facilis cumque. Harum!</p>
          </div>
        </section>

        <section className="flex gap-6 m-4">
          <Button label="voltar" href="/" icon={<Undo2 />}/>
          <Button label="site" href="/" icon={<Link2 />}/>
          <Button label="video" href="/" icon={<Clapperboard />}/>
        </section>

    </main>
  );
}
