import Link from "next/link";

interface ButtonProps{
    icon?: React.ReactNode,
    label : string,
    href: string
}

export function Button(props : ButtonProps){
   return(
   <Link href={props.href} className="flex gap-2 items-center justify-center bg-blue-500 px-8 py-1 rounded hover:bg-blue-900 transition-colors duration-1000">
    {props.icon}
    {props.label}
    </Link>
)
   
}