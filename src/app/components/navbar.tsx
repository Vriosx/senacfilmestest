import Link from "next/link";

export function NavBar() {

    return (
        <nav className="flex justify-between items-center bg-yellow-500 w-full px-6 py-8">
            <Link href="/">
                <h1 className="text-4xl uppercase font-bold text-cyan-950 ">
                    Senac Eats
                </h1>
            </Link>
            <Link href="/sobre">sobre</Link>
        </nav>
    )


}