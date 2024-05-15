import Link from "next/link";

export function NavBar() {

    return (
        <nav className="flex justify-between items-center bg-slate-800 w-full px-6 py-8">
            <Link href="/">
                <h1 className="text-4xl uppercase font-bold text-yellow-500 ">
                    Senac Filmes
                </h1>
            </Link>
            <Link href="/sobre">sobre</Link>
        </nav>
    )


}