import { Button } from "@/app/components/button";
import { NavBar } from "@/app/components/navbar";
import { Clapperboard, Link2, Undo2 } from "lucide-react";

export default function Detalhe() {
  return (
    <main className="flex min-h-screen flex-col">
        
        <NavBar/>

        <section className="flex p-12  gap-9 bg-[url('https://image.tmdb.org/t/p/original/pwkrLGX3krLevo5Ua8Eq71fXIwr.jpg')]">
          <div className="w-[300px] rounded overflow-hidden">
            <img src="https://image.tmdb.org/t/p/original/boObGdocQS07Nu7IrettgA5oRTp.jpg" alt="" />
          </div>

          <div className="flex flex-col gap-9 w-3/5 text-white">
            <h2 className="text-4xl font-bold">Titulo Filme</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod quo sequi sit? Eum, deleniti harum laudantium dolorem quae dicta, nulla at enim vero qui culpa aspernatur voluptatibus, neque obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique quasi necessitatibus exercitationem esse. Repudiandae saepe nobis odit a voluptatum earum iste, in, temporibus, et eveniet iure facilis cumque. Harum!</p>
          </div>
        </section>

        <section className="flex gap-6 m-4">
          <Button label="voltar" href="/" icon={<Undo2 />}/>
          <Button label="site" href="/" icon={<Link2 />}/>
          <Button label="trailer" href="/" icon={<Clapperboard />}/>
        </section>

    </main>
  );
}
